"use client"
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const ordersData = [
    {
        id: '#469966',
        service: 'Construction residential',
        customer: 'Posh Thisara',
        worker: 'Wet katta',
        orderDate: '21/05/2024',
        completionDate: '21/05/2024',
        price: '$40000',
        status: 'Completed',
    },
    // more orders...
];

const OrdersPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('all');

    const renderStatusButton = (status) => {
        const baseStyle = "px-4 py-1 text-xs rounded-full text-white w-24 text-center";
        let statusStyle = baseStyle;
        if (status === 'Completed') {
            statusStyle += ' bg-green-500';
        } else if (status === 'Pending') {
            statusStyle += ' bg-yellow-500';
        } else {
            statusStyle += ' bg-red-500';
        }
        return <button className={statusStyle}>{status}</button>;
    };

    return (
        <div className="p-4 text-black mt-16">
            <h1 className="text-2xl font-medium text-center mb-4">Orders</h1>
            <div className="flex justify-center mb-4">
                <div className="flex border-2 border-gray-400 rounded-lg overflow-hidden">
                    <input
                        type="text"
                        placeholder="Search orders"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="p-1 px-4 w-64"
                    />
                    <button className="p-2 bg-teal-500 text-white">
                        <FaSearch />
                    </button>
                </div>
            </div>

            <div className="flex justify-center mb-6 space-x-2">
                <button className={`px-4 py-2 text-center ${selectedStatus === 'all' ? 'text-blue-500' : ''}`} onClick={() => setSelectedStatus('all')}>Orders</button>
                <button className={`px-4 py-2 text-center ${selectedStatus === 'completed' ? 'text-green-500' : ''}`} onClick={() => setSelectedStatus('completed')}>Completed</button>
                <button className={`px-4 py-2 text-center ${selectedStatus === 'pending' ? 'text-yellow-500' : ''}`} onClick={() => setSelectedStatus('pending')}>Pending</button>
                <button className={`px-4 py-2 text-center ${selectedStatus === 'canceled' ? 'text-red-500' : ''}`} onClick={() => setSelectedStatus('canceled')}>Canceled</button>
            </div>

            <div className="grid grid-cols-8 gap-x-4 text-xs font-bold mb-2">
                <span className="text-center">Order ID</span>
                <span className="text-center">Service</span>
                <span className="text-center">Customer</span>
                <span className="text-center">Worker</span>
                <span className="text-center">Order Date</span>
                <span className="text-center">Completion Date</span>
                <span className="text-center">Price</span>
                <span className="text-center">Status</span>
            </div>

            {ordersData.map((order, index) => (
                <div key={index} className="grid grid-cols-8 gap-x-4 items-center mb-2">
                    <span className="text-center">{order.id}</span>
                    <span className="text-center">{order.service}</span>
                    <span className="text-center">{order.customer}</span>
                    <span className="text-center">{order.worker}</span>
                    <span className="text-center">{order.orderDate}</span>
                    <span className="text-center">{order.completionDate}</span>
                    <span className="text-center">{order.price}</span>
                    <div className="text-center">{renderStatusButton(order.status)}</div>
                </div>
            ))}
        </div>
    );
};

export default OrdersPage;
