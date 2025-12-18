import "./globals.css";
import Navbar from "./components/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ernest — Portfolio",
  description: "Portfolio personnel de Ernest, Ingenieur logiciel-développeur full-stack.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-black text-white`}>
        <Navbar />
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
