import "./globals.css";
import { Inter } from "next/font/google";
import { AppProvider } from "@/context/context";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Loguess",
  description: "A game where you guess a famous logo!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-screen">
      <AppProvider>
        <body className={inter.className}>{children}</body>
        <Footer />
      </AppProvider>
    </html>
  );
}
