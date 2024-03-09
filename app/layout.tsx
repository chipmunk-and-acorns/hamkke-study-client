import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

import "./globals.css";
import MainHeader from "@/components/header/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hamkke Study",
  description: "Recruit teammates for studies, projects, and more.",
  // icons: { icon: "./favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <MainHeader />
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
