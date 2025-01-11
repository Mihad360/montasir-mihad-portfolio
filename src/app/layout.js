import { ToastContainer } from "react-toastify";
import Navbar from "../components/homepages/Navbar";
import "./globals.css";
import Footer from "../components/homepages/Footer";
import Cursor from "../lib/cursor";

export const metadata = {
  title: "Montasir Mihad Portfolio",
  description: "Montasir Mihad Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font antialiased">
        <ToastContainer />
        <div className="darker-gradient-bg min-h-screen">
        <Cursor />
            <div className="max-w-7xl mx-auto">
            <div className="fixed z-50 max-w-7xl w-full">
              <Navbar />
            </div>
            </div>
            <div>
            {children}
            </div>
            <div>
              <Footer />
            </div>
        </div>
      </body>
    </html>
  );
}
