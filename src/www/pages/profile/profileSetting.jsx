import React, { useEffect, useState } from 'react';
import './index.css';
import { Upload, message, Form, Input, Button, Skeleton, Select } from 'antd';
import {
	EditOutlined,
	ShoppingOutlined,
	LogoutOutlined,
} from '@ant-design/icons';

const { Dragger } = Upload;

function ProfileSetting() {
	return (
		<div style={{ backgroundColor: '#000000', alignItems: 'center', flex: 1 }}>
			<div style={{ height: 50 }} />
			<div
				style={{
					paddingHozizontal: 10,
					margin: 'auto',
					width: '70%',
					backgroundColor: '#212529',
					borderRadius: 10,
					padding: 10,
					paddingVertical: 40,
					paddingTop: 40,
				}}>
				<div
					style={{
						fontSize: 30,
						fontWeight: 'bold',
						color: 'white',
						textAlign: 'center',
					}}>
					Profile settings
				</div>

				<div className='row1' style={{ marginTop: 40, marginBottom: 40 }}>
					<div
						style={{
							with: '40%',
							alignItem: 'center',
							justifyContent: 'center',
							marginLeft: 40,
						}}>
						<img
							style={{ height: 200, width: 200, borderRadius: 120 }}
							src='https://axiesreact.surielementor.com/static/media/card-item-2.bfe0307457e2f66fb932.jpg'
						/>
						<div
							style={{
								fontSize: 17,
								color: 'white',
								textAlign: 'center',
								fontWeight: 'bold',
								marginTop: 10,
							}}>
							Upload your image
						</div>
						<div
							className='row1'
							style={{
								alignItems: 'center',
								marginTop: 15,
								marginLeft: 10,
							}}>
							<EditOutlined
								style={{ color: 'white' }}
								color='white'
								size={20}
							/>
							<div style={{ fontSize: 15, color: 'white', marginLeft: 10 }}>
								Profile setting
							</div>
						</div>
						<div
							className='row1'
							style={{ alignItems: 'center', marginTop: 15, marginLeft: 10 }}>
							<ShoppingOutlined style={{ color: 'white' }} />
							<div style={{ fontSize: 15, color: 'white', marginLeft: 10 }}>
								Collections
							</div>
						</div>
						<div
							className='row1'
							style={{ alignItems: 'center', marginTop: 15, marginLeft: 10 }}>
							<LogoutOutlined style={{ color: 'white' }} />
							<div style={{ fontSize: 15, color: 'white', marginLeft: 10 }}>
								Log out
							</div>
						</div>
					</div>
					<div style={{ width: '60%', marginLeft: 50 }}>
						<Form
							name='basic'
							labelCol={{ span: 8 }}
							wrapperCol={{ span: 16 }}
							// onFinish={onFinish}
							// onFinishFailed={onFinishFailed}
							autoComplete='off'>
							<div>
								<div style={textTitle}>User name</div>
								<Form.Item
									name='username'
									rules={[
										{ required: true, message: 'Please type your name!' },
									]}
									style={{ width: '130%', borderRadius: 20 }}>
									<Input
										style={{ borderRadius: 5 }}
										size='large'
										placeholder='Please type your name'
									/>
								</Form.Item>

								<div style={textTitle}>Full name</div>
								<Form.Item
									name='fullname'
									style={{ width: '130%', borderRadius: 20 }}>
									<Input
										size='large'
										placeholder='Full name'
										style={{ borderRadius: 5 }}
									/>
								</Form.Item>

								<div style={textTitle}>School</div>
								<Form.Item
									name='school'
									style={{ width: '130%', borderRadius: 20 }}>
									<Input
										size='large'
										placeholder='Your school'
										style={{ borderRadius: 5 }}
									/>
								</Form.Item>

								<div style={textTitle}>Address wallet</div>
								<Form.Item
									name='address'
									style={{ width: '130%', borderRadius: 20 }}>
									<Input
										size='large'
										placeholder='Your address wallet'
										style={{ borderRadius: 5 }}
									/>
								</Form.Item>

								<div>
									<Form.Item>
										<Button
											style={{ width: '130%', height: 40 }}
											type='primary'
											htmlType='submit'>
											Save profile
										</Button>
									</Form.Item>
								</div>
							</div>
						</Form>
					</div>
				</div>
			</div>

			<div style={{ height: 50 }}></div>
		</div>
	);
}

const styles = {
	container: {
		backgroundColor: '#000000',
		alignItems: 'center',
		flex: 1,
	},

	textTitle: {
		color: 'white',
		textSize: 35,
	},
	containerColum: {
		paddingHozizontal: 10,
		margin: 'auto',
		width: '70%',
		backgroundColor: '#212529',
		borderRadius: 10,
		padding: 10,
		paddingVertical: 40,
	},
	columnLeft: {
		with: 600,
		alignItem: 'center',
		justifyContent: 'center',
	},

	row: {
		flexDirection: 'row',
	},
	textMenu: {
		color: 'white',
		fontSize: 20,
	},
};

const textTitle = {
	color: 'white',
	textSize: 35,
};

const columnRight = {
	with: 400,
	backgroundColor: 'red',
};

export default ProfileSetting;
