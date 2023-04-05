import React, { useEffect } from 'react'
import { Dropdown, Space, Avatar } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'
import ImagesBox from '../Image/Images'

const items = [
    {
        key: '/profile',
        label: <a>Profile</a>,
    },
    {
        key: '/',
        label: <a>Logout</a>,
    },
]

const Profile = (): ReactNode => {
    const router = useRouter()

    const onClick = (e: any): void => {
        router.push(e.key)
    }

    useEffect(() => {
        const key = router.pathname
    }, [router.pathname])

    return (
        <Dropdown menu={{ items, onClick: onClick }}>
            <a onClick={(e) => e.preventDefault()} style={{ display: 'flex' }}>
                <Space>
                    <Avatar
                        size={46}
                        src={
                            <ImagesBox
                                src="/images/userImage.png"
                                alt="avatar"
                                width={46}
                            />
                        }
                    />
                    Chasen
                    <DownOutlined />
                </Space>
            </a>
        </Dropdown>
    )
}

export default Profile
