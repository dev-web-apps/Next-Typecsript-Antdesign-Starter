import AppHeader from '@/src/components/Header/Header'
import { Layout } from 'antd'
import React from 'react'
interface IProps {
    children?: ReactNode
}

const { Content, Sider } = Layout

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    height: 'calc(100vh - 145px)',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#108ee9',
}

const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#3ba0e9',
}

const JennyLayout = ({ children }: IProps): ReactNode => {
    return (
        <div>
            <AppHeader />
            <Layout>
                <Sider
                    width={350}
                    style={siderStyle}
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={(broken) => {
                        console.log(broken)
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type)
                    }}
                >
                    SideBar
                </Sider>
                <Content style={contentStyle}>{children}</Content>
            </Layout>
        </div>
    )
}

export default JennyLayout
