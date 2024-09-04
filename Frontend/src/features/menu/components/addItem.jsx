import { FormikProvider, useFormik } from 'formik'
import React, { useEffect } from 'react'
import initialValues from '../data/menu/intialValues'
import validationSchema from '../data/menu/yupSchema'
import Form from '../../../components/Form'
import FormButtons from '../../../components/Form/FormButtons'
import formFields from '../data/menu/formFields'
import axios from 'axios'
import globalConstantUtil from '../../../utils/globalConstantUtil'
import { useNavigate } from 'react-router-dom'

const AddItem = () => {
    const Navigate = useNavigate()

    const getCategories = async () => {
        try {
            await axios.get(globalConstantUtil.baseUrl + '/categories/')
                .then((res) => {
                    console.log('res', res.data)
                    formFields = formFields.filter((field) => {
                        if (field.name === "category") {
                            return res.data.map((cat) => {
                                if (!field.options.includes(cat.name)) {
                                    field.options = [...field.options, { name: cat.name, value: cat.name }]
                                }
                            })
                        } else {
                            return field
                        }
                    })
                })

        }
        catch (error) {
            console.error('error in fetching categories', error)
        }

    }

    useEffect(() => {
        getCategories()
    }, [formFields])

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: async (values, { resetForm }) => {
            // e.preventDefault();
            console.log("Form Submitted", values)
            const formData = new FormData()
            Object.entries(values).forEach(([key, value]) => {
                formData.append(`${key}`, value)
            })

            try {
                await axios.post(globalConstantUtil.baseUrl + '/foodItems/', formData)
                    .then((res) => {
                        console.log('res', res)
                        resetForm()
                        Navigate("/menu-items")

                    })
            }
            catch (error) {
                console.error('error in Adding Menu item', error)
            }


        },
    })
    return (
        <div>
            <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit}>
                    <Form className='grid grid-cols-3 gap-3' formFields={formFields} />
                    <FormButtons path="/menu-items" />
                </form>
            </FormikProvider>
        </div>
    )
}

export default AddItem