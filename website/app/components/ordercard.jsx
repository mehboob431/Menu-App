'use client'
import ItemCard from './ItemCard';
import { useCart } from '../context/cartContext';
import CustomerInfo from './customerInfo';
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';




const OrderCard = ({ closeOrderDialog }) => {

    const { items } = useCart();
    const total_Amount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const [isOpen, setIsOpen] = useState(false);

    const openDialog = () => {
        setIsOpen(true);
    };

    const closeDialog = () => {
        setIsOpen(false);
    };


    return (
        <>
            <div className="bg-gray-900 rounded-lg p-6 w-full max-w-md min-h-full sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto shadow-lg">
                <div className="border-b border-gray-700 pb-4 mb-4">
                    <h2 className="text-lg font-semibold text-white text-center sm:text-left">Items Cart</h2>
                </div>
                <div className='flex flex-col items-center justify-start overflow-y-auto min-h-[22rem] max-h-[22rem]'>
                    {items.map(item => (
                        <ItemCard
                            key={item.id}
                            item={item}
                        />
                    ))}
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
                    <h4 className="text-white font-semibold text-md md:text-lg lg:text-xl mb-4 sm:mb-0">total_Amount: Rs {total_Amount}</h4>
                    <button className="bg-[#da6c1e] text-white px-4 py-2 rounded-full w-full sm:w-auto"
                        disabled={items.length === 0}
                        onClick={() => {
                            openDialog()
                            // closeOrderDialog()

                        }}
                    >
                        Proceed Order
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="fixed inset-0 flex justify-center items-start bg-opacity-50 bg-black z-50">
                    <div className="bg-gray-900 w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 h-3/4 left-0 top-20 z-50 rounded-lg shadow-lg overflow-y-auto relative">

                        <div className="flex justify-end">
                            <button onClick={closeDialog} className="text-white px-2 py-2">
                                <RxCross2 />
                            </button>
                        </div>
                        <div>
                            <CustomerInfo total_Amount={total_Amount} closeOrderDialog={closeOrderDialog} closeDialog={closeDialog} />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default OrderCard;
