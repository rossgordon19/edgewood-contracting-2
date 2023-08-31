import React from 'react';

const services = [
  {
    name: 'Dummy Service 1',
    description: 'This is a dummy description for service 1.',
  },
  {
    name: 'Dummy Service 2',
    description: 'This is a dummy description for service 2.',
  },
  {
    name: 'Dummy Service 3',
    description: 'This is a dummy description for service 3.',
  },
  {
    name: 'Dummy Service 4',
    description: 'This is a dummy description for service 4.',
  },
  {
    name: 'Dummy Service 5',
    description: 'This is a dummy description for service 5.',
  },
  {
    name: 'Dummy Service 6',
    description: 'This is a dummy description for service 6.',
  },
  {
    name: 'Dummy Service 7',
    description: 'This is a dummy description for service 7.',
  },
  {
    name: 'Dummy Service 8',
    description: 'This is a dummy description for service 8.',
  },
  {
    name: 'Dummy Service 9',
    description: 'This is a dummy description for service 9.',
  },
];

const Services = () => {
  return (
    <div
      id="services"
      className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8"
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
