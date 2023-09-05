import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
import Craig from "../assets/CraigKenney.png";

import Logo from "../assets/green.png";

const navigation = [
  { name: "About", href: "about" },
  { name: "Services", href: "services" },
  { name: "Contact", href: "contact" },
];

const services = [
  {
    name: "Carpentry Work",
    description: "We provide expert carpentry services.",
  },
  {
    name: "Light Electrical Work",
    description: "Expert solutions for light electrical needs.",
  },
  {
    name: "Light Plumbing Work",
    description: "Your go-to for light plumbing work.",
  },
  { name: "Painting", description: "High-quality painting services." },
  { name: "Drywall Repair", description: "Professional drywall repair." },
  {
    name: "Door & Lock Repair",
    description: "Secure and effective door & lock repair.",
  },
  { name: "Window Repair", description: "Quick and reliable window repair." },
  { name: "TV Mounting", description: "Efficient TV mounting services." },
  {
    name: "Furniture Building",
    description: "Customized furniture building services.",
  },
  {
    name: "Gutter Cleaning",
    description: "Efficient gutter cleaning services.",
  },
];

const footerNavigation = {
  main: [
    { name: "About", href: "about" },
    { name: "Services", href: "services" },
    { name: "Contact", href: "contact" },
  ],
  social: [
    {
      name: "Phone",
      href: "tel:+123456789",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M5.391 0c-2.982 0-5.39 2.408-5.39 5.391v13.217c0 2.984 2.408 5.392 5.391 5.392h13.217c2.984 0 5.391-2.408 5.391-5.391v-13.218c0-2.984-2.408-5.391-5.391-5.391h-13.217zM18.913 19.565c0 0.662-0.538 1.2-1.201 1.2h-10.823c-0.663 0-1.2-0.538-1.2-1.2v-11.652c0-0.663 0.538-1.201 1.2-1.201h10.823c0.663 0 1.201 0.538 1.201 1.201v11.652z"></path>
          <path d="M12 11.739c-1.802 0-3.266 1.464-3.266 3.266s1.464 3.266 3.266 3.266 3.265-1.464 3.265-3.266-1.463-3.266-3.265-3.266zM12 16.402c-0.733 0-1.331-0.598-1.331-1.331s0.598-1.331 1.331-1.331c0.733 0 1.331 0.598 1.331 1.331s-0.598 1.331-1.331 1.331zM14.938 7.87c0 0.248-0.202 0.45-0.45 0.45h-5.477c-0.248 0-0.45-0.202-0.45-0.45v-0.451c0-0.248 0.202-0.45 0.45-0.45h5.477c0.248 0 0.45 0.202 0.45 0.45v0.451z"></path>
        </svg>
      ),
    },
    {
      name: "Mail",
      href: "mailto:info@example.com",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M12 13.333l-12-8v-1.333h24v1.333l-12 8zM12 13.333l11.51-7.673-2.403 7.205-9.107 6.071-9.108-6.071-2.402-7.205 11.51 7.673zM21.438 13.64l-2.172 6.527c-0.173 0.52-0.677 0.833-1.266 0.833h-12c-0.589 0-1.093-0.313-1.266-0.833l-2.172-6.527 8.372 5.581c0.173 0.114 0.364 0.169 0.554 0.169s0.381-0.056 0.554-0.169l8.372-5.581z"></path>
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com/edgewoodcontractingrva",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Edgewood Contracting</span>
              {/* LOGO GOES HERE */}
              Edgewood Contracting
              {/* <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              /> */}
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                activeClass="active"
                to={item.href}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={item.name}
                className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              {/* ... (rest of your code) */}
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      activeClass="active"
                      to={item.href}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      key={item.name}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer"
                      onClick={handleLinkClick} // Close mobile menu on link click
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

      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
          <div
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
                Edgewood Contracting
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg leading-8 text-gray-600">
                  Over a decade of trusted home repair services in Richmond, VA.
                  We're licensed, insured, and committed to delivering
                  exceptional quality for all your home needs.
                </p>
              </div>
              <img
                src={Logo}
                alt=""
                className="mt-10  w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
              />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>

        {/* Content section */}
        <div
          id="about"
          className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8"
        >
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Us?
            </h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <div className="text-xl leading-8 text-gray-600">
                  <p className="mb-2">
                    <span className="font-semibold">Local Expertise:</span>{" "}
                    Based in Richmond, VA, we are intimately familiar with the
                    unique needs and challenges faced by homes in the greater
                    Richmond area.
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold">Versatility:</span> From
                    carpentry and light electrical work to furniture building
                    and gutter cleaning, we're equipped to handle a wide range
                    of repair services.
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold">Professionalism:</span> We
                    pride ourselves on our high standards of professionalism,
                    ensuring every job is completed to the satisfaction of our
                    customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <img
            src={Craig}
            alt=""
            className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
          />
        </div>

        {/* Services section */}
        <div
          id="services"
          className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8"
        >
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Your home deserves the best. Don't settle for less—get in touch
              with Edgewood Contracting LLC today to schedule your next home
              repair service.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name}>
                <dt className="font-semibold text-gray-900">{service.name}</dt>
                <dd className="mt-1 text-gray-600">{service.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </main>

      {/* Footer */}
      <footer className="mx-auto mt-40 max-w-7xl overflow-hidden px-6 pb-20 sm:mt-64 sm:pb-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {footerNavigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link
                activeClass="active"
                to={item.href}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={item.name}
                className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {footerNavigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2023 Edgewood Contracting LLC, All rights reserved.
        </p>
      </footer>
    </div>
  );
}
