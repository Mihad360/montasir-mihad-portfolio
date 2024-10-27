import { ToastContainer } from "react-toastify";
import Navbar from "./components/homepages/Navbar";
import { PageProvider } from "./components/pageContext";
import "./globals.css";
import Footer from "./components/homepages/Footer";
import Cursor from "./lib/cursor";

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
          <PageProvider>
            <div className="">
              <Navbar />
            </div>
            {children}
            <div>
              <Footer />
            </div>
          </PageProvider>
        </div>
      </body>
    </html>
  );
}
