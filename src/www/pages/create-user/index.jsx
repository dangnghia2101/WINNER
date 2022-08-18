import {
	BodyWrapper,
	Container,
	RedIcon,
	Required,
	Title,
	FormItem,
	Wrapper,
	FormWrapper,
} from './create-user.elements';
import { Upload, message, Form, Input, Button, Select, Modal } from 'antd';

import { InboxOutlined, PlusOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { client } from '../../utilities/ipfs';
import { Principal } from '@dfinity/principal';
import { customAxios } from '../../utils/custom-axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { withContext } from '../../hooks';
import { themes } from '../../assets/themes';
import { NFTStorage, File } from 'nft.storage';

const { Dragger } = Upload;
const { Option } = Select;
import { useCanister, useConnect } from '@connect2ic/react';

const IPFS_LINK = 'https://dweb.link/ipfs/';

function CreateUser(props) {
	const {
		isConnected,
		disconnect,
		activeProvider,
		isIdle,
		connect,
		isConnecting,
		principal,
	} = useConnect();
	const [fileImg, setFileImg] = useState('');
	const [listUsers, setListUsers] = useState([]);
	const [superheroes, { loading, error }] = useCanister('superheroes');

	// upload image

	const [previewVisible, setPreviewVisible] = useState(false);
	const [previewImage, setPreviewImage] = useState('');
	const [previewTitle, setPreviewTitle] = useState('');
	const [fileList, setFileList] = useState([]);

	// when image upload
	useEffect(() => {
		if (fileImg[0]) {
			requestUpdate();
		}
	}, [fileImg]);

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

	const onFinish = async (values) => {
		toast('Waiting...!!!');

		const cid = await client.put([fileList[0].originFileObj]);

		const image = `${IPFS_LINK}${cid}/${fileList[0].originFileObj.name}`;

		const res = await superheroes.insertUser(
			Principal.fromText(values?.address),
			values?.username,
			values?.identity,
			Number(values?.school),
			values?.birthday,
			image,
			values?.description
		);
		toast('Insert user success!!!');
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	const getLIst = async () => {
		const res = await superheroes.getAllUser();

		setListUsers(res);
	};

	getLIst();

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

	return (
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
						Upload image: Here is a photo of an NFT certified person.
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
						Enter username: this is name of student.
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
						Step 3
					</div>
					<div style={{ color: 'white' }}>
						Enter citizen identity card: This is citizen identity car of
						student.
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
						Step 4
					</div>
					<div style={{ color: 'white' }}>
						Paste public key: This is the wallet address of student.
						{''}
						<a style={{ color: 'blueviolet' }} href='https://plugwallet.ooo/'>
							{' '}
							How to create a wallet
						</a>
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
						Step 5
					</div>
					<div style={{ color: 'white' }}>
						Choose chool: This is school of student.
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
						Step 6
					</div>
					<div style={{ color: 'white' }}>
						Enter description: This is all description about student.
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
						Step 7
					</div>
					<div style={{ color: 'white' }}>
						Choose degree's rating: Student's rating
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
						Step 8
					</div>
					<div style={{ color: 'white' }}>
						Enter birthday: This is birthday of the student.
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
					marginBottom: 50,
				}}>
				<Title style={{ color: 'white' }}>Create Account</Title>
				<Required style={{ color: 'white' }}>
					<RedIcon style={{ color: 'white' }}>*</RedIcon> Required fields
				</Required>

				<BodyWrapper>
					<Form
						name='basic'
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
						autoComplete='off'>
						<FormWrapper>
							<FormItem>
								<Form.Item name='image'>
									<Upload
										// action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
										listType='picture-card'
										fileList={fileList}
										onPreview={handlePreview}
										onChange={handleChange}
										style={{
											flexDirection: 'row',
											justifyItems: 'center',
											display: 'flex',
										}}>
										{fileList.length >= 8 ? null : uploadButton}
									</Upload>
									<Modal
										visible={previewVisible}
										title={previewTitle}
										footer={null}
										onCancel={handleCancel}
										style={{ width: 700, height: 400 }}>
										<img
											alt='example'
											style={{
												width: '100%',
												height: '100%',
											}}
											src={previewImage}
										/>
									</Modal>
								</Form.Item>
							</FormItem>
							<div style={{ color: 'white', fontSize: 14 }}>Username</div>
							<Form.Item
								name='username'
								rules={[{ required: true, message: 'Please input username!' }]}>
								<Input
									width={'100%'}
									size='large'
									placeholder='Please input username'
								/>
							</Form.Item>

							<div style={{ color: 'white', fontSize: 14 }}>
								Citizen identity card
							</div>
							<Form.Item name='identity'>
								<Input
									size='large'
									placeholder='Please input citizen identity card'
								/>
							</Form.Item>

							<div style={{ color: 'white', fontSize: 14 }}>Adress wallet</div>
							<Form.Item name='address'>
								<Input size='large' placeholder='Please input address wallet' />
							</Form.Item>

							<div
								style={{
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'space-between',
								}}>
								<Form.Item name='school'>
									<Select
										defaultValue='School'
										size='large'
										style={{ width: 200, marginBottom: 20, borderRadius: 10 }}>
										<Option value='1'>FPT Polytechnic</Option>
										<Option value='2'>FPT University</Option>

										<Option value='3'>Uni of Greenwich</Option>
									</Select>
								</Form.Item>
							</div>

							<div style={{ color: 'white', fontSize: 14 }}>Description</div>
							<Form.Item name='description'>
								<Input size='large' placeholder='Please input description' />
							</Form.Item>

							<div style={{ color: 'white', fontSize: 14 }}>Birthday</div>
							<Form.Item name='birthday'>
								<Input size='large' placeholder='Please input birthday' />
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

export default withContext(CreateUser);
