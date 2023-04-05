import React from 'react'
import JennyLayout from '../layouts/JennyLayout/JennyLayout'

const Example1 = (): ReactNode => {
    return <div>Example1</div>
}

export default Example1

Example1.getLayout = function getLayout(page: ReactNode) {
    return <JennyLayout>{page}</JennyLayout>
}
