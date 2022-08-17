import Link from 'next/link';
import Animation from './animataion';

export default function Main() {
  return (
    <>
      <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
        <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
          Next.js 포트폴리오 실습 중
        </h1>
        <p className='mb-8 leading-relaxed'>
          실로 두기 산야에 아름답고 아름다우냐? 살 옷을 가슴이 곳이 되려니와,
          것이다. 없으면, 그들은 그림자는 위하여서, 얼음에 가지에 맺어, 것이다.
          그림자는 황금시대의 찾아 관현악이며, 품에 장식하는 새가 것이다. 하는
          사는가 내려온 때문이다. 우리의 살 기쁘며, 능히 가지에 같이, 이것이다.
          무엇을 구할 되는 대고, 사랑의 인간이 칼이다. 싹이 영원히 그들은 싸인
          사람은 천자만홍이 불러 되려니와, 힘있다. 없으면, 맺어, 크고 영락과
          청춘의 끝까지 인간의 청춘의 칼이다.
        </p>
        <div className='flex justify-center'>
          <Link href='/projects'>
            <a className='btn-project'>프로젝트 보러가기</a>
          </Link>
        </div>
      </div>
      <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
        <Animation />
      </div>
    </>
  );
}
