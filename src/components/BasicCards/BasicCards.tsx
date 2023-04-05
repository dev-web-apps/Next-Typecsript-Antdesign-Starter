import React from 'react'
import { Card, CardProps, theme } from 'antd'

const BasicCard = ({ children, ...rest }: CardProps): ReactNode => {
    const { useToken } = theme
    const { token } = useToken()
    return (
        <Card {...rest} style={{ borderRadius: token.borderRadiusSM }}>
            {children}
        </Card>
    )
}

export default BasicCard
