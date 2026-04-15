import type { Metadata } from "next";
import "./globals.css";
import { AppThemeProvider } from "@/components/providers/app-theme-provider";

export const metadata: Metadata = {
  title: "React Todo Coach",
  description: "A small Todo app built with Next.js, TypeScript, and Material UI."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppThemeProvider>{children}</AppThemeProvider>
      </body>
    </html>
  );
}
