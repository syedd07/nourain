import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f9f7f8] text-gray-700 py-8 px-4 sm:px-10">
      <div className="mx-auto w-full max-w-screen-xl">
        {/* Logo & Company Name */}
        <div>
          <img
            src="https://readymadeui.com/readymadeui.svg"
            alt="Company Logo"
            className="w-36 mb-2"
          />
          <p className="font-bold">Al- Nourain</p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          {/* Company Section */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Company</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]">About</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]">Careers</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]">Brand Center</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]">Blog</a>
              </li>
            </ul>
          </div>

          {/* Help Center Section */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Help Center</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]">Discord Server</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]">Twitter</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]">Facebook</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]">Privacy Policy</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]">Licensing</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]">Terms &amp; Conditions</a>
              </li>
            </ul>
          </div>

          {/* Address Section */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Address</h2>
            <address className="not-italic text-gray-500 block font-semibold text-[15px]">
              شركة النورين الدولية للتجارة <br />
              Al Nourain International Trading Company <br />
              PO Box 122281, Gulf Plaza, Madinah Road, <br />
              Jeddah-23218-2163, KSA <br />
              <br />
              CR 4030383702 | VAT - 3116 8333 3900 003
            </address>
            <div className="flex items-center mt-2">
              <svg className="w-4 h-4 text-gray-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
              </svg>
              <a href="tel:+966560700103" className='hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>+966 560 700103</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="px-4 py-6 bg-gray-100 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">
          © 2025 <a href="https://nourain.ae/" className="hover:text-[#007bff]">Al- Nourain</a>. All Rights Reserved.
        </span>
        <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
          {/* Facebook */}
          <a href="#" className="text-gray-900 hover:text-[#007bff]">
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 8 19"
            >
              <path
                fillRule="evenodd"
                d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Facebook</span>
          </a>
          {/* Add other social icons similarly */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;