"use client"
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const AddService = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [serviceName, setServiceName] = useState('');
    const [servicePrice, setServicePrice] = useState('');

    const [categoryservice, setcategoryDescription] = useState('');

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        // Additional actions can be taken here, such as updating state or uploading the file
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Form submission logic
        console.log(serviceName, servicePrice, selectedFile);
        // You'll need to handle the actual file upload logic, as well as what you want to do with the service name and price
    };

    return (
        <div className="p-4 text-black">
            <div className="flex flex-col items-center">
                <h2 className="text-2xl font-semibold mb-8 mt-16">Add new Category</h2>
                <label htmlFor="image-upload" className="flex items-center justify-center rounded-lg border border-gray-200 bg-gray-200 shadow cursor-pointer"
                    style={{ width: '250px', height: '250px', borderRadius: '10px', boxShadow: '0px 0px 4px rgba(79, 184, 179, 0.25)' }}>
                    <FaPlus className="text-teal-500 text-3xl" />
                </label>
                <input id="image-upload" type="file" onChange={handleFileChange} style={{ display: 'none' }} />
                <span className="mt-2 mb-6">Add Icon</span>

                <form onSubmit={handleSubmit} className="w-full max-w-xl">

                    <div className="flex flex-col mr-4 mb-2">
                        <label htmlFor="service-name" className="mb-1 font-medium">Category Name</label>
                        <input type="text" id="service-name" value={serviceName} onChange={e => setServiceName(e.target.value)} placeholder="New Category" className="border border-gray-300 rounded p-2" />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="service-description" className="mb-1 font-medium">Category Description</label>
                        <textarea
                            id="service-description"
                            value={categoryservice}
                            onChange={e => setcategoryDescription(e.target.value)}
                            placeholder="Describe the Category"
                            className="border border-gray-300 rounded p-2 h-32 resize-none"
                        />
                    </div>

                    <div className="flex justify-center mt-6">
                        <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded-lg shadow hover:bg-teal-600">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddService;
