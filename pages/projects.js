import Head from 'next/head';
import Layout from '../components/layout';

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>프로젝트 모음</title>
        <meta name='description' content='MS Portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>프로젝트</h1>
    </Layout>
  );
}
