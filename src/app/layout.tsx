import type { Metadata } from "next";
import "./globals.css";
import "../style/style.css";

import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/footer/Footer";

export const metadata: Metadata = {
  title: "Inisial-Landing",
  description: "Landing Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
