import { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LandingIntro from './LandingIntro'
import Form from '../../../components/Form'
import ErrorText from '../../../components/Typography/ErrorText'
import { useFormik, FormikProvider, } from 'formik'
import registerFields from '../data/register/registerFields'
import initialValues from '../data/register/intialValues'
import validationSchema from '../data/register/yupSchema'
import globalConstantUtil from '../../../utils/globalConstantUtil'
import axios from 'axios'

function Register() {
    const [error, setError] = useState()
    const Navigate = useNavigate()
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: async (values, { resetForm, setSubmitting }) => {

            setSubmitting(true)
            try {
                await axios.post(globalConstantUtil.baseUrl+'/auth/register', values)
                    .then((res) => res.data)
                    .then((res) => {
                        console.log('res', res)
                        // localStorage.setItem("token", res.token)
                    })
                setSubmitting(false)
                resetForm()
                Navigate('/login')
            }
            catch (error) {
                console.error("error while registering", error)
                setError(error.message)
                setSubmitting(false)

            }

        },

    });




    return (
        <div className="min-h-screen bg-base-200 flex items-center">
            <div className="card mx-auto w-1/3 bg-base-100  shadow-xl">
                {/* <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl"> */}
                    {/* <div className=''> */}
                        {/* <LandingIntro /> */}
                    {/* </div> */}
                    <div className='py-20 px-10'>
                        <div>
                            <h1 className='text-3xl text-center font-bold items-center '>
                                <img src="/logo-png2.png" className="w-16 inline-block mr-2 " alt="Bon Appetit-logo" />
                                Bon Appetit
                            </h1>
                        </div>
                        <h2 className='text-2xl font-semibold mb-2 text-center'>Register</h2>
                        <FormikProvider value={formik}>
                            <form onSubmit={formik.handleSubmit}>

                                <Form className='grid grid-cols-1 gap-3 mb-8' formFields={registerFields} />

                                {error && <ErrorText styleClass="mt-10 text-center">{error}</ErrorText>}
                                <button type="submit" className={`btn w-full btn-primary ${formik.isSubmitting ? " loading" : ""} ${error ? "mt-0" : "mt-10"} `}>Register</button>

                                <div className='text-center mt-4'>Already have an account? <Link to="/login"><span className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Login</span></Link></div>
                            </form>
                        </FormikProvider>
                    </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Register