'use client';
import { Card, Button, Modal, Typography } from 'antd';
import { useCart } from '../context/cartContext';
import CustomerInfo from './customerInfo';
import { RxCross2 } from 'react-icons/rx';
import { useState } from 'react';
import ItemCard from './ItemCard'; // Assuming ItemCard is already styled accordingly

const { Title } = Typography;

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
            {/* Ant Design Card for the Items Cart */}
            <Card
                title={<Title level={4} className="text-center sm:text-left">Items Cart</Title>}
                bordered={false}
                className="max-w-[16rem] mx-auto shadow-lg"
                bodyStyle={{ padding: '20px' }}
            >
                {/* Cart Items */}
                <div className="overflow-y-auto min-h-[22rem] max-h-[22rem]">
                    {items.map((item) => (
                        <ItemCard key={item.id} item={item} />
                    ))}
                </div>

                {/* Total Amount and Proceed Button */}
                <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
                    <h4 className="text-lg font-semibold">Total Amount: Rs {total_Amount}</h4>
                    <Button
                        type="primary"
                        onClick={openDialog}
                        disabled={items.length === 0}
                        className="w-full sm:w-auto mt-4 sm:mt-0 bg-[#da6c1e] text-white rounded-full"
                    >
                        Proceed Order
                    </Button>
                </div>
            </Card>

            {/* Modal for Customer Info */}
            <Modal
                title={null}
                visible={isOpen}
                onCancel={closeDialog}
                footer={null}
                centered
                bodyStyle={{ background: '#1a1a1a' }}
                className="rounded-lg shadow-lg max-w-[16rem]"
            >
                {/* Modal Close Button */}
                <div className="flex justify-end">
                    <Button
                        onClick={closeDialog}
                        className="bg-transparent text-white hover:text-gray-400"
                        icon={<RxCross2 />}
                    />
                </div>

                {/* Customer Info Form */}
                <CustomerInfo
                    total_Amount={total_Amount}
                    closeOrderDialog={closeOrderDialog}
                    closeDialog={closeDialog}
                />
            </Modal>
        </>
    );
};

export default OrderCard;
