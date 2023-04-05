import React from 'react'
import { Input, theme } from 'antd'
const { Search } = Input

interface IProps {
    onChange: (e: React.FormEvent<HTMLInputElement>) => void
    [key: string]: any
}

const SearchBox = ({ onChange, ...rest }: IProps): ReactNode => {
    const { useToken } = theme
    const { token } = useToken()

    return (
        <Search
            onChange={onChange}
            style={{ borderRadius: token.borderRadius }}
            {...rest}
        />
    )
}

export default SearchBox
