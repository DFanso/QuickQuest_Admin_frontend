"use client"
import React, { useState, useRef } from 'react';
import { FaPlus } from 'react-icons/fa';
import '../globals.css'

const EditCategoryPage = () => {
    const [serviceName, setServiceName] = useState('Residential Construction');
    const [servicePrice, setServicePrice] = useState('100');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('/images/cleaning-icon.png'); // Replace with your image path

    const fileInputRef = useRef(null);

    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const fileReader = new FileReader();
            fileReader.onload = (e) => setImage(e.target.result);
            fileReader.readAsDataURL(event.target.files[0]);
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="flex  justify-center items-start h-screen pt-20">
            <div className=" w-2/5 rounded-lg p-5">
                <h2 className="text-2xl font-semibold mb-8 text-black">Edit</h2>

                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    style={{ display: 'none' }}
                />
                <div className='flex items-center justify-center'>
                    <div className="relative group mb-4 cursor-pointer" onClick={triggerFileInput}>
                        <img src={image} alt="Service" className="w-20 h-20 rounded-lg object-cover mb-2" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
                            <FaPlus className="text-white text-xl" />
                            <span className="text-white text-xs mt-2">Change Image</span>
                        </div>
                    </div>
                </div>

                <div className="flex mb-4 text-gray-500">
                    <input
                        type="text"
                        value={serviceName}
                        onChange={(e) => setServiceName(e.target.value)}
                        className="w-full border-2 border-gray-300 p-2 rounded mr-2 flex-grow"
                        placeholder="Service Name"
                    />

                </div>

                <div className="mb-4">
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full h-32 p-2 border-2 border-gray-300 rounded" // Tailwind CSS utility class for height
                        placeholder="Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
                    />

                </div>

                <div className="flex justify-center space-x-2">
                    <button className="bg-teal-500 text-white px-10 py-0 rounded-lg">Save</button>
                    <button className="text-teal-500 border border-teal-500 text-black px-6 py-1 rounded-lg">Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default EditCategoryPage;
