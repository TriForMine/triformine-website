import {Button, Result} from "antd";
import {NextSeo} from "next-seo";
import React from "react";
import Link from "next/link";

export default function Custom404() {
    return <React.Fragment>
        <NextSeo
            title="404"
        />
        <Result
            status="404"
            title="Oups!"
            subTitle="La page que vous recherchez semble introuvable"
            extra={<Link href="/"><Button type="primary">Page d'accueil</Button></Link>}
        />
    </React.Fragment>
}
