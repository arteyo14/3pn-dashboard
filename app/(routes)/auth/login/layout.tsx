import { Metadata } from "next"

export const metadata: Metadata = {
  title: "3PN | LOGIN",
  description: "DASHBOARD TARSK",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
