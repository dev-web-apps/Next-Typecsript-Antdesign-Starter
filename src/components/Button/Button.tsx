import React from 'react'
import { Button as AntButton, ButtonProps, theme } from 'antd'

const Button = ({ children, ...rest }: ButtonProps): ReactNode => {
    const { useToken } = theme
    const { token } = useToken()
    return (
        <AntButton
            size="large"
            {...rest}
            style={{ borderRadius: token.borderRadius }}
        >
            {children}
        </AntButton>
    )
}

export default Button
