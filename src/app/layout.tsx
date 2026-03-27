import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GDC 2026 | 游戏开发者大会",
  description: "GDC Festival of Gaming 2026 - 游戏行业最具影响力的年度盛会",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen antialiased noise-overlay">
        {children}
      </body>
    </html>
  );
}
