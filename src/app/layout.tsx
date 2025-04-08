import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NavigationMenuDemo } from "@/components/navbar";
import { Footer } from "@/components/footer";
import CursorTorchEffectWrapper from "@/components/cursor-torch-effect";

export const metadata: Metadata = {
  title: "Marmik Soni - Developer, Tech-Enthusiast",
  description: "Marmik Soni - Developer Portfolio",
  icons: {
    icon: "/favicon.ico"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CursorTorchEffectWrapper /> 
          <div className="flex-1">
            <div className="z-20 flex flex-col justify-center items-center font-[family-name:var(--font-geist-sans)]">
              <NavigationMenuDemo />
              {children}
            </div>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}