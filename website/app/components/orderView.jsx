"use client"
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { useFormik } from 'formik';
import globalConstantUtil from '../globalConstantUtils';
import axios from 'axios';

const CustomerOrderDetailCard = ({ closeOrderDialog, data }) => {
    console.log('data', data)
    const [orderData, setOrdersData] = useState(data)
    const [showFeedbackModal, setShowFeedbackModal] = useState(false);
    const [showCancelButton, setShowCancelButton] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(0);

    useEffect(() => {
        // Get the creation time and the time to complete the order (in minutes)
        if (orderData.status === 'confirmed') {
            const createdAt = new Date(orderData.createdAt); // Assumes createdAt is in ISO string format
            const timeTake = orderData.timeTake * 60 * 1000; // Convert minutes to milliseconds

            // Calculate the time that has passed since the order was created
            const now = new Date();
            const timeElapsed = now - createdAt;

            // Calculate the remaining time in milliseconds
            let remainingTime = timeTake - timeElapsed;

            if (remainingTime < 0) {
                remainingTime = 0; // Ensure the timer doesn't go negative
            }

            // Set the initial time remaining in seconds
            setTimeRemaining(Math.floor(remainingTime / 1000));

            // Start the countdown interval
            const interval = setInterval(() => {
                setTimeRemaining((prevTime) => {
                    if (prevTime <= 1) {
                        clearInterval(interval);
                        return 0; // Stop the timer at 0
                    }
                    return prevTime - 1;
                });
            }, 1000);

            // Cleanup the interval on component unmount
            return () => clearInterval(interval);
        }
    }, [orderData]);

    // Format time remaining as minutes and seconds
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    // Show "Cancel" button based on status and time conditions
    useEffect(() => {
        if (orderData.status === 'pending') {
            setShowCancelButton(true);
        } else if (orderData.status === 'confirmed') {
            setShowCancelButton(true);
            const timer = setTimeout(() => {
                setShowCancelButton(false);
            }, 5 * 60 * 1000); // Hide button after 5 minutes

            // Cleanup timer when component unmounts or status changes
            return () => clearTimeout(timer);
        } else {
            setShowCancelButton(false);
        }
    }, [orderData.status]);


    // Formik for managing form state
    const formik = useFormik({
        initialValues: {
            rating: 0,
            feedback: '',
        },
        onSubmit: async (values, { resetForm, setSubmitting }) => {
            console.log('Feedback Submitted', values);
            setSubmitting(true)

            try {

                await axios.put(globalConstantUtil.baseUrl + `/orders/update-order/${orderData._id}`, { ...orderData, feedback: { stars: values.rating, text: values.feedback } })
                    .then((res) => {
                        console.log('res.data', res.data)
                        setOrdersData({ ...orderData, feedback: { stars: values.rating, text: values.feedback } })
                        resetForm()
                        setSubmitting(false)
                        setShowFeedbackModal(false); // Hide modal after submission
                    })
            } catch (error) {
                console.error('Failed to update order status:', error);
                setSubmitting(false)
            }
        },
    });

    // Function to handle star click for rating
    const handleStarClick = (rating) => {
        formik.setFieldValue('rating', rating);
    };
    const handleCancelOrder = async () => {


        try {

            await axios.put(globalConstantUtil.baseUrl + `/orders/update-order/${orderData._id}`, { ...orderData, status: "canceled" })
                .then((res) => {
                    console.log('res.data', res.data)
                    setOrdersData({ ...orderData, status: "canceled" })

                    // Hide modal after submission
                })
        } catch (error) {
            console.error('Failed to update order status:', error);
            setSubmitting(false)
        }
    };


    return (
        <div className="h-11/12 w-full mx-auto overflow-y-auto p-6 bg-gray-800 text-white rounded-md shadow-md">
            <div className='flex flex-col-reverse md:flex-row-reverse items-start justify-between gap-3'>
                {/* Customer Info */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold border-b pb-2 mb-4">Customer Info</h3>
                    <div className="flex flex-col justify-between gap-3">
                        <div>
                            <p><span className="font-semibold">Name:</span> {orderData.name}</p>
                            <p><span className="font-semibold">table_No:</span> {orderData.table_No}</p>
                        </div>
                        <div>
                            {showCancelButton && (
                                <button
                                    className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={handleCancelOrder}
                                >
                                    Cancel Order
                                </button>
                            )}
                            {/* Conditional Feedback Button Display */}
                            {orderData.feedback ? <></> : orderData.status === 'delivered' && (
                                <button
                                    className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={() => setShowFeedbackModal(true)}
                                >
                                    Give Feedback
                                </button>

                            )}

                            {/* Feedback Modal */}
                            {showFeedbackModal && (
                                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                                    <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-lg mx-4">
                                        {/* Modal name */}
                                        <h3 className="text-xl font-semibold mb-4 text-center">Rate Your Order</h3>

                                        {/* Star Rating Component */}
                                        <div className="mb-4 text-center">
                                            <div className="flex justify-center">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <button
                                                        key={star}
                                                        type="button"
                                                        className={`text-2xl mx-1 ${formik.values.rating >= star ? 'text-yellow-400' : 'text-gray-400'}`}
                                                        onClick={() => handleStarClick(star)}
                                                    >
                                                        ★
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Feedback Text Area */}
                                        <form onSubmit={formik.handleSubmit}>
                                            <div className="mb-4">
                                                <label htmlFor="feedback" className="block text-lg font-semibold mb-2">
                                                    Feedback Description
                                                </label>
                                                <textarea
                                                    id="feedback"
                                                    name="feedback"
                                                    rows="3"
                                                    className="w-full p-2 border border-gray-300 rounded-md text-black"
                                                    value={formik.values.feedback}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                />
                                            </div>

                                            {/* Submit and Cancel Buttons */}
                                            <div className="flex justify-end gap-4">
                                                <button
                                                    type="submit"
                                                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                                    disabled={formik.isSubmitting}

                                                >
                                                    Submit
                                                </button>
                                                <button
                                                    type="button"
                                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                                    onClick={() => setShowFeedbackModal(false)}
                                                    disabled={formik.isSubmitting}
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>


                {/* Order Info */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold border-b pb-2 mb-4">Order Info</h3>
                    <div className="mb-4">
                        <p><span className="font-semibold">Order Id:</span> {orderData._id}</p>
                        <p><span className="font-semibold">Order table_No:</span> {orderData.table_No}</p>
                        <p><span className="font-semibold">Order Date:</span> {format(Date(orderData.createdAt), 'dd MMM yyyy, hh:mm a')}</p>
                        <p><span className="font-semibold">Payment Method:</span> {orderData.paymentMethod === 'cod' ? 'Cash On Delievery' : orderData.paymentMethod}</p>
                        {orderData.orderDescription && <p><span className="font-semibold">Additional Instructions:</span> {orderData.orderDescription}</p>}
                    </div>
                    <div className="flex items-center mb-4">
                        <span className="font-semibold mr-2">Status:</span>
                        <span className={`px-2 py-1 rounded-lg max-w-max
            ${orderData.status === 'pending' ? 'bg-orange-400 text-white bg-opacity-50' :
                                orderData.status === 'confirmed' ? 'bg-blue-400 text-white bg-opacity-50' :
                                    orderData.status === 'delivered' ? 'bg-green-400 text-white bg-opacity-50' :
                                        orderData.status === ('rejected' || 'canceled') ? 'bg-red-400 text-red-800 bg-opacity-50' : ''}`}>
                            {orderData.status}
                        </span>
                    </div>
                    {orderData.status === 'confirmed' && <div>
                        <h3>Time Remaining: {minutes}m {seconds}s</h3>
                        {timeRemaining === 0 && <p>Order is complete or time has run out.</p>}
                    </div>}
                </div>
            </div>
            {/* Items Detail */}
            <div>
                <h3 className="text-lg font-semibold border-b pb-2 mb-4">Items Detail</h3>
                {orderData && orderData.cartItems && orderData.cartItems.length > 0 ? (
                    orderData.cartItems.map((item, index) => (
                        <div key={index} className="flex items-center mb-4">
                            {/* <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md mr-4" /> */}
                            <div>
                                <div className='flex items-center gap-3'>
                                    <h4 className="font-semibold">{item.name} </h4>
                                    {item.description && <p>({item.description})</p>}
                                </div>
                                <p>Price : {item.price}</p>
                                <div className='flex items-center gap-6'>
                                    <p>Quantity: {item.quantity}</p>
                                    <p className='font-semibold'>Total Amount: {item.price * item.quantity}</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                        <p>No items available in this order.</p> // Fallback message if no items are found
                    )}
            </div>


            {/* total_Amount Amount */}
            <div className="border-t pt-4 mt-4 pb-4">
                <h3 className="text-lg font-semibold float-right "> Amount: Rs {orderData.total_Amount}</h3>
            </div>
        </div>
    );
};

export default CustomerOrderDetailCard;
