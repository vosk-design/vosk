import type { Metadata } from "next";
import "./globals.css";

import { ReactLenis } from "lenis/react";

export const metadata: Metadata = {
  title: "VOSK",
  description:
    "Independent design bureau focused on the exploration of identity through an innovative approach, strategy, and the application of new technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ReactLenis root>{children}</ReactLenis>
      </body>
    </html>
  );
}
