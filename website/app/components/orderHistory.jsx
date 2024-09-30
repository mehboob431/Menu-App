'use client';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import globalConstantUtil from '../globalConstantUtils';
import { format } from 'date-fns';
import CustomerOrderDetailCard from './orderView';
import { RxCross2 } from "react-icons/rx";

const OrderHistory = ({ closeOrderDialog }) => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    const [timeRemaining, setTimeRemaining] = useState({}); // To hold remaining time for each order

    // Fetch order data
    const getData = async () => {
        try {
            const res = await axios.get(globalConstantUtil.baseUrl + '/orders/get-orders');
            const localStorageOrders = JSON.parse(localStorage.getItem('orders')) || [];
            const matchedOrders = res.data.filter((order) => localStorageOrders.includes(order._id));
            setOrders(matchedOrders);

            // Initialize time remaining for each order
            const updatedTimeRemaining = {};
            matchedOrders.forEach((order) => {
                if (order.status === 'confirmed') {
                    const createdAt = new Date(order.createdAt);
                    const timeTake = order.timeTake * 60 * 1000; // Convert minutes to milliseconds
                    const now = new Date();
                    const timeElapsed = now - createdAt;
                    let remainingTime = Math.max(0, timeTake - timeElapsed);
                    updatedTimeRemaining[order._id] = Math.floor(remainingTime / 1000); // Store remaining time in seconds
                }
            });
            setTimeRemaining(updatedTimeRemaining);
        } catch (error) {
            console.error('Error in fetching orders', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining((prevTime) => {
                const newTime = { ...prevTime };
                let anyTimeRemaining = false; // Flag to check if there's any time remaining

                Object.keys(newTime).forEach((orderId) => {
                    if (newTime[orderId] > 0) {
                        newTime[orderId] -= 1; // Decrease remaining time by 1 second
                        anyTimeRemaining = true;
                    } else {
                        delete newTime[orderId]; // Remove order if time is up
                    }
                });

                if (!anyTimeRemaining) {
                    clearInterval(interval); // Stop the interval if no time is left for any order
                }
                return newTime;
            });
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
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

    const removeOrder = (id) => {
        const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
        const restOrders = existingOrders.filter(item => item !== id);
        localStorage.setItem('orders', JSON.stringify(restOrders));
    };

    return (
        <div className="max-w-md mx-auto scroll-smooth h-[34rem] shadow-lg rounded-lg p-6">
            <h2 className="text-center text-2xl font-bold mb-4 relative z-10">Order History</h2>
            {loading ? (
                <div className="flex justify-center items-center">
                    <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
                    <p className="text-gray-600">Loading...</p>
                </div>
            ) : (
                <div className="space-y-4 py-3 h-full scroll-smooth overflow-y-auto overflow-x-hidden">
                    {orders.map((order, index) => (
                        <div key={index} className="p-4 bg-gray-100 rounded-lg" onClick={() => { openDialog(order._id); }}>
                            <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-2">
                                <span className="text-gray-600 font-medium">Date:</span>
                                <span className="text-gray-800">{format(new Date(order.createdAt), 'dd MMM yyyy, hh:mm a')}</span>
                            </div>
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
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600 font-medium">Time Remaining:</span>
                                <span className="text-gray-800 font-semibold">
                                    {timeRemaining[order._id] ? `${Math.floor(timeRemaining[order._id] / 60)}m ${timeRemaining[order._id] % 60}s` : 'Order Complete'}
                                </span>
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
                        <div>
                            <CustomerOrderDetailCard closeOrderDialog={closeOrderDialog} data={data} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OrderHistory;
