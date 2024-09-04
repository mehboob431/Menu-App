import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  imageUrl: Yup.string().required('Image is required'),
  title: Yup.string().required('Title is required'),
  // description: Yup.string().required('Description is required'),
  ingredient: Yup.string().required('Ingredient is required'),
  price: Yup.number().required('Price is required').min(1, 'Price must be greater than 0'),
  category: Yup.string().required('Category is required'),
});


export default validationSchema;