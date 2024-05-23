import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import { Inter } from "next/font/google";
import { GlobalProvider } from '@/context/GlobalContext'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nova Beauty",
  description: "Cornwall based holistic beauty and therapy services",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <GlobalProvider>
        <html lang="en">
          <body className={inter.className}>
            <Navbar />
              {children}
            <Footer />
          </body>
        </html>
      </GlobalProvider>
    </AuthProvider>
  );
}
