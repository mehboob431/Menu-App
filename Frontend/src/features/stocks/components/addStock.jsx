import React from 'react'
import Form from '../../../components/Form'
import formFields from '../data/stocks/formFields'
import { useFormik, FormikProvider } from 'formik'
import initialValues from '../data/stocks/intialValues'
import validationSchema from '../data/stocks/yupSchema'
import FormButtons from '../../../components/Form/FormButtons'

const AddStock = () => {
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            // e.preventDefault();
            console.log("Form Submitted", values)
            resetForm()
        },

    });

    return (
        <div>
            <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit}>
                    <Form className='grid grid-cols-3 gap-3' formFields={formFields} />
                    <FormButtons path="/stocks" />
                </form>
            </FormikProvider>
        </div>
    )
}

export default AddStock