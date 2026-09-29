import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marcus Acosta — Backend, Infrastructure & ML Engineering",
  description:
    "I build machine learning systems from training to production. Technical co-founder at BETTORCA. Open-source work in inference, preference optimization, and reliability.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
