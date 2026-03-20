import type { Metadata } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import CustomCursor from "@/components/layout/CustomCursor";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anurag Kumar | Full Stack Developer",
  description: "Building scalable, real-time, and production-ready applications.",
  openGraph: {
    title: "Anurag Kumar - 3D Portfolio",
    description: "Premium SaaS-like 3D Developer Portfolio",
    url: "https://anuragkumar.dev",
    siteName: "Anurag Kumar",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col antialiased selection:bg-primary/30 selection:text-primary">
        <LanguageProvider>
          <CustomCursor />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

