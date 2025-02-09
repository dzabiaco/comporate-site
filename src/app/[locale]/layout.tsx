import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider, useMessages } from 'next-intl';
import Script from 'next/script';
import Header from "../components/Header";

const inter = Ubuntu({subsets: ["latin"], weight: ["300","400","500","700"]});
// const inter = Roboto({});

export const metadata: Metadata = {
  title: "Comporate",
  description: "Streamline your HR processes with our advanced HRMS application. Simplify employee management, payroll, recruitment, and performance tracking. Discover the best solution for efficient and effective HR operations today!",
  keywords: "HRMS, Human Resource Management System, HR software, payroll management, employee management, recruitment software, performance tracking",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  icons: [
    { rel: "icon", type: "image/png", sizes: "16x16", href: "/icons/favicon-16x16.png", url:"" },
    { rel: "icon", type: "image/png", sizes: "32x32", href: "/icons/favicon-32x32.png", url:"" },
    // { rel: "icon", type: "image/svg+xml", href: "/icons/favicon.svg", url: "" }
  ],
  openGraph: {

  }
};

export default function RootLayout({
  children, params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {

  const messages = useMessages();
  return (

    <html lang={locale}>
      <head>
        <link rel="icon" href="/icons/android-chrome-192x192.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        {/* <link rel="stylesheet" href="../../../static/plugin/bootstrap.min.css"/> */}
        <link rel="stylesheet" href="../../static/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="../../static/assets/css/page.min.css" />
        <link rel="stylesheet" href="../../static/assets/css/style.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
      </head>
      {/* className={inter.className} */}
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header/>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
