import React from 'react';

const services = [
  {
    name: 'Common Household Needs & Door Services',
    description: 'We offer a variety of services including flooring repair, deck repair, storm door installation, and lock repair.',
  },
  {
    name: 'Light Electrical',
    description: 'From light-switch and outlet replacement to fixture replacement, we handle all your minor electrical needs.',
  },
  {
    name: 'Light Plumbing',
    description: 'We specialize in faucet repairs, toilet repair and replacement, and more.',
  },
  {
    name: 'Gutter Cleaning',
    description: 'Annual cleaning and inspection of gutters and downspouts to prevent damage.',
  },
  {
    name: 'Dryer Vent Cleaning',
    description: 'Annual inspection and cleaning of dryer exhaust vents to prevent blockages and fire hazards.',
  },
  {
    name: 'TV Mounting',
    description: 'Years of experience in sturdy TV mounting you can trust.',
  },
  {
    name: 'Painting',
    description: 'From interiors to exteriors, our painting experience has got you covered.',
  },
  {
    name: 'Appliance Installation and Repair',
    description: 'Expertise in repairing existing appliances and installing new ones as needed.',
  },
  {
    name: 'Additional Household Needs',
    description: 'Weatherproofing windows/doors, drywall repair, and window and door trim services.',
  }
];

const Services = () => {
  return (
    <div
      id="services"
      className="mx-auto mt-32 max-w-7xl px-6 pb-[75px] sm:mt-40 lg:px-8"
    >
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our Services
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Your home deserves the best. Don't settle for less—get in touch with
          Edgewood Contracting today to schedule your next home repair service.
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
  );
};

export default Services;
