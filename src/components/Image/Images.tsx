import { Image } from 'antd'
import React from 'react'

interface Iprops {
    [key: string]: any
    alt: string
}

const ImagesBox = ({ alt, ...rest }: Iprops): ReactNode => {
    return <Image {...rest} alt={alt} preview={false} />
}

export default ImagesBox
