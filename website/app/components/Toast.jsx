"use client"
import React, { useEffect } from 'react';
import { FcOk } from "react-icons/fc";


const Toast = ({ message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000); // Display the toast for 3 seconds

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="fixed bottom-4 left-4 z-50 bg-green-500 text-white py-2 px-4 rounded-md shadow-lg flex items-center justify-start gap-2 ">
            {message}<FcOk />
        </div>
    );
};

export default Toast;
