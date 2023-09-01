import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";

const Footer = () => {
  const navigation = {
    main: [
      { name: "About", href: "about" },
      { name: "Services", href: "services" },
      { name: "Contact", href: "contact" },
    ],
    social: [
      {
        name: "Email",
        href: "mailto:edgewoodcontractingllc@gmail.com",
        icon: () => <FontAwesomeIcon icon={faEnvelope} size="2x" />,
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/edgewoodcontractingrva/",
        icon: () => <FontAwesomeIcon icon={faInstagram} size="2x" />,
      },
      // ... (other social icons)
    ],
  };

  return (
    <footer className="bg-[#3f5d49] text-[#f5f2e9]">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className="flex items-center justify-center mb-6 sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6 cursor-pointer px-2">
              <Link
                to={item.href}
                smooth={true}
                duration={500}
                offset={-95}
                className="text-sm leading-6 hover:text-[#d1c6b8]"
              >
                {item.name}
              </Link>
              {/* Hidden anchor tag for SEO */}
              <a href={`#${item.href}`} className="sr-only">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-[#d1c6b8]"
            >
              <span className="sr-only">{item.name}</span>
              {item.icon()}
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5">
          &copy; 2023 Edgewood Contracting LLC All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
