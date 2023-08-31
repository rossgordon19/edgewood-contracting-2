import React from "react";
import CraigKenney from "../assets/CraigKenney.png";
import Insured from "../assets/l&i.png";

const About = () => {
  const reasons = [
    {
      id: 1,
      title: "Local Expertise",
      description:
        "Based in Richmond, VA, we are intimately familiar with the unique needs and challenges faced by homes in the greater Richmond area.",
    },
    {
      id: 2,
      title: "Versatility",
      description:
        "From carpentry and light electrical work to furniture building and gutter cleaning, we're equipped to handle a wide range of repair services.",
    },
    {
      id: 3,
      title: "Professionalism",
      description:
        "We pride ourselves on our high standards of professionalism, ensuring every job is completed to the satisfaction of our customers.",
    },
  ];

  return (
    <div id="about" className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
      <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
        <div className="w-full lg:max-w-lg lg:flex-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose Us?
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-600">
            Looking for top-notch home repair services? Discover why Edgewood
            Contracting is Richmond's first choice for quality and reliability.
          </p>
          <img
            src={CraigKenney}
            alt=""
            className="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
          />
        </div>
        <div className="w-full lg:max-w-xl lg:flex-auto flex flex-col items-center">
          <img
            src={Insured}
            alt="Placeholder"
            className="hidden md:block w-[75%] h-[75%] mb-4 rounded-lg object-cover"
          />
          <h3 className="sr-only">Reasons to Choose Us</h3>
          <ul className="-my-8 divide-y divide-gray-100">
            {reasons.map((reason) => (
              <li key={reason.id} className="py-8">
                <dl className="relative flex flex-wrap gap-x-3">
                  <dt className="sr-only">Title</dt>
                  <dd className="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                    {reason.title}
                  </dd>
                  <dt className="sr-only">Description</dt>
                  <dd className="mt-2 w-full flex-none text-base leading-7 text-gray-600">
                    {reason.description}
                  </dd>
                </dl>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
