import './globals.css';

export const metadata = {
  title: 'Zero Cow Factory',
  description: 'Created by Purv Kabaria',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
