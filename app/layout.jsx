import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Header from "@/components/Header";
import { ConvexClientProvider } from "@/components/convex-client-provider";
import { ClerkProvider } from "@clerk/nextjs/";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Splitr",
  description: "Smartest way to split bills and expenses with friends",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel ="icon" href="/logos/logo-s.png" sizes="any" />
      </head>
      <body
        className={`${inter.className} `}
      ><ClerkProvider>
        <ConvexClientProvider>
        <Header/>
        <main className="min-h-screen">{children}</main>
          </ConvexClientProvider>
          </ClerkProvider>
      </body>
    
    </html>
  );
}
