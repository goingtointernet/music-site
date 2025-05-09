import "./globals.css";
import { Toaster } from "sonner";
import "../lib/fontawesome"; 
import NextTopLoader from "nextjs-toploader";

export const metadata = {
  title: "Forallus - Music Artist",
  description: "Forallus - Music Artist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <NextTopLoader color="#ffffff" />
       <Toaster />
        {children}
      </body>
    </html>
  );
}
