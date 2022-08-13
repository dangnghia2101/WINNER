import React from 'react';
import {
	BodyWrapper,
	Container,
	FormItemDesc,
	FormItemName,
	RedIcon,
	Required,
	Title,
	FormItem,
	Wrapper,
	FormWrapper,
} from './create-nft.elements';
import {
	Upload,
	message,
	Form,
	Input,
	Button,
	Select,
	Select,
	Modal,
	Upload,
} from 'antd';

import { InboxOutlined, PlusOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { client } from '../../utilities/ipfs';
import { superheroes } from '../../../declarations';
import { Principal } from '@dfinity/principal';
import { toList } from '../../utilities/idl';
import { idlFactory } from '../../../declarations/superheroes.did.js';
import { customAxios } from '../../utils/custom-axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { withContext } from '../../hooks';
import { themes } from '../../assets/themes';

const { Dragger } = Upload;
const { Option } = Select;
import { useCanister, useConnect } from '@connect2ic/react';

const IPFS_LINK = 'https://dweb.link/ipfs/';

function CreateNft(props) {
	const {
		isConnected,
		disconnect,
		activeProvider,
		isIdle,
		connect,
		isConnecting,
		principal,
	} = useConnect();
	const [fileImg, setFileImg] = useState(true);
	const [listNFt, setListNFt] = useState([]);
	const [listAllNFt, setListAllNFt] = useState([]);
	const [superheroes, { loading, error }] = useCanister('superheroes');

	function onChange(value) {
		console.log(`selected ${value}`);
	}

	function onSearch(val) {
		console.log('search:', val);
	}

	const onChangeFile = async (info) => {
		const { status } = info.file;
		console.log(info);
		message.success(`${info.file.name} file uploaded successfully.`);
		return info.file;
	};
	const requestUpdate = async (info) => {
		const resImg = await onChangeFile(info);
		setFileImg(resImg);
		info.onSuccess('okk');
	};

	const getBase64 = (file) =>
		new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);

			reader.onload = () => resolve(reader.result);

			reader.onerror = (error) => reject(error);
		});

	useEffect(async () => {
		if (principal && superheroes) {
			getLIst();
		}
	}, [principal, superheroes]);

	const getListAll = async () => {
		console.log('SUPERHEROES_CANISTER_ID', process.env.SUPERHEROES_CANISTER_ID);
		const res = await superheroes.getAllTokens();
		console.log(res);
		const promise4all = Promise.all(
			res.map(function (el) {
				return customAxios(el.metadata[0]?.tokenUri);
			})
		);
		const resu = await promise4all;
		console.log(resu);
		setListAllNFt(resu);
	};

	const onFinish = async (values) => {
		console.log(values);
		toast('Minting NFT!!!');
		const cid = await client.put([fileImg]);
		const nFile = new File(
			[
				JSON.stringify({
					description: values?.description,
					name: values?.name,
					image: `${IPFS_LINK}${cid}/${values?.image?.file?.name}`,
				}),
			],
			`${values?.name}.json`,
			{ type: 'text/plain' }
		);
		const metadataCID = await client.put([nFile]);
		const res = await superheroes.mint(Principal.fromText(principal), [
			{ tokenUri: `${IPFS_LINK}${metadataCID}/${values?.name}.json` },
		]);
		console.log('==== mint ', res);
		toast('Minted NFT success!!!');
		getLIst();
		getListAll();
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	const getLIst = async () => {
		const res = await superheroes.getUserTokens(Principal.fromText(principal));
		const promise4all = Promise.all(
			res.map(function (el) {
				return customAxios(el.metadata[0]?.tokenUri);
			})
		);
		const resu = await promise4all;
		setListNFt(resu);
	};

	// upload image

	const [previewVisible, setPreviewVisible] = useState(false);
	const [previewImage, setPreviewImage] = useState('');
	const [previewTitle, setPreviewTitle] = useState('');
	const [fileList, setFileList] = useState([]);

	const handleCancel = () => setPreviewVisible(false);

	const handlePreview = async (file) => {
		if (!file.url && !file.preview) {
			file.preview = await getBase64(file.originFileObj);
		}

		console.log('=====> ', file.preview);

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
					Huong dan su dung
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
						Upload your image: this is image of nft for students
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
						Type degree's name: this is name of degree
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
						Type degree's description: provide all information about degree.
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
						Pass public key: Day la public cua vi nguoi nhan nft sau khi ban
						mint ra, cach de co public key {''}
						<a style={{ color: 'blueviolet' }} href='https://plugwallet.ooo/'>
							tai day
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
						Choose degree's category: this is category of degree
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
						Choose degree's chool: this is chool cung cap bang
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
						Choose degree's gpa: nhap diem cua bang
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
				<Title style={{ color: 'white' }}>Create Dgree NFT</Title>
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
								<Form.Item>
									<Upload
										action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
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

								{/* <Form.Item
									name='image'
									rules={[{ required: true, message: 'Please upload image!' }]}>
									<Dragger customRequest={requestUpdate}>
										<p className='ant-upload-drag-icon'>
											<InboxOutlined />
										</p>
										<p className='ant-upload-text'>
											Click or drag file to this area to upload
										</p>
										<p className='ant-upload-hint'>
											Support for a single or bulk upload. Strictly prohibit
											from uploading company data or other band files
										</p>
									</Dragger>
								</Form.Item> */}
							</FormItem>
							<div style={{ color: 'white', fontSize: 14 }}>Name degree</div>
							<Form.Item
								name='name'
								rules={[{ required: true, message: 'Please input NFT name!' }]}>
								<Input
									width={'100%'}
									size='large'
									placeholder='Name of degree'
								/>
							</Form.Item>

							<div style={{ color: 'white', fontSize: 14 }}>Description</div>
							<Form.Item name='description'>
								<Input
									size='large'
									placeholder='Provide a detailed description of degree'
								/>
							</Form.Item>

							<div style={{ color: 'white', fontSize: 14 }}>Adress wallet</div>
							<Form.Item name='address'>
								<Input size='large' placeholder='Pass address wallet' />
							</Form.Item>

							<div
								style={{
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'space-between',
								}}>
								<Select
									defaultValue='Chọn loại bằng'
									size='large'
									style={{ width: 200, marginBottom: 20 }}>
									<Option value='1'>Bằng tốt nghiệp</Option>
									<Option value='2'>Bằng khen</Option>

									<Option value='3'>Chứng chỉ</Option>
								</Select>
								<Select
									defaultValue='Chọn truong'
									size='large'
									style={{ width: 200, marginBottom: 20 }}>
									<Option value='1'>FPT Polytechnic</Option>
									<Option value='2'>FPT University</Option>

									<Option value='3'>Uni of Greenwich</Option>
								</Select>
							</div>

							<div style={{ color: 'white', fontSize: 14 }}>Nhap GPA</div>
							<Form.Item name='gpa'>
								<Input size='large' placeholder='Nhap diem GPA' />
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

export default withContext(CreateNft);
