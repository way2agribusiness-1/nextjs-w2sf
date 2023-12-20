import Head from "next/head";


const MetaData = ({ title }) => {
    return (
        <Head>
            <title>{title}</title>
        </Head>
    );
};

export default MetaData;
