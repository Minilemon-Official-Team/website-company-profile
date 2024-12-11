import { Metadata } from "next";
import React from "react";
import "./globals.css";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import NavigationMobile from "@/components/navigation-mobile";
import { PageIndicator } from "@/components/page-indicator";
import { cn } from "@/lib/utils";
import ScreenProvider from "@/providers/screen-provider";
import { poppins } from "./fonts";

export const metadata: Metadata = {
  title: "Minilemon Universe",
  description:
    "PT. Minilemon Nusantara adalah perusahaan yang berorientasi pada Pendidikan Karakter Anak melalui berbagai Program Pendidikan berbasis seni, hiburan dan teknologi.",
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
