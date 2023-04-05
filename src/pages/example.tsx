import React from 'react'
import DashboardLayout from '../layouts/DashboardLayout/DashboardLayout'

const Example = (): ReactNode => {
    return <div>Context</div>
}

export default Example

Example.getLayout = function getLayout(page: ReactNode) {
    return <DashboardLayout>{page}</DashboardLayout>
}
