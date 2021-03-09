import {Button, Result} from "antd";
import {NextSeo} from "next-seo";
import Link from "next/link";
import React from "react";

function Error({ statusCode }) {
    return (
        <p>
            {statusCode
                ? (statusCode === 403 ?
                        <React.Fragment>
                            <NextSeo
                                title="404"
                            />
                            <Result
                                status="403"
                                title="Oops!"
                                subTitle="Désolé, vous n'êtes pas autorisé à accéder à cette page."
                                extra={<Link href="/"><Button type="primary">Page d'accueil</Button></Link>}
                            />
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <NextSeo
                                title="500"
                            />
                            <Result
                                status="500"
                                title="Oops!"
                                subTitle="Désolé, quelque chose s'est mal passé."
                                extra={<Link href="/"><Button type="primary">Page d'accueil</Button></Link>}
                            />
                        </React.Fragment>
                )
                : 'An error occurred on client'}
        </p>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error
