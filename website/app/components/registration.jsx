"use client"
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const RegistrationForm = () => {
  const initialValues = {
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Name is required')
      .min(3, 'Name must be at least 3 characters long'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    phoneNumber: Yup.string()
      .required('Phone number is required')
      .matches(
        /^(\+?\d{1,3}[- ]?)?\d{10}$/,
        'Phone number is not valid'
      ),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters long')
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
      ),
  });

  const onSubmit = (values, { setSubmitting }) => {
    console.log('Form data:', values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <Field
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <ErrorMessage name="name" component="div" className="text-red-600 text-sm mt-1" />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <ErrorMessage name="email" component="div" className="text-red-600 text-sm mt-1" />
          </div>

          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-gray-700">Phone Number</label>
            <Field
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <ErrorMessage name="phoneNumber" component="div" className="text-red-600 text-sm mt-1" />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <Field
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <ErrorMessage name="password" component="div" className="text-red-600 text-sm mt-1" />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Register
          </button>
          <div>Already Have an account </div>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
