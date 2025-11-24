export const metadata = {
  title: 'API Server',
  description: 'Next.js API Server with Authentication',
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

