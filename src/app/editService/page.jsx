"use client"
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const EditServicePage = () => {
    const [serviceName, setServiceName] = useState('Residential Construction');
    const [servicePrice, setServicePrice] = useState('100');
    const [image, setImage] = useState('/images/house-cleaning-img.png'); // Replace with actual image path

    return (
        <div className="flex justify-center items-start h-screen pt-20">
            <div className=" rounded-lg p-5">
                <h2 className="text-2xl font-semibold mb-8 text-black">Edit</h2>

                <div className='flex items-center justify-center'>
                    <div className="relative group mb-4 w-96 h-">
                        <img src={image} alt="Service" className=" rounded-lg object-cover mb-2" />
                        <div className="absolute inset-0 flex flex-col mb-2 items-center rounded-lg justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
                            <FaPlus className="text-white text-3xl" />
                            <span className="text-white text-sm mt-2">Change Image</span>
                        </div>
                    </div>
                </div>

                <div className="flex mb-6 text-gray-400">
                    <input
                        type="text"
                        value={serviceName}
                        onChange={(e) => setServiceName(e.target.value)}
                        className="border-2 border-gray-300 p-2 rounded mr-2 flex-grow"
                        placeholder="Resedential Contrsuction"

                    />
                    <div className="flex items-center border-2 border-gray-300 rounded">
                        <span className="p-2 bg-gray-200">$</span>
                        <input
                            type="number"
                            value={servicePrice}
                            onChange={(e) => setServicePrice(e.target.value)}
                            className="p-2 rounded-r"
                            placeholder="Price"
                        />
                    </div>
                </div>

                <div className="flex justify-center space-x-2">
                    <button className="bg-teal-500 text-white px-10 py-0 rounded-lg">Save</button>
                    <button className="text-teal-500 border border-teal-500 text-black px-6 py-1 rounded-lg">Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default EditServicePage;
