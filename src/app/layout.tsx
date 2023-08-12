import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { ModelProvider } from "@/components/model-provider";
import ToasterProvider from "@/components/toaster-provider";
import { CrispProvider } from "@/components/crisp-provider";

const open_sans = Open_Sans({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "AI Saas",
  description: "AI platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="min-h-screen">
        <CrispProvider/>
        <body className={open_sans.className}>
          <ModelProvider/>
          <ToasterProvider/>
            {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
