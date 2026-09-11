import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Store Manager — Clothing Store Management System",
  description:
    "Internal management system for clothing retail: inventory, sales, customers, and reporting.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
