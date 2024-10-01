import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select, Radio, message } from 'antd';
import { useCart } from '../context/cartContext';
import globalConstantUtil from '../globalConstantUtils';
import axios from 'axios';

const { Option } = Select;
const { TextArea } = Input;

const CustomerInfo = ({ total_Amount, closeOrderDialog, closeDialog }) => {
  const { items, clearItemCart } = useCart();
  const [tablesData, setTablesData] = useState([]);

  useEffect(() => {
    const getTables = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/tables/get-tables');
        setTablesData(data);
      } catch (error) {
        console.error('Error fetching tables:', error);
      }
    };
    getTables();
  }, []);

  const onFinish = async (values) => {
    const orderData = {
      ...values,
      total_Amount: total_Amount,
      status: 'pending',
      cartItems: items,
    };

    try {
      const res = await axios.post(`${globalConstantUtil.baseUrl}/orders/add-orders`, orderData);
      if (res.data.data._id) {
        const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
        existingOrders.push(res.data.data._id);
        localStorage.setItem('orders', JSON.stringify(existingOrders));
        clearItemCart();
        closeOrderDialog();
        closeDialog();
        message.success(res.data.message);
      }
    } catch (error) {
      console.error('Error in Adding Order', error.response?.data || error.message);
      message.error(error.response?.data || error.message);
    }
  };

  return (
    <div className="form-container p-4 max-w-[16rem] mx-auto bg-white shadow-md rounded-md">
      <h2 className="text-center text-xl font-semibold mb-4">Info And Payment</h2>

      <Form
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ paymentMethod: 'cash' }}
        colon={false}  // Removes colon after labels
        requiredMark={false}  // Removes the required asterisk (*)
        className="overflow-y-auto max-h-[20rem]"
      >
        {/* Name Field */}
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please enter your name' }]}
        >
          <Input className="rounded-sm" />
        </Form.Item>

        {/* Table Number Dropdown */}
        <Form.Item
          label="Table Number"
          name="table_No"
          rules={[{ required: true, message: 'Please select a table number' }]}
        >
          <Select placeholder="Select Table Number" className="rounded-sm">
            {tablesData.map((table) => (
              <Option key={table._id} value={table.table_No}>
                {`Table ${table.table_No}`}
              </Option>
            ))}
          </Select>
        </Form.Item>

        {/* Additional Instructions */}
        <Form.Item
          label="Additional Instruction"
          name="orderDescription"
          rules={[{ required: true, message: 'Please provide additional instructions' }]}
        >
          <TextArea rows={3} className="rounded-sm" />
        </Form.Item>

        {/* Payment Method */}
        <Form.Item
          label="Payment Method"
          name="paymentMethod"
          rules={[{ required: true, message: 'Please select a payment method' }]}
        >
          <Radio.Group>
            <Radio value="card">Card</Radio>
            <Radio value="cash">Cash</Radio>
          </Radio.Group>
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md"
          >
            Confirm Order
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CustomerInfo;
