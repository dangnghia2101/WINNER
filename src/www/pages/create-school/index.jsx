import {
	BodyWrapper,
	Container,
	Title,
	FormItem,
	Wrapper,
	FormWrapper,
} from './create-school.elements';
import {
	Form,
	Input,
	Button,
	Select,
} from 'antd';

import React, { useState, useEffect, useRef } from 'react';
import { Principal } from '@dfinity/principal';
import { toast } from 'react-toastify';
import { withContext } from '../../hooks';
import { themes } from '../../assets/themes';
import NotPermistion from '../../components/not-permistion';

const { Option } = Select;
import { useCanister, useConnect } from '@connect2ic/react';

function CreateSchool(props) {
	const [superheroes, { loading, error }] = useCanister('superheroes');
	const { isConnected, principal } = useConnect();

	const profile = useRef({ role: 1 });

	useEffect(async () => {
		if (superheroes && isConnected) {
			await getMyInfor();
		}
	}, [superheroes]);

	const getMyInfor = async () => {
		const res = await superheroes.findUserById(Principal.fromText(principal));
		profile.current = res[0];
	};

	const onFinish = async (values) => {
		toast('Waiting...!!!');

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
						Address: This is address of school
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
						School Code: This is code of school
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
						Chairman: This is name of chairman
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
								name='SchoolName'
								rules={[{ required: true, message: 'Please input school name!' }]}>
								<Input
									width={'100%'}
									size='large'
									placeholder='Please input school name'
								/>
							</Form.Item>
							<div style={{ color: 'white', fontSize: 14 }}>Address</div>
							<Form.Item
								name='Address'
								rules={[{ required: true, message: 'Please input address!' }]}>
								<Input
									width={'100%'}
									size='large'
									placeholder='Please input address'
								/>
							</Form.Item>
							<div style={{ color: 'white', fontSize: 14 }}>School Code</div>
							<Form.Item
								name='SchoolCode'
								rules={[{ required: true, message: 'Please input school code!' }]}>
								<Input
									width={'100%'}
									size='large'
									placeholder='Please input school code'
								/>
							</Form.Item>
							<div style={{ color: 'white', fontSize: 14 }}>Chairman</div>
							<Form.Item
								name='Chairman'
								rules={[{ required: true, message: 'Please input chairman!' }]}>
								<Input
									width={'100%'}
									size='large'
									placeholder='Please input chairman'
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
