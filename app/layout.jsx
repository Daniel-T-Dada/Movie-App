import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SearchProvider } from "./SearchContext";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Double D Streams",
  description: "A Movie Application",
};

export default function RootLayout({ children }) {
  return (
    <>


      <html lang="en">
        <body className={inter.className }>
          <SearchProvider>
            <Navbar />

            <div className="min-h-screen">

              {children}

            </div>
            <Footer />
          </SearchProvider>
        </body>
      </html>
    </>
  );
}
