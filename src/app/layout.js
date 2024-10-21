import { ToastContainer } from "react-toastify";
import Navbar from "./components/homepages/Navbar";
import { PageProvider } from "./components/pageContext";
import "./globals.css";

export const metadata = {
  title: "Montasir Mihad Portfolio",
  description: "Montasir Mihad Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`font antialiased`}
      >
        <ToastContainer/>
        <div className="darker-gradient-bg min-h-screen">
        <PageProvider>
          <div>
            <Navbar></Navbar>
          </div>
        {children}
        </PageProvider>
        </div>
      </body>
    </html>
  );
}
