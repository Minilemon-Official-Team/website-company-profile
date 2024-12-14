import { Metadata } from "next";
import React from "react";
import "./globals.css";
import { poppins } from "./fonts";

import ScreenProvider from "@/providers/screen-provider";
import { siteConfig } from "@/config/site";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import NavigationMobile from "@/components/navigation-mobile";
import { PageIndicator } from "@/components/page-indicator";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Minilemon Universe",
  description:
    "PT. Minilemon Nusantara adalah perusahaan yang berorientasi pada Pendidikan Karakter Anak melalui berbagai Program Pendidikan berbasis seni, hiburan dan teknologi.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(poppins.className)}>
        <ScreenProvider>
          <Navbar />
          {children}
          <NavigationMobile />
          <PageIndicator />
          <Footer />
        </ScreenProvider>
      </body>
    </html>
  );
}
