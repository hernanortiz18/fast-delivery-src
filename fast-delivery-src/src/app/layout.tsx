import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { ReactProvider } from "@/redux/providers";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {

  title: 'Fast Delivery',
  description: '',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{ background: "rgba(61, 29, 243, 1)" }}
      >
        <ReactProvider>
          <Providers>
            {children}
          </Providers>
        </ReactProvider>
      </body>
    </html>
  );
}
