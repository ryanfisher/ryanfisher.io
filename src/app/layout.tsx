import type { Metadata, Viewport } from "next"
import "./globals.css"
import { bodyText } from "@/fonts"

export const metadata: Metadata = {
  title: "Ryan Fisher - Software Engineer, Hobbyist Photographer, Couch Philosopher",
  description: "Ryan Fisher is a software engineer based in San Diego, CA. He specializes in Ruby on Rails on the backend and JavaScript, TypeScript, and React on the frontend.",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodyText.className} antialiased container`}
      >
        {children}
      </body>
    </html>
  )
}
