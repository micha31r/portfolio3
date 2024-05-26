import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import clsx from "clsx";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: "https://www.michaelren.dev/",
  title: "Michael Ren",
  description: "I'm a second-year computer science student at the University of Melbourne. I'm passionate about programming, graphic design, and user interface design.",
  openGraph: {
    title: "Michael Ren",
    description: "I'm a second-year computer science student at the University of Melbourne. I'm passionate about programming, graphic design, and user interface design.",
    // url: '/',
    siteName: 'Michael Ren',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Michael Ren",
    description: "I'm a second-year computer science student at the University of Melbourne. I'm passionate about programming, graphic design, and user interface design.",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clsx(
        "min-h-svh bg-background font-sans antialiased",
        inter.className
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
