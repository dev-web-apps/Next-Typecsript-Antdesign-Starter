import type { AppProps } from 'next/app'
import { ConfigProvider } from 'antd'
import GlobalStyles from '../styles/globals'
import theme from '../theme.json'
import { NextPage } from 'next'
import Head from 'next/head'

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactNode) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function App({
    Component,
    pageProps,
}: AppPropsWithLayout): ReactNode {
    const getLayout = Component.getLayout || ((page) => page)

    return getLayout(
        <ConfigProvider theme={theme}>
            <GlobalStyles />
            <Head>
                <title>Kurious</title>
            </Head>
            <Component {...pageProps} />
        </ConfigProvider>
    )
}
