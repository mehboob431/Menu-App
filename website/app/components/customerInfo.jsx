import React, { useState, useEffect } from 'react';
import { message } from 'antd';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useCart } from '../context/cartContext';
import globalConstantUtil from '../globalConstantUtils';
import axios from 'axios';

const CustomerInfo = ({ total_Amount, closeOrderDialog, closeDialog }) => {
  const { items, clearItemCart } = useCart();
  const [tablesData, setTablesData] = useState([]);  // To store fetched tables


  const initialValues = {
    name: '',
    table_No: '',
    paymentMethod: '',
    orderDescription: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    table_No: Yup.number().required('Table Number is required'),
    orderDescription: Yup.string().required('Additional Instruction'),
    paymentMethod: Yup.string().oneOf(['card', 'cash'], 'Select a valid payment method').required('Payment method is required'),
  });

  // Fetch tables data
  const getTables = async () => {
    try {
      const { data } = await axios.get(globalConstantUtil.baseUrl + '/tables/get-tables');
      setTablesData(data);
    } catch (error) {
      console.error('Error fetching tables:', error);
    }
  };

  useEffect(() => {
    getTables();
  }, []);

  // Function to reserve table
  const handleReserveTable = async (table_No) => {
    try {
      const response = await axios.put(`${globalConstantUtil.baseUrl}/tables/tables/book`, {
        table_No: table_No,
        Status: 'RESERVED',
      });

      if (response.status === 200) {
        message.success('Table reserved successfully');
        setTablesData((prev) =>
          prev.map((table) =>
            table.table_No === table_No ? { ...table, Status: 'RESERVED' } : table
          )
        );
      } else {
        message.error('Failed to reserve table');
      }
    } catch (error) {
      console.error('Error booking table:', error.response?.data || error.message);
      message.error('Error booking table: ' + error.message);
    }
  };

  // Handle form submission
  const onSubmit = async (values) => {
    const orderData = {
      ...values,
      total_Amount: total_Amount,
      status: "pending",
      cartItems: items, // Assumes the backend expects cartItems as an array of objects
    };
    console.log('orderData', orderData);

    try {
      await axios.post(globalConstantUtil.baseUrl + '/orders/add-orders', orderData)
        .then(async (res) => {
          console.log('res', res.data);
          if (res.data.data._id) {
            const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
            existingOrders.push(res.data.data._id);
            localStorage.setItem('orders', JSON.stringify(existingOrders));

            // Reserve the table after order submission
            await handleReserveTable(values.table_No);

            // Clear cart and close dialogs
            clearItemCart();
            closeOrderDialog();
            closeDialog();
            message.success(res.data.message);
          }
        });
    } catch (error) {
      console.error('Error in adding order', error.response?.data || error.message);
      message.error(error.response?.data || error.message);
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md mx-auto sm:max-w-lg lg:max-w-xl">
      <h2 className="text-white text-2xl mb-6 text-center">Info And Payment</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {formik => (
          <form onSubmit={formik.handleSubmit}>
            <div className='overflow-y-auto min-h-[22rem] max-h-[22rem]'>

              {/* Name Field */}
              <div className="mb-4">
                <label className="block text-white mb-2" htmlFor="name">Name</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 rounded bg-gray-700 text-white"
                />
                <ErrorMessage name="name" component="div" className="text-red-500 mt-1" />
              </div>

              {/* Table Number Dropdown */}
              <div className="mb-4 w-full">
                <label className="block text-white mb-2" htmlFor="table_No">Table Number</label>
                <Field
                  as="select"
                  id="table_No"
                  name="table_No"
                  className="w-full p-2 rounded bg-gray-700 text-white"
                >
                  <option value="" label="Select Table Number" />
                  {tablesData.map((table) => (
                    <option key={table._id} value={table.table_No}>
                      {`Table ${table.table_No}`}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="table_No" component="div" className="text-red-500 mt-1" />
              </div>

              {/* OrderDescription Field */}
              <div className="mb-4">
                <label className="block text-white mb-2" htmlFor="orderDescription">Additional Instruction</label>
                <Field
                  as="textarea"
                  id="orderDescription"
                  name="orderDescription"
                  className="w-full p-2 rounded bg-gray-700 text-white"
                  rows="3"
                />
                <ErrorMessage name="orderDescription" component="div" className="text-red-500 mt-1" />
              </div>

              {/* Payment Method */}
              <div className="mb-4">
                <label className="block text-white mb-2">Payment Method</label>
                <div className="flex flex-col items-start justify-start space-y-2 space-x-0">
                  <label className="text-white">
                    <Field type="radio" name="paymentMethod" value="card" />
                    <span className="ml-2">Card</span>
                  </label>
                  <label className="text-white">
                    <Field type="radio" name="paymentMethod" value="cash" />
                    <span className="ml-2">Cash</span>
                  </label>
                </div>
                <ErrorMessage name="paymentMethod" component="div" className="text-red-500 mt-1" />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-[#da6c1e] text-white py-2 rounded-full"
                disabled={!formik.isValid || formik.isSubmitting}
              >
                Confirm Order
              </button>
            </div>

          </form>
        )}
      </Formik>
    </div>
  );
};

export default CustomerInfo;
