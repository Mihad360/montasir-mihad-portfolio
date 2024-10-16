import Navbar from "./components/homepages/Navbar";
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
        <div className="bg-gradient-to-r from-indigo-950 via-slate-800 to-indigo-950 h-screen">
          <div>
            <Navbar></Navbar>
          </div>
        {children}
        </div>
      </body>
    </html>
  );
}
