import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local';

const gupita = localFont({
  src: [
    {
      path: '../fonts/Gupika.otf',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-gupika',
  display: 'swap',
});

const franie = localFont({
  src: [
    {
      path: '../fonts/Franie-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Franie-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-franie',
  display: 'swap',
});


export const metadata: Metadata = {
  title: 'BARK | Educación Canina',
  description: 'Educación canina amable y respetuosa para fortalecer el vínculo con tu perro.',
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${gupita.variable} ${franie.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
