import Link from 'next/link'
import '../globals.css';
import { Nunito } from 'next/font/google'
import { getPages } from '@/sanity/sanity-utils';

const nunito = Nunito({ subsets: ['cyrillic'] })

export const metadata = {
  title: 'Ogogo Education | Образовательная платформа Ogogo',
  description: 'Образовательная платформа компании Ogogo',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pages = await getPages()
  return (
    <html lang="ru">
      <body className={`${nunito.className} max-w-3xl mx-auto py-10`}>
        <header className='flex items-center justify-between'>
          <Link
            href='/'
            className='bg-gradient-to-r from-orange-400  via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold'
          >
            Ogogo
          </Link>
          <div className='flex items-center gap-5 text-sm text-gray-600'>
            {
              pages.map(({ slug, _id, title }) => (
                <Link
                  key={_id}
                  href={`/${slug}`}
                  className='hover:underline transition'
                >
                  {title}
                </Link>
              ))
            }
          </div>
        </header>
        <main className='py-20'>
          {children}
        </main>
      </body>
    </html>
  )
}
