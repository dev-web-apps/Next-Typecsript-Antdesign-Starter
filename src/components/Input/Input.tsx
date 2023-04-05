import React from 'react'
import { Form, Input, theme } from 'antd'

interface IProps {
    type: string
    message: string
    placeholder: string
    label: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FormInput = ({
    onChange,
    type,
    message,
    placeholder,
    label,
}: IProps): ReactNode => {
    const { useToken } = theme
    const { token } = useToken()
    return (
        <Form.Item label={label} rules={[{ required: true, message: message }]}>
            <Input
                type={type}
                size="large"
                placeholder={placeholder}
                style={{ borderRadius: token.borderRadius }}
                onChange={onChange}
            />
        </Form.Item>
    )
}

export default FormInput
