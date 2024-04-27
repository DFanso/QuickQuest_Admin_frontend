"use client"
import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const OrdersPage = () => {
    const [ordersData, setOrdersData] = useState([]);
    const [filteredOrders, setFilteredOrders] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('all');
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                router.push('/login');
                return;
            }

            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/v1/jobs/admin`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setOrdersData(response.data);
                setFilteredOrders(response.data);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        filterOrders();
    }, [selectedStatus, searchTerm]);

    const filterOrders = () => {
        let filtered = ordersData;

        if (selectedStatus !== 'all') {
            filtered = filtered.filter((order) => order.status === selectedStatus.toUpperCase());
        }

        if (searchTerm) {
            filtered = filtered.filter((order) =>
                order._id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                order.service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                order.customer.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                order.customer.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                order.worker.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                order.worker.lastName.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredOrders(filtered);
    };

    const renderStatusButton = (status) => {
        const baseStyle = "px-4 py-1 text-xs rounded-full text-white w-24 text-center";
        let statusStyle = baseStyle;
        if (status === 'COMPLETED') {
            statusStyle += ' bg-green-500';
        } else if (status === 'PENDING') {
            statusStyle += ' bg-yellow-500';
        } else if (status === 'PROCESSING') {
            statusStyle += ' bg-blue-500';
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
                <button className={`px-4 py-2 text-center ${selectedStatus === 'all' ? 'text-blue-500 font-bold' : 'text-gray-500'}`} onClick={() => setSelectedStatus('all')}>Orders</button>
                <button className={`px-4 py-2 text-center ${selectedStatus === 'completed' ? 'text-green-500 font-bold' : 'text-gray-500'}`} onClick={() => setSelectedStatus('completed')}>Completed</button>
                <button className={`px-4 py-2 text-center ${selectedStatus === 'pending' ? 'text-yellow-500 font-bold' : 'text-gray-500'}`} onClick={() => setSelectedStatus('pending')}>Pending</button>
                <button className={`px-4 py-2 text-center ${selectedStatus === 'processing' ? 'text-blue-500 font-bold' : 'text-gray-500'}`} onClick={() => setSelectedStatus('processing')}>Processing</button>
                <button className={`px-4 py-2 text-center ${selectedStatus === 'cancelled' ? 'text-red-500 font-bold' : 'text-gray-500'}`} onClick={() => setSelectedStatus('cancelled')}>Cancelled</button>
            </div>

            <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-x-4 text-xs font-bold mb-2 px-4 py-2 bg-gray-100 rounded-t-lg">
                <span className="text-center">Order ID</span>
                <span className="text-center">Service</span>
                <span className="text-center">Customer</span>
                <span className="text-center">Worker</span>
                <span className="text-center">Order Date</span>
                <span className="text-center">Completion Date</span>
                <span className="text-center">Price</span>
                <span className="text-center">Status</span>
            </div>

            {filteredOrders.map((order, index) => (
                <div key={index} className={`grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-x-4 items-center mb-2 py-2 px-4 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    <span className="text-center">{order._id}</span>
                    <span className="text-center">{order.service.name}</span>
                    <span className="text-center">{order.customer.firstName} {order.customer.lastName}</span>
                    <span className="text-center">{order.worker.firstName} {order.worker.lastName}</span>
                    <span className="text-center">{new Date(order.orderedDate).toLocaleDateString()}</span>
                    <span className="text-center">{new Date(order.deliveryDate).toLocaleDateString()}</span>
                    <span className="text-center">${order.price}</span>
                    <div className="text-center">{renderStatusButton(order.status)}</div>
                </div>
            ))}
        </div>
    );
};

export default OrdersPage;