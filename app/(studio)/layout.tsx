import '../globals.css';


export const metadata = {
  title: 'Админ панель академии Ogogo',
  description: 'Админ панель компании Ogogo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  )
}
