import Link from 'next/link';

export default function Footer({ children }) {
  return (
    <>
      <footer className='body-font'>
        <div className='bg-gray-100'>
          <div className='container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              className='w-10 h-10 text-white p-2 bg-indigo-500 rounded-full'
              viewBox='0 0 24 24'
            >
              <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
            </svg>
            <Link href='/'>
              <a className='ml-3 text-xl'>MS Portfolio</a>
            </Link>
            <p className='text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4'>
              © 2020 Tailblocks —
              <a
                href='https://twitter.com/knyttneve'
                rel='noopener noreferrer'
                className='text-gray-600 ml-1'
                target='_blank'
              >
                @knyttneve
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
