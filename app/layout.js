import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar.js";
import Contact from "./Contact/page";



const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Balaji Gift Palace",
  description: "MotherLand Umbrella Distributor in Tamil Nadu", 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Contact/>
      </body>
    </html>
  );
}
