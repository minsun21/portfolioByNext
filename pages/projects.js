import Head from 'next/head';
import Layout from '../components/layout';
import ProjectItem from '../components/projects/project-item';
import { DATABASE_ID, TOKEN } from '../config';

export default function Projects({ projects }) {
  return (
    <Layout>
      <div className='flex flex-col items-center justify-center min-h-screen px-3 mb-10'>
        <Head>
          <title>프로젝트 모음</title>
          <meta name='description' content='MS Portfolio' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <div className='grid grid-cols-1 gap-24 p-12 m-4 md:grid-cols-2'>
          {projects.results.map((project) => (
            <ProjectItem data={project} key={project.id} />
          ))}
        </div>
      </div>
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
