import type { Metadata } from "next"
import "@/src/styles/globals.scss"

export const metadata: Metadata = {
  title: "3PN | DASHBOARD",
  description: "DASHBOARD TARSK",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  )
}
