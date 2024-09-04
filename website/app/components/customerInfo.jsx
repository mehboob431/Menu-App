'use client'
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import OnlinePayment from './onlinePayment';
import { useCart } from '../context/cartContext';
import globalConstantUtil from '../globalConstantUtils';
import axios from 'axios';


const CustomerInfo = ({ total, closeOrderDialog, closeDialog }) => {
  const { items, clearItemCart } = useCart()

  const initialValues = {
    name: '',
    phone: '',
    address: '',
    paymentMethod: '',
    orderDescription: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    phone: Yup.string()
      .matches(/^[0-9]+$/, 'Phone number must be digits only')
      .min(10, 'Phone number must be at least 10 digits')
      .max(15, 'Phone number can be at most 15 digits')
      .required('Phone number is required'),
    address: Yup.string().required('Address is required'),
    paymentMethod: Yup.string().oneOf(['online', 'cod'], 'Select a valid payment method').required('Payment method is required'),
  });

  const onSubmit = async (values) => {

    const orderData = { ...values, total: total, status: "pending", items: items };
    console.log('orderData', orderData)
    try {
      await axios.post(globalConstantUtil.baseUrl + '/orders/', orderData)
        .then((res) => {
          console.log('res', res)
          const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
          existingOrders.push(res.data._id);
          localStorage.setItem('orders', JSON.stringify(existingOrders));
          clearItemCart()
          closeOrderDialog()
          closeDialog()

        })
    }
    catch (error) {
      console.error('error in Adding Order', error)
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
          <form onSubmit={formik.handleSubmit} >
            <div className='overflow-y-auto min-h-[22rem] max-h-[22rem]'>
              {/* Name Field */}
              <div className="mb-4 ">
                <label className="block text-white mb-2" htmlFor="name">Name</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 rounded bg-gray-700 text-white"
                />
                <ErrorMessage name="name" component="div" className="text-red-500 mt-1" />
              </div>

              {/* Phone Number Field */}
              <div className="mb-4">
                <label className="block text-white mb-2" htmlFor="phone">Phone Number</label>
                <Field
                  type="text"
                  id="phone"
                  name="phone"
                  className="w-full p-2 rounded bg-gray-700 text-white"
                />
                <ErrorMessage name="phone" component="div" className="text-red-500 mt-1" />
              </div>

              {/* Address Field */}
              <div className="mb-4">
                <label className="block text-white mb-2" htmlFor="address">Address</label>
                <Field
                  as="textarea"
                  id="address"
                  name="address"
                  className="w-full p-2 rounded bg-gray-700 text-white"
                  rows="3"
                />
                <ErrorMessage name="address" component="div" className="text-red-500 mt-1" />
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
                  <label className="text-gray-700">
                    <Field type="radio" name="paymentMethod" value="online" disabled />
                    <span className="ml-2">
                      Online
                    </span>
                    <p className='ml-4'>Not available yet</p>
                  </label>
                  <label className="text-white">
                    <Field type="radio" name="paymentMethod" value="cod" />
                    <span className="ml-2">Cash on Delivery</span>
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
