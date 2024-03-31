import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Header from "@/components/Header";
import LeftColumn from "@/components/StickyColumn";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FunFox Week 1",
  description: "A fun week of learning and building with FunFox",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col items-center justify-between ">
            <div className="relative w-full mx-auto md:w-[80%] h-[200vh] md:h-[100vh]">
            <div className="absolute inset-0 z-[-10] ">
              <Image
                src="/assets/background.png"
                alt="background image"
                className="w-full h-full md:h-[110vh] bg-contain bg-no-repeat bg-center"
                width={1000}
                height={1000}
                quality={100}
              />
            </div>

            <div>
              <Header />
              <LeftColumn />

              {children}
            </div>
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
