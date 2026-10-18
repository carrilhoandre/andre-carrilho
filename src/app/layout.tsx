import type { Metadata } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import { profile } from "@/content";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const sora = Sora({ variable: "--font-sora", subsets: ["latin"] });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${profile.shortName} · ${profile.role}`,
  description: profile.summary,
  openGraph: {
    title: `${profile.shortName} · ${profile.role}`,
    description: profile.summary,
    type: "profile",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${sora.variable} ${jetbrains.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
