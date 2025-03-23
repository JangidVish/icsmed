"use client";

import { useRouter } from "next/navigation";
import Footer from "./components/fixTemplateComponent/footer";
import HeaderComponent from "./components/fixTemplateComponent/headerComponent";
import LeftColumn from "./components/fixTemplateComponent/leftComponent";
import Navbar from "./components/fixTemplateComponent/navbar";
import RightConf from "./components/fixTemplateComponent/rightConferenceDate";
import "./globals.css";

export default function RootLayout({ children }) {
  const router = useRouter();

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gradient-to-b from-white to-blue-100 text-black">
        <header className="w-full text-center text-xl font-semibold shadow-md flex items-center flex-col justify-center bg-[#0284A8]">
          <HeaderComponent />
          <Navbar />
        </header>

        <main className="flex flex-row w-full flex-grow">
          <aside className="w-1/4 flex flex-col items-center justify-center shadow-lg">
            <LeftColumn />
          </aside>

          {/* Dynamic Content */}
          <section className="flex-grow flex p-6">{children}</section>

          <aside className="w-1/4 flex flex-col p-4 shadow-lg">
            <RightConf />
          </aside>
        </main>

        <footer className="w-full text-center py-4 text-sm shadow-md">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
