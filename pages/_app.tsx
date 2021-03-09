import type { AppProps } from 'next/app'
import '../styles/Main.css';
import {BackTop, ConfigProvider, Layout, Menu, Typography} from "antd";
import frFR from 'antd/lib/locale/fr_FR';
import {HomeOutlined, LinkOutlined, ProjectOutlined} from "@ant-design/icons";
import Link from "next/link";
import {useRouter} from "next/router";
import {useState} from "react";
import {DefaultSeo} from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
    const [collapsed, setCollapsed] = useState(true);
    const router = useRouter();

    return <ConfigProvider locale={frFR}>
        <DefaultSeo
            titleTemplate = '%s - TriForMine'
            defaultTitle = 'TriForMine'
            description = 'Site officielle de TriForMine, une développeur indépendant.'
            openGraph={{
                type: 'website',
                locale: 'fr_FR',
                url: 'https://www.triformine.tk/',
                site_name: 'TriForMine',
            }}
            twitter={{
                handle: '@TriForMine',
                site: '@TriForMine',
                cardType: 'summary'
            }}
        />
        <Layout style={{ minHeight: '100vh' }}>
            <Layout.Sider
                collapsible
                collapsed={collapsed}
                breakpoint="md"
                collapsedWidth="80"
                onCollapse={(collapsed, type) => {
                    setCollapsed(collapsed);
                }}>
                <div className='logo'  style={{ textAlign: 'center' }}>
                    <Typography.Title level={5}>
                        TriForMine
                    </Typography.Title>
                </div>
                <Menu mode="inline" selectedKeys={[router.pathname]}>
                    <Menu.Item key='/' icon={<HomeOutlined />}><Link href='/'><a>Accueil</a></Link></Menu.Item>
                    <Menu.Item key='/projets' icon={<ProjectOutlined />}><Link href='/projets'><a>Projets</a></Link></Menu.Item>
                    <Menu.Item key='/liens' icon={<LinkOutlined />}><Link href='/liens'><a>Liens</a></Link></Menu.Item>
                </Menu>
            </Layout.Sider>
            <Layout className="site-layout">
                <Layout.Content style={{ margin: '24px 16px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <Component {...pageProps} />
                        <BackTop/>
                    </div>
                </Layout.Content>
                <Layout.Footer style={{ textAlign: 'center' }}>TriForMine ©2021</Layout.Footer>
            </Layout>
        </Layout>
    </ConfigProvider>
}

export default MyApp
