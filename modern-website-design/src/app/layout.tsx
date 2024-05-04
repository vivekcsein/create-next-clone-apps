import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "frnz-ui/dist/styles/styles_ui.css";
import NavResponsive from "../components/ui/Navbar_/NavResponsive";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modern-Basic-website",
  description: "Modern-Basic-Website created by vivekcse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavResponsive />
        {children}
      </body>
    </html>
  );
}
