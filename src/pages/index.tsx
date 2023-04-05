import React, { useState } from 'react'
import { Col, Divider, Form, Row, Typography } from 'antd'
import { useRouter } from 'next/router'
import FormInput from '../components/Input/Input'
import Button from '../components/Button/Button'
import ImagesBox from '../components/Image/Images'
const { Title } = Typography

export default function Home(): ReactNode {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (): void => {
        router.push('/example')
    }

    return (
        <div className="main-login">
            <ImagesBox width={200} src="/images/logo.svg" alt="Logo" />
            <Title level={2} className="wel-heading">
                Welcome back!
            </Title>
            <Form
                name="normal_login"
                className="login-form"
                layout="vertical"
                initialValues={{ remember: true }}
                onFinish={onSubmit}
            >
                <FormInput
                    label="E-mail"
                    message="Please input your E-mail!"
                    type="email"
                    placeholder="Type your e-mail"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <FormInput
                    label="Password"
                    message="Please input your Password!"
                    type="password"
                    placeholder="Type your password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Form.Item style={{ textAlign: 'end' }}>
                    <a className="login-form-forgot" href="#">
                        Forgot password
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        block
                        onClick={onSubmit}
                        disabled={email === '' || password === ''}
                    >
                        Sign in
                    </Button>
                </Form.Item>

                <Divider>or do it via </Divider>
                <Row>
                    <Col style={{ margin: '0 auto' }}>
                        <Button style={{ height: 'auto' }}>
                            <ImagesBox
                                width={35}
                                src="/images/google.svg"
                                alt="Google"
                            />
                        </Button>
                    </Col>
                </Row>

                <Title level={5} className="sign-up-btn">
                    Don´t you have an account? <a href="">Sign up</a>
                </Title>
            </Form>
        </div>
    )
}
