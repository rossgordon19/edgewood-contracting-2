import React from 'react';
import Logo from "../assets/green.png";
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <div className="lg:h-screen w-full bg-[#3f5d49] text-[#f5f2e9]">
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl pb-24 pt-8 sm:pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="flex flex-col items-center px-6 lg:items-start lg:flex-row lg:px-0 lg:pt-4">
            <img
              src={Logo}
              alt="Company Logo"
              className="w-full h-full max-w-md max-h-md lg:max-w-lg lg:max-h-lg mb-6 md:hidden"
            />
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="mt-6 text-4xl font-bold tracking-tight sm:mt-10 sm:text-6xl lg:whitespace-nowrap">
                  Edgewood Contracting
                </h1>
                <p className="mt-4 text-lg leading-8">
                  Over a decade of trusted home repair services in Richmond, VA.
                  We're qualified, insured, and committed to delivering
                  exceptional quality for all your home needs.
                </p>
                <div className="mt-8 flex items-center gap-x-6">
                  <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    className="rounded-md bg-[#f5f2e9] px-3.5 py-2.5 text-sm font-semibold text-black border border-black shadow-sm hover:bg-black hover:border-white hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    Get a Free Estimate
                  </Link>
                  {/* Hidden anchor tag for SEO */}
                  <a href="#contact" className="sr-only">
                    Get a Free Estimate
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Logo for medium and above viewports */}
          <div className="hidden md:flex items-start justify-center mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <img
              src={Logo}
              alt="Company Logo"
              className="object-cover object-center w-full h-full max-w-md max-h-md lg:max-w-lg lg:max-h-lg transform md:-translate-y-[5.5rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
