import './globals.css'

export const metadata = {
  title: 'Anurag Roy | Digital Architect',
  description: 'AI Engineer & Systems Designer',
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