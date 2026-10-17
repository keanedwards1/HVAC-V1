import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Northline Heating & Air | Fast HVAC Service",
  description:
    "Fast, reliable heating and AC repair with upfront pricing and same-day dispatch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
