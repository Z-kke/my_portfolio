import "./globals.css";
import type { Metadata } from "next";
import MuiThemeProvider from "./theme-provider";

export const metadata: Metadata = {
  title: "Saku Arho - Portfolio",
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
      <body>
        <MuiThemeProvider>{children}</MuiThemeProvider>
      </body>
    </html>
  );
}
