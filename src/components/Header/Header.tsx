import React from 'react'
import { Layout, Col, Row, Divider } from 'antd'
import NavBar from './Nav'
import Profile from './Proflie'
import ImagesBox from '../Image/Images'

const { Header } = Layout
const AppHeader = (): ReactNode => (
    <Header
        className="header"
        style={{ background: '#fff', display: 'initial', padding: 0 }}
    >
        <Row style={{ padding: '8px 14px' }}>
            <Col span={12} className="logo">
                <ImagesBox src="/images/logo.svg" width={156} alt="Logo" />
            </Col>
            <Col span={12}>
                <Col
                    span={12}
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        maxWidth: '100%',
                    }}
                    className="profil-col"
                >
                    <Profile />
                </Col>
            </Col>
        </Row>
        <Divider />
        <Row style={{ display: 'block' }}>
            <Col>
                <NavBar />
            </Col>
        </Row>
        <Divider />
    </Header>
)

export default AppHeader
