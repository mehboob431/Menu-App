'use client'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import globalConstantUtil from '../globalConstantUtils';
import { format } from 'date-fns';
import CustomerOrderDetailCard from './orderView';
import { RxCross2 } from "react-icons/rx";

const orderHistory = ({ closeOrderDialog }) => {
    // State to manage orders
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();

    // Fetch order data
    const getData = async () => {
        try {
            await axios.get(globalConstantUtil.baseUrl + '/orders/get-orders')
                .then((res) => {
                    console.log(res)
                    const localStorageOrders = JSON.parse(localStorage.getItem('orders')) || [];
                    console.log('LocalStorage Orders:', localStorageOrders);
                    console.log('Fetched Orders:', res.data);
                    const matchedOrders = res.data.filter((order) => localStorageOrders.includes(order._id));
                    console.log('Matched Orders:', matchedOrders);
                    setOrders(matchedOrders);
                });
        } catch (error) {
            console.error('error in fetching orders', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        if (orders.find(item => item.status === 'delivered')) {
            setTimeout(() => {
                removeOrder();
                setOrders(orders.filter(item => item.status !== 'delivered'));
            }, 1 * 60 * 1000);
        }
    }, [orders]);

    const [isOpen, setIsOpen] = useState(false);

    const openDialog = (id) => {
        setIsOpen(true);
        setData(orders.find(order => order._id === id));
    };

    const closeDialog = () => {
        setIsOpen(false);
        closeOrderDialog();
    };

    const removeOrder = () => {
        const order = orders.find(item => item.status === 'delivered');
        const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
        const restOrders = existingOrders.filter(item => item !== order._id);
        localStorage.setItem('orders', JSON.stringify(restOrders));
    };

    return (
        <div className="max-w-md mx-auto scroll-smooth h-[34rem] shadow-lg rounded-lg p-6">
            {/* Card Title */}
            <h2 className="text-center text-2xl font-bold mb-4 relative z-10">Order History</h2>
            {loading ? (
                <div className="flex justify-center items-center">
                    <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
                    <p className="text-gray-600">Loading...</p>
                </div>
            ) : (
                    <div className="space-y-4 py-3 h-full scroll-smooth overflow-y-auto overflow-x-hidden">
                        {/* Iterate over orders and display each order's details */}
                        {orders.map((order, index) => (
                            <div key={index} className="p-4 bg-gray-100 rounded-lg" onClick={() => { openDialog(order._id); }}>
                                {/* Date */}
                                <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-2">
                                    <span className="text-gray-600 font-medium">Date:</span>
                                    <span className="text-gray-800">{format(new Date(order.createdAt), 'dd MMM yyyy, hh:mm a')}</span>
                                </div>
                                {/* Order Status */}
                                <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-2">
                                    <span className="text-gray-600 font-medium">Order Status:</span>
                                    <span
                                        className={`font-medium ${order.status === 'pending'
                                            ? 'text-orange-500'
                                            : order.status === 'confirmed'
                                                ? 'text-blue-500'
                                                : order.status === 'delivered'
                                                    ? 'text-green-500'
                                                    : 'text-red-500'
                                            }`}
                                    >
                                        {order.status}
                                    </span>
                                </div>
                                {/* total_Amount Price */}
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 font-medium">Total Price:</span>
                                    <span className="text-gray-800 font-semibold">Rs {order.total_Amount}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            {isOpen && (
                <div className="fixed inset-0 flex justify-center items-start bg-opacity-50 bg-black z-50">
                    <div className="bg-gray-900 w-11/12 sm:w-2/3 md:w-1/2 lg:w-2/3 h-11/12 left-0 top-20 z-50 rounded-lg shadow-lg overflow-y-auto relative">

                        <div className="flex justify-end">
                            <button onClick={closeDialog} className="text-white px-2 py-2">
                                <RxCross2 />
                            </button>
                        </div>
                        <div className=''>
                            <CustomerOrderDetailCard closeOrderDialog={closeOrderDialog} data={data} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default orderHistory;
