import { Geist, Geist_Mono, Montserrat, Open_Sans, Roboto, Roboto_Mono } from "next/font/google"

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const openSans = Open_Sans({
  weight: "400",
  subsets: ["latin"],
})

export const openSansBold = Open_Sans({
  weight: "800",
  subsets: ["latin"],
})

export const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
})

export const robotoBold = Roboto({
  weight: "800",
  subsets: ["latin"],
})

export const robotoMono = Roboto_Mono({
  weight: "400",
  subsets: ["latin"],
})

export const headlineBold = Montserrat({
    weight: "800",
    subsets: ["latin"]
})

export const bodyText = Montserrat({
    weight: "400",
    subsets: ["latin"]
})
