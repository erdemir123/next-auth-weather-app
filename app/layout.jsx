"use client"
import Providers from "./Provider";
import "./globals.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";




export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <head />
      <body>
              <Providers>{children}</Providers>
      </body>
    </html>
  );
}
