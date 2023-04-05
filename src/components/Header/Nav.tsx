import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Menu } from 'antd'
import ImagesBox from '../Image/Images'

const items = [
    {
        label: 'Dashboard',
        key: '/',
        icon: (
            <ImagesBox src="/images/Dashboard.svg" width={18} alt="Dashboard" />
        ),
    },
    {
        label: 'Jenny',
        key: '/conversation',
        icon: <ImagesBox src="/images/Jenny.svg" width={18} alt="Jenny" />,
    },
    {
        label: 'Messages',
        key: '/',
        icon: (
            <ImagesBox src="/images/Messages.svg" width={18} alt="Messages" />
        ),
    },
    {
        label: 'Notes',
        key: '/',
        icon: <ImagesBox src="/images/Notes.svg" width={18} alt="Notes" />,
    },
    {
        label: 'Documents',
        key: '/',
        icon: (
            <ImagesBox src="/images/Documents.svg" width={18} alt="Documents" />
        ),
    },
    {
        label: 'Customer',
        key: '/',
        icon: <ImagesBox src="/images/Customer.svg" width={18} alt="" />,
    },
]

const NavBar = (): ReactNode => {
    const router = useRouter()
    const [current, setCurrent] = useState('Dashboard')
    const onClick = (e: any): void => {
        router.push(e.key)
    }

    useEffect(() => {
        const key = router.pathname
        setCurrent(key)
    }, [router.pathname])

    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
        />
    )
}

export default NavBar
