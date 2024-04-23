import React from 'react';
import { FaPencilAlt, FaTimes, FaPlus } from 'react-icons/fa';
import { IoCloseCircle } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import Link from 'next/link';

const services = [
  // Replace with your actual JSON data
  {
    id: 1,
    name: 'Commercial construction',
    imageUrl: '/images/commercial-construction.png',
  },
  {
    id: 2,
    name: 'House Cleaning',
    imageUrl: '/images/house-cleaning-img.png',
  },
  {
    id: 2,
    name: 'House Cleaning',
    imageUrl: '/images/house-cleaning-img.png',
  },
  // ... add more services as needed
];


const ServiceCard = ({ service }) => {
  return (
    <div className="relative w-full flex flex-col border rounded-lg p-2 m-2" style={{ borderRadius: '10px' }}>
      <img src={service.imageUrl} alt={service.name} className="w-full object-cover rounded-t-lg" style={{ height: '200px' }} />
      <div className="absolute top-0 right-0 m-2 flex pt-2 pr-2">

        <FaEdit className="text-teal-500 mr-2 text-lg" />
        <IoCloseCircle className="text-red-600 text-xl" />
      </div>
      <div className="text-center mt-2 text-black">
        <p>{service.name}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="p-4 mt-14">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-black">Services</h1>
        <Link href="/addService">
          <button className="bg-teal-500 text-white px-4 py-2 rounded-lg flex items-center">
            <FaPlus className="text-xl" />
            <span className="ml-2">Add Service</span>
          </button>
        </Link>
      </div>
      <div className="flex flex-wrap justify-center md:justify-start -mx-2">
        {services.map((service) => (
          <div className="w-full md:w-1/3 p-2" key={service.id}>
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
