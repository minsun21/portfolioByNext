import Head from 'next/head';
import Layout from '../components/layout';
import Main from '../components/home/main';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>MS 포트폴리오</title>
        <meta name='description' content='MS Portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='flex min-h-screen flex-col items-center justify-center text-gray-600 body-font'>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
          <Main />
        </div>
      </section>
    </Layout>
  );
}
