'use client'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const UserEdit = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phoneNumber: '',
            gender: '',
            dob: '',
        },
        validationSchema: Yup.object({
            name: Yup.string(),
            email: Yup.string().email('Invalid email address'),
            phoneNumber: Yup.string()
                .matches(/^\d{10}$/, 'Must be a 10-digit number'),
            gender: Yup.string(),
            dob: Yup.date(),
        }),
        onSubmit: values => {
            console.log(values);
        },
    });

    return (
        // <div className="flex justify-center items-center min-h-screen bg-gray-900">
            <div className="bg-gray-800 p-8 flex flex-col  justify-center items-center rounded-lg shadow-lg w-full max-w-lg">
                <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center text-3xl font-bold text-white">
                        M
                    </div>
                    <button className="ml-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500">
                        Upload
                    </button>
                </div>

                <form onSubmit={formik.handleSubmit} className="w-full">
                    <div className="mb-4">
                        <label className="text-sm mb-1 text-white">NAME *</label>
                        <input
                            className="p-3 bg-gray-700 rounded text-white w-full"
                            name="name"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <div className="text-red-500 text-xs">{formik.errors.name}</div>
                        ) : null}
                    </div>

                    <div className="mb-4">
                        <label className="text-sm mb-1 text-white">EMAIL *</label>
                        <input
                            className="p-3 bg-gray-700 rounded text-white w-full"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-red-500 text-xs">{formik.errors.email}</div>
                        ) : null}
                    </div>

                    <div className="mb-4">
                        <label className="text-sm mb-1 text-white">PHONE NUMBER *</label>
                        <div className="flex items-center">
                            <span className="p-3 bg-gray-700 rounded-l text-white">+92</span>
                            <input
                                className="p-3 bg-gray-700 rounded-r text-white w-full"
                                name="phoneNumber"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phoneNumber}
                            />
                        </div>
                        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                            <div className="text-red-500 text-xs">{formik.errors.phoneNumber}</div>
                        ) : null}
                    </div>

                    <div className="mb-4">
                        <label className="text-sm mb-1 text-white">GENDER *</label>
                        <select
                            className="p-3 bg-gray-700 rounded text-white w-full"
                            name="gender"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.gender}
                        >
                            <option value="" label="Select gender" />
                            <option value="male" label="Male" />
                            <option value="female" label="Female" />
                            <option value="other" label="Other" />
                        </select>
                        {formik.touched.gender && formik.errors.gender ? (
                            <div className="text-red-500 text-xs">{formik.errors.gender}</div>
                        ) : null}
                    </div>

                    <div className="mb-4">
                        <label className="text-sm mb-1 text-white">DATE OF BIRTH *</label>
                        <div className="relative">
                            <input
                                className="p-3 bg-gray-700 rounded text-white w-full"
                                name="dob"
                                type="date"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.dob}
                            />
                            <span className="absolute right-3 top-3 text-red-600">
                                <i className="fas fa-calendar"></i>
                            </span>
                        </div>
                        {formik.touched.dob && formik.errors.dob ? (
                            <div className="text-red-500 text-xs">{formik.errors.dob}</div>
                        ) : null}
                    </div>

                    <div className="flex justify-center">
                        <button type="submit" className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-500">
                            SAVE
                        </button>
                    </div>
                </form>
            </div>
        // </div>
    );
};

export default UserEdit;
