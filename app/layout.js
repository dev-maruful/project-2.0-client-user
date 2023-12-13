import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/providers/QueryProvider";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>Create Next App</title>
      <body className={inter.className}>
        <QueryProvider>
          <Navbar />
          <div className="min-h-screen px-3 py-10 bg-gray-200">
            <div className="mx-auto max-w-7xl">{children}</div>
          </div>
          <Footer />
        </QueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
