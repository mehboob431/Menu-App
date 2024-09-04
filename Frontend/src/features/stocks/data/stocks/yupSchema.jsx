import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  category: Yup.string().required('Category is required'),
  retailPrice: Yup.number()
    .required('Retail price is required')
    .positive('Retail price must be positive'),
  purchasePrice: Yup.number()
    .required('Purchase price is required')
    .positive('Purchase price must be positive'),
  quantity: Yup.number()
    .required('Quantity is required')
    .integer('Quantity must be an integer')
    .min(1, 'Quantity must be at least 1'),
  sku: Yup.string().required('SKU is required'),
  location: Yup.string().required('Location is required'),
  imageUpload: Yup.mixed().required('Image upload is required'),
  mfgDate: Yup.date().required('Manufacturing date is required'),
  expDate: Yup.date().required('Expiry date is required'),
  description: Yup.string().required('Description is required'),
});

export default validationSchema;