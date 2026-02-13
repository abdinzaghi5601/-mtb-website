import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TBM Machines and Manufacturing Services | TBM Equipment & Components | India",
  description: "Leading supplier of Tunnel Boring Machine (TBM) spare parts, disc cutters, bearings, and components in India. Serving metro contractors, mining companies, and NHAI projects.",
  keywords: "TBM spare parts, tunnel boring machine, disc cutters, TBM manufacturers, India, Telangana",
  authors: [{ name: "TBM Machines and Manufacturing Services" }],
  icons: {
    icon: "/images/logo.jpeg",
    apple: "/images/logo.jpeg",
  },
  openGraph: {
    title: "TBM Machines and Manufacturing Services | TBM Equipment & Components",
    description: "Leading supplier of Tunnel Boring Machine spare parts in India",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TBM Machines and Manufacturing Services | TBM Equipment & Components",
    description: "Leading supplier of Tunnel Boring Machine spare parts in India",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

