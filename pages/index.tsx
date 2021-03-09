import {Col, PageHeader, Row, Statistic, Tag, Typography} from "antd";
import {NextSeo} from "next-seo";
import React from "react";
import useSWR from 'swr';
import axios from 'axios';

const routes = [
    {
        path: '/',
        breadcrumbName: 'Accueil',
    }
];

const fetcher = (url: string) => axios.get(url).then(res => res.data)

export default function Accueil() {
    const { data: githubUser, error: githubError } = useSWR('https://api.github.com/users/triformine', fetcher);

    console.log(githubUser);

    return <>
        <NextSeo
            title="Accueil"
        />
        <PageHeader
            title="TriForMine"
            breadcrumb={{ routes }}
            tags={<Tag color="blue">Développeur</Tag>}
            avatar={githubUser ? {src: githubUser.avatar_url} : undefined}
        >
            <Row>
                <div style={{flex: 1}}>
                    <Typography.Paragraph>
                        Bonjour, je suis TriForMine, un développeur indépendant français. J'ai commencé la programmation vers mes 11 ans.
                    </Typography.Paragraph>
                    <Typography.Paragraph>
                        J'ai créer plusieurs projets comme un bot discord, un site internet et un moteur voxel écrit en rust, et bien plus encore.
                    </Typography.Paragraph>
                </div>
            </Row>
        </PageHeader>
        <Row gutter={16}>
            <Col span={12} >
                <Row justify="center">
                    <Statistic title="Dêpot Github Public" value={githubUser?.public_repos} loading={githubUser === undefined} />
                </Row>
            </Col>
            <Col span={12}>
                <Row justify="center">
                    <Statistic title="Projets" value={3} />
                </Row>
            </Col>
        </Row>
    </>
}
