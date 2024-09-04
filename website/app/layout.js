import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { CartProvider } from "./context/cartContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "Shahi Dewan",
  description: "Food ordering platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <div className="relative">
            <Navbar />
            <div className="relative z-10">
              {children}
            </div>
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
