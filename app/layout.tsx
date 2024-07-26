import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saku Arho - CV",
  description:
    "A page which I try to keep up to date with my recent experience.",
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
