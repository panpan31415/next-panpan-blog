import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { roboto } from "@/style/fonts";




export const metadata: Metadata = {
  title: "Panpan's Blog",
  description: "a site to record everything about myself",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} relative min-h-full overflow-x-hidden bg-secondary space-x-0`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
