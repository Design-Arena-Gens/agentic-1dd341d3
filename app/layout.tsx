import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "$100 Crumbl Gift Card Survey",
  description:
    "Complete a quick survey and a few offers to claim your $100 Crumbl gift card reward."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
