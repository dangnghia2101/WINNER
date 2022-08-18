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
import { Upload, message, Form, Input, Button, Select, Modal } from 'antd';

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
import { NFTStorage, File } from 'nft.storage';

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
	const [fileImg, setFileImg] = useState('');
	const [listNFt, setListNFt] = useState([]);
	const [listAllNFt, setListAllNFt] = useState([]);
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

	useEffect(async () => {
		if (principal && superheroes) {
			getLIst();
		}
	}, [principal, superheroes]);

	const onFinish = async (values) => {
		toast('Minting NFT!!!');

		const cid = await client.put([fileList[0].originFileObj]);
		const nFile = new File(
			[
				JSON.stringify({
					description: values?.description,
					name: values?.name,
					category: values?.category,
					school: values?.school,
					rating: values?.rating,
					chairman: values?.chairman,
					image: `${IPFS_LINK}${cid}/${fileList[0].originFileObj.name}`,
					timeCreate: Date.now(),
				}),
			],
			`${values?.name}.json`,
			{ type: 'text/plain' }
		);
		const metadataCID = await client.put([nFile]);
		console.log('===> metadataCID ', metadataCID);

		const res = await superheroes.mint(Principal.fromText(values?.address), [
			{ tokenUri: `${IPFS_LINK}${metadataCID}/${values?.name}.json` },
		]);
		console.log('==== mint ', res);
		toast('Minted NFT success!!!');
		getLIst();
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
		console.log('getList ', resu);
		setListNFt(resu);
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
						Enter degree name: this is name of degree.
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
						Enter degree description: Provide all information about degree.
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
						Paste public key: This is the wallet address of the nft recipient,
						after the image is minted.
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
						Choose degree category: this is category of degree
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
						Choose degree chool: Graduate diploma certification facility
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
						Enter chairman name: This is the name of the director of the
						facility that issued the diploma
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
								<Form.Item name='category'>
									<Select
										defaultValue='Category'
										size='large'
										style={{ width: 200, marginBottom: 20, borderRadius: 10 }}>
										<Option value='1'>Diploma</Option>
										<Option value='2'>Certificate</Option>

										<Option value='3'>Merit</Option>
									</Select>
								</Form.Item>
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

							<div style={{ color: 'white', fontSize: 14 }}>Enter rating</div>
							<Form.Item name='rating'>
								<Input size='large' placeholder='Enter rating' />
							</Form.Item>

							<div style={{ color: 'white', fontSize: 14 }}>
								Enter name of chairman
							</div>
							<Form.Item name='chairman'>
								<Input size='large' placeholder='Name of chairman' />
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
