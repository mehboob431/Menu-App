'use client'
import React from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

// Validation schema for form fields
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  phoneNumber: Yup.string().matches(/^\d+$/, 'Phone number is not valid').required('Phone number is required'),
  address: Yup.string().required('Address is required'),
  message: Yup.string().required('Message is required'),
});

const MyForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phoneNumber: '',
      address: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      // Send email using EmailJS
      emailjs.send(
        'service_alam431',  // Replace with your EmailJS service ID
        'template_431',  // Replace with your EmailJS template ID
        {
          to_email: 'malamtralawa@gmail.com',  // Receiver email
          from_name: values.name,
          from_email: values.email,
          phone_number: values.phoneNumber,
          address: values.address,
          message: values.message,
        },
        'xu02TJinG_doelC9s'  // Replace with your EmailJS user ID
      ).then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        alert('Email sent successfully!');
        resetForm(); // Reset form after successful submission
      }).catch((error) => {
        console.error('Failed to send email:', error);
        alert('Failed to send email. Please try again.');
      });
    },
  });

  return (
    <Box className='py-6 bg-white' component="form" onSubmit={formik.handleSubmit} sx={{ maxWidth: 400, mx: 'auto' }}>
      <TextField
        fullWidth
        size="small"
        id="name"
        name="name"
        label="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
        margin="normal"
      />
      <TextField
        fullWidth
        size="small"
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        margin="normal"
      />
      <TextField
        fullWidth
        size="small"
        id="phoneNumber"
        name="phoneNumber"
        label="Phone Number"
        value={formik.values.phoneNumber}
        onChange={formik.handleChange}
        error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
        helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
        margin="normal"
      />
      <TextField
        fullWidth
        size="small"
        id="address"
        name="address"
        label="Address"
        value={formik.values.address}
        onChange={formik.handleChange}
        error={formik.touched.address && Boolean(formik.errors.address)}
        helperText={formik.touched.address && formik.errors.address}
        margin="normal"
      />
      <TextField
        fullWidth
        size="small"
        id="message"
        name="message"
        label="Message"
        multiline
        minRows={3}
        value={formik.values.message}
        onChange={formik.handleChange}
        error={formik.touched.message && Boolean(formik.errors.message)}
        helperText={formik.touched.message && formik.errors.message}
        margin="normal"
      />
      <Button color="primary" variant="contained" fullWidth type="submit" sx={{ mt: 2 }}>
        Submit
      </Button>
    </Box>
  );
};

export default MyForm;
