"use client"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes, faEdit, faEye, faregular } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import '../globals.css'
import Link from 'next/link';


// Dummy JSON data
const categories = [
    {
        id: 1,
        name: 'Cleaning',
        imageSrc: '/images/cleaning-icon.png', // Add your image path here
    },
    {
        id: 2,
        name: 'Construction',
        imageSrc: '/images/construction-icon.png', // Add your image path here
    },
    {
        id: 2,
        name: 'Cleaning',
        imageSrc: '/images/cleaning-icon.png', // Add your image path here
    },

];

const CategoryItem = ({ category }) => {
    return (
        <div className="flex items-center justify-between p-4 bg-white shadow rounded-lg mb-2">
            <FontAwesomeIcon icon={faCircleXmark} className="text-red-500 text-xl mr-10 ml-2" />


            <img src={category.imageSrc || 'placeholder-image-path'} alt={category.name} className="h-8 w-8 rounded-full" />
            <p className="flex-1 ml-2 font-medium text-black">{category.name}</p>
            <button className="hover:bg-teal-700 py-2 px-4 bg-teal-500 rounded-lg mr-4">
                <FontAwesomeIcon icon={faEdit} />
                <span className="ml-1">Edit Category</span>
            </button>
            <button className="hover:bg-teal-700 py-2 px-4 bg-teal-500 rounded-lg">
                <FontAwesomeIcon icon={faEye} />
                <span className="ml-1">View Services</span>
            </button>
        </div>
    );
};

const CategoriesPage = () => {
    return (
        <div className="p-8 mt-14">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold text-black">Categories</h1>
                <Link href="/addCategory">
                    <button className="bg-teal-500 text-white px-4 py-2 rounded-lg flex items-center">
                        <FontAwesomeIcon icon={faPlus} />
                        <span className="ml-2">Add new category</span>
                    </button>
                </Link>
            </div>
            <div>
                {categories.map((category) => (
                    <CategoryItem key={category.id} category={category} />
                ))}
            </div>
        </div>
    );
};

export default CategoriesPage;
