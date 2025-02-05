import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FDFCFA] text-gray-700 py-8 px-4 sm:px-10">
      <div className="w-full max-w-screen-xl mx-0 md:mx-10">
        {/* Logo & Company Name */}
        <div className="flex flex-col items-start">
          <img
            src="/images/logo_main.png"
            alt="Company Logo"
            className="w-52 h-auto"
          />
          <p className="font-bold text-left mx-16">Al- Nourain</p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          {/* Company Section */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
              Company
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a
                  href="#"
                  className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
                >
                  About
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#"
                  className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
                >
                  Careers
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#"
                  className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
                >
                  Brand Center
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#"
                  className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Help Center Section */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
              Help Center
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a
                  href="#"
                  className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
                >
                  Discord Server
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#"
                  className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
                >
                  Twitter
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#"
                  className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
                >
                  Facebook
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#"
                  className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
              Legal
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a
                  href="#"
                  className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#"
                  className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
                >
                  Licensing
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#"
                  className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
                >
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Address Section */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
              Address
            </h2>
            <address className="not-italic text-gray-500 block font-semibold text-[15px]">
              شركة النورين الدولية للتجارة <br />
              Al Nourain International Trading Company <br />
              PO Box 122281, Gulf Plaza, Madinah Road, <br />
              Jeddah-23218-2163, KSA <br />
              <br />
              CR 4030383702 | VAT - 3116 8333 3900 003
            </address>
            <div className="flex items-center mt-2">
              <svg
                className="w-4 h-4 text-gray-500 mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 19 18"
              >
                <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
              </svg>
              <a
                href="tel:+966560700103"
                className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
              >
                +966 560 700103
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="px-4 py-6 bg-gray-100 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">
          © 2025{" "}
          <a
            href="https://nourain.ae/"
            className="hover:text-[#007bff] hover:underline"
          >
            Al- Nourain.
          </a>{" "}
          All Rights Reserved.
        </span>

        {/* Social Icons */}
        <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
          {/* LinkedIn */}
          <a href="#" className="ml-4 text-gray-900 hover:text-[#0077B5]">
            <svg
              className="w-4 h-4"
              viewBox="0 -2 44 44"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title>LinkedIn-color</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g
                  id="Icons"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Color-"
                    transform="translate(-702.000000, -265.000000)"
                    fill="#007EBB"
                  >
                    <path
                      d="M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 Z"
                      id="LinkedIn"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            <span className="sr-only">LinkedIn</span>
          </a>

          {/* Instagram */}
          <a href="#" className="ml-4 text-gray-900 hover:text-[#E1306C]">
            <svg
              className="w-4 h-4"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 551.034 551.034"
              xmlSpace="preserve"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g id="XMLID_13_">
                  <linearGradient
                    id="XMLID_2_"
                    gradientUnits="userSpaceOnUse"
                    x1="275.517"
                    y1="4.5714"
                    x2="275.517"
                    y2="549.7202"
                    gradientTransform="matrix(1 0 0 -1 0 554)"
                  >
                    <stop
                      offset="0"
                      style={{ stopColor: "#E09B3D" }}
                    ></stop>
                    <stop offset="0.3" style={{ stopColor: "#C74C4D" }}></stop>
                    <stop offset="0.6" style={{ stopColor: "#C21975" }}></stop>
                    <stop offset="1" style={{ stopColor: "#7024C4" }}></stop>
                  </linearGradient>
                  <path
                    id="XMLID_17_"
                    style={{ fill: "url(#XMLID_2_)" }}
                    d="M386.878,0H164.156C73.64,0,0,73.64,0,164.156v222.722 c0,90.516,73.64,164.156,164.156,164.156h222.722c90.516,0,164.156-73.64,164.156-164.156V164.156 C551.033,73.64,477.393,0,386.878,0z M495.6,386.878c0,60.045-48.677,108.722-108.722,108.722H164.156 c-60.045,0-108.722-48.677-108.722-108.722V164.156c0-60.046,48.677-108.722,108.722-108.722h222.722 c60.045,0,108.722,48.676,108.722,108.722L495.6,386.878L495.6,386.878z"
                  ></path>
                  <linearGradient
                    id="XMLID_3_"
                    gradientUnits="userSpaceOnUse"
                    x1="275.517"
                    y1="4.5714"
                    x2="275.517"
                    y2="549.7202"
                    gradientTransform="matrix(1 0 0 -1 0 554)"
                  >
                    <stop
                      offset="0"
                      style={{ stopColor: "#E09B3D" }}
                    ></stop>
                    <stop offset="0.3" style={{ stopColor: "#C74C4D" }}></stop>
                    <stop offset="0.6" style={{ stopColor: "#C21975" }}></stop>
                    <stop offset="1" style={{ stopColor: "#7024C4" }}></stop>
                  </linearGradient>
                  <path
                    id="XMLID_81_"
                    style={{ fill: "url(#XMLID_3_)" }}
                    d="M275.517,133C196.933,133,133,196.933,133,275.516 s63.933,142.517,142.517,142.517S418.034,354.1,418.034,275.516S354.101,133,275.517,133z M275.517,362.6 c-48.095,0-87.083-38.988-87.083-87.083s38.989-87.083,87.083-87.083c48.095,0,87.083,38.988,87.083,87.083 C362.6,323.611,323.611,362.6,275.517,362.6z"
                  ></path>
                  <linearGradient
                    id="XMLID_4_"
                    gradientUnits="userSpaceOnUse"
                    x1="418.306"
                    y1="4.5714"
                    x2="418.306"
                    y2="549.7202"
                    gradientTransform="matrix(1 0 0 -1 0 554)"
                  >
                    <stop
                      offset="0"
                      style={{ stopColor: "#E09B3D" }}
                    ></stop>
                    <stop offset="0.3" style={{ stopColor: "#C74C4D" }}></stop>
                    <stop offset="0.6" style={{ stopColor: "#C21975" }}></stop>
                    <stop offset="1" style={{ stopColor: "#7024C4" }}></stop>
                  </linearGradient>
                  <circle
                    id="XMLID_83_"
                    style={{ fill: "url(#XMLID_4_)" }}
                    cx="418.306"
                    cy="134.072"
                    r="34.149"
                  ></circle>
                </g>
              </g>
            </svg>
            <span className="sr-only">Instagram</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
