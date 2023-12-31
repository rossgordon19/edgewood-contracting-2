import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
import Logo from "../assets/EC logo.png";

const navigation = [
  { name: "About", href: "about" },
  { name: "Services", href: "services" },
  { name: "Contact", href: "contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`bg-[#3f5d49] text-[#f5f2e9] ${
        mobileMenuOpen ? "" : "sticky top-0 z-50"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img className="h-12 w-auto" src={Logo} alt="Your Company" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 text-[#f5f2e9]" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <>
              <Link
                key={item.name}
                to={item.href}
                smooth={true}
                duration={500}
                offset={-95}
                className="text-sm font-semibold leading-6 text-white relative border-b-2 border-transparent md:hover:border-white md:pb-1 cursor-pointer"
              >
                {item.name}
              </Link>
              {/* Hidden anchor tag for SEO */}
              <a href={`#${item.href}`} className="sr-only">
                {item.name}
              </a>
            </>
          ))}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#3f5d49] text-[#f5f2e9] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <h1>Edgewood Contracting</h1>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-[#f5f2e9]"
              onClick={closeMobileMenu}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    smooth={true}
                    duration={500}
                    offset={-95}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#f5f2e9] md:border-b-2 md:border-transparent md:hover:border-white md:pb-1 cursor-pointer"
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
