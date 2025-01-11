import Link from "next/link";
import { FaSquareFacebook } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RxModulzLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <footer className="text-white py-10">
        <div className="px-4">
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {/* Logo and Website Name Section */}
              <div>
                <h1>
                  <RxModulzLogo className="mx-auto text-5xl text-fuchsia-600" />
                </h1>
                <h2 className="text-2xl font-bold mt-4">Montasir Mihad</h2>
              </div>

              {/* About Section */}
              <div>
                <h3 className="text-2xl font-bold mb-4">About Me</h3>
                <p className="text-gray-400">
                  A passionate MERN stack developer focused on creating
                  interactive and high-performance web experiences. I strive to
                  deliver top-notch designs and functionality.
                </p>
              </div>

              {/* Quick Links Section */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
                <ul>
                  <li className="mb-2">
                    <Link
                      href="/about"
                      className="hover:text-fuchsia-400 transition duration-300"
                    >
                      About
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="/projects"
                      className="hover:text-fuchsia-400 transition duration-300"
                    >
                      Projects
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="/contactme"
                      className="hover:text-fuchsia-400 transition duration-300"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Social Media Section */}
              <div className="flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-4">Follow Me</h3>
                <div className="flex gap-2 justify-center items-center flex-col">
                  <Link
                    target="_blank"
                    href="mailto:ahmedmihad962@gmail.com"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-fuchsia-400 transition duration-300 text-4xl"
                  >
                    <MdEmail />
                  </Link>
                  <Link
                    target="_blank"
                    href="https://www.facebook.com/MontasirMihad360"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-fuchsia-400 transition duration-300 text-4xl"
                  >
                    <FaSquareFacebook />
                  </Link>
                  {/* <Link
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-fuchsia-400 transition duration-300"
                  >
                    <i className="fab fa-twitter text-2xl"></i>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Montasir Mihad. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
