import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FavoritesProvider } from "@/context/FavoritesContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Application Météo",
  description: "Application météo réalisée avec Next.js et Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <FavoritesProvider>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </FavoritesProvider>
      </body>
    </html>
  );
}
