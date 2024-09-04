import { FormikProvider, useFormik } from 'formik'
import React from 'react'
import initialValues from '../data/category/intialValues'
import validationSchema from '../data/category/yupSchema'
import Form from '../../../components/Form'
import FormButtons from '../../../components/Form/FormButtons'
import formFields from '../data/category/formFields'
import globalConstantUtil from '../../../utils/globalConstantUtil'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddCategory = () => {
    const Navigate = useNavigate()
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: async (values, { resetForm }) => {
            // e.preventDefault();
            // console.log("Form Submitted", values)
            try {
                await axios.post(globalConstantUtil.baseUrl + '/categories/', values)
                    .then((res) => {
                        // console.log('res', res)
                        resetForm()
                        Navigate("/categories")

                    })
            }
            catch (error) {
                console.error('error in fetching categories', error)
            }


        },
    })
    return (
        <div>
            <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit}>
                    <Form className='grid grid-cols-3 gap-3' formFields={formFields} />
                    <FormButtons path="/categories" />
                </form>
            </FormikProvider>
        </div>
    )
}

export default AddCategory