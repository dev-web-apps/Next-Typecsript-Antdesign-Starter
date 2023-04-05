import AppHeader from '@/src/components/Header/Header'
import { Layout } from 'antd'
import React from 'react'
interface IProps {
    children?: ReactNode
}

const { Content } = Layout

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    height: 'calc(100vh - 145px)',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#108ee9',
}

const DashboardLayout = ({ children }: IProps): ReactNode => {
    return (
        <div>
            <AppHeader />
            <Content style={contentStyle}>{children}</Content>
        </div>
    )
}

export default DashboardLayout
