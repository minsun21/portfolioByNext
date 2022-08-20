import Head from 'next/head';
import Layout from '../components/layout';
import { DATABASE_ID, TOKEN } from '../config';

export default function Projects({ projects }) {
  console.log(projects);
  return (
    <Layout>
      <Head>
        <title>프로젝트 모음</title>
        <meta name='description' content='MS Portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>총 프로젝트: {projects.results.length}</h1>
      {projects.results.map((project) => (
        <h1 key={project.id}>{project.properties.Name.title[0].plain_text}</h1>
      ))}
    </Layout>
  );
}

// 빌드 타임에 호출
export async function getStaticProps() {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Notion-Version': '2022-02-22',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [{ property: 'Name', direction: 'ascending' }],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  const projects = await res.json();

  const projectsNames = projects.results.map(
    (project) => project.properties.Name.title[0].plain_text
  );

  return {
    props: { projects },
  };
}
