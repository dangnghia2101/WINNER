import {
	BodyWrapper,
	Container,
	RedIcon,
	Required,
	Title,
	FormItem,
	Wrapper,
	FormWrapper,
} from './create-school.elements';
import {
	Upload,
	InputNumber,
	Form,
	Input,
	Button,
	Select,
	Modal,
	DatePicker,
} from 'antd';

import { client } from '../../utilities/ipfs';
import { PlusOutlined } from '@ant-design/icons';
import React, { useState, useEffect, useRef } from 'react';
import { Principal } from '@dfinity/principal';
import { toast } from 'react-toastify';
import { withContext } from '../../hooks';
import { themes } from '../../assets/themes';
import NotPermistion from '../../components/not-permistion';

const { Option } = Select;
import { useCanister, useConnect } from '@connect2ic/react';

const IPFS_LINK = 'https://dweb.link/ipfs/';

function CreateSchool(props) {
	const [fileImg, setFileImg] = useState('');
	const [superheroes, { loading, error }] = useCanister('superheroes');
	const { isConnected, principal } = useConnect();

	// upload image
	const [previewVisible, setPreviewVisible] = useState(false);
	const [previewImage, setPreviewImage] = useState('');
	const [previewTitle, setPreviewTitle] = useState('');
	const [fileList, setFileList] = useState([]);
	const profile = useRef({ role: 1 });
	const datePicker = useRef('');

	// when image upload
	useEffect(() => {
		if (fileImg[0]) {
			requestUpdate();
		}
	}, [fileImg]);

	useEffect(async () => {
		if (superheroes && isConnected) {
			await getMyInfor();
		}
	}, [superheroes]);

	const onChangeDate = (date, dateString) => {
		datePicker.current = dateString;
	};

	const getMyInfor = async () => {
		const res = await superheroes.findUserById(Principal.fromText(principal));
		profile.current = res[0];
	};

	const requestUpdate = () => {
		const resImg = fileList[0].thumbUrl;
		setFileImg(resImg);
	};

	const getBase64 = (file) =>
		new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);

			reader.onload = () => resolve(reader.result);

			reader.onerror = (error) => reject(error);
		});

	var min = 1;
   	var max = 100;
   	var rand =  min + (Math.random() * (max-min));

	const onFinish = async (values) => {
		toast('Waiting...!!!');

		const cid = await client.put([fileList[0].originFileObj]);

		const image = `${IPFS_LINK}${cid}/${fileList[0].originFileObj.name}`;

		const res = await superheroes.insertSchool(
			rand,
			values?.Name,
		);
		toast('Insert user success!!!');
		window.location.reload();
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	const handleCancel = () => setPreviewVisible(false);

	const handlePreview = async (file) => {
		if (!file.url && !file.preview) {
			file.preview = await getBase64(file.originFileObj);
		}

		setPreviewImage(file.url || file.preview);
		setPreviewVisible(true);
		setPreviewTitle(
			file.name || file.url.substring(file.url.lastIndexOf('/') + 1)
		);
	};

	const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

	const uploadButton = (
		<div>
			<PlusOutlined />
			<div
				style={{
					marginTop: 8,
				}}>
				Upload image
			</div>
		</div>
	);

	return Number(profile.current?.role) === 1 ? (
		<NotPermistion />
	) : (
		<Container
			style={{ backgroundColor: themes.colors.background, paddingTop: 50 }}>
			<Wrapper
				style={{
					backgroundColor: themes.colors.background_box,
					borderRadius: 15,
					margin: 'auto',
					width: '30%',
					padding: 20,
					marginTop: 20,
				}}>
				<div style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>
					User manual
				</div>
				<div
					style={{
						backgroundColor: themes.colors.background,
						borderRadius: 10,
						padding: 10,
						marginTop: 20,
					}}>
					<div style={{ color: 'white', fontWeight: 'bold', fontSize: 14 }}>
						Step 1
					</div>
					<div style={{ color: 'white' }}>
						School Name: This is name of school
					</div>
				</div>

				<div
					style={{
						backgroundColor: themes.colors.background,
						borderRadius: 10,
						padding: 10,
						marginTop: 20,
					}}>
					<div style={{ color: 'white', fontWeight: 'bold', fontSize: 14 }}>
						Step 2
					</div>
					<div style={{ color: 'white' }}>
						Submit: After entering, will press send 
					</div>
				</div>
			</Wrapper>
			<Wrapper
				style={{
					backgroundColor: themes.colors.background_box,
					borderRadius: 15,
					margin: 'auto',
					width: '50%',
					padding: 20,
					marginBottom: 40,
				}}>
				<Title style={{ color: 'white' }}>Create School</Title>
				<BodyWrapper>
					<Form
						name='basic'
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
						autoComplete='off'>
						<FormWrapper>
							<div style={{ color: 'white', fontSize: 14 }}>School Name</div>
							<Form.Item
								name='Name'
								rules={[{ required: true, message: 'Please input school name!' }]}>
								<Input
									width={'100%'}
									size='large'
									placeholder='Please input school name'
								/>
							</Form.Item>
							<FormItem>
								<Form.Item>
									<Button
										type='primary'
										htmlType='submit'
										size='large'
										style={{ width: 200, marginTop: 20 }}>
										Submit
									</Button>
								</Form.Item>
							</FormItem>
						</FormWrapper>
					</Form>
				</BodyWrapper>
			</Wrapper>
		</Container>
	);
}

export default withContext(CreateSchool);
