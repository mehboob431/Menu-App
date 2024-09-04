import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import LandingIntro from './LandingIntro'
import ErrorText from '../../../components/Typography/ErrorText'
import InputText from '../../../components/Input/InputText'
import CheckCircleIcon from '@heroicons/react/24/solid/CheckCircleIcon'
import { FormikProvider, useFormik } from 'formik'
import initialValues from '../data/forgotPass/intialValues'
import validationSchema from '../data/forgotPass/yupSchema'
import Form from '../../../components/Form'
import formFields from '../data/forgotPass/forgotPassFields'

function ForgotPassword() {


    const [errorMessage, setErrorMessage] = useState("")
    const [linkSent, setLinkSent] = useState(false)

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm, setSubmitting }) => {
            setSubmitting(true)
            setLinkSent(true)
            resetForm()
            setSubmitting(false)

        },

    });



    return (
        <div className="min-h-screen bg-base-200 flex items-center">
            <div className="card mx-auto w-full max-w-5xl  shadow-xl">
                <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
                    <div className=''>
                        <LandingIntro />
                    </div>
                    <div className='py-24 px-10'>
                        <h2 className='text-2xl font-semibold mb-2 text-center'>Forgot Password</h2>

                        {
                            linkSent &&
                            <>
                                <div className='text-center mt-8'><CheckCircleIcon className='inline-block w-32 text-success' /></div>
                                <p className='my-4 text-xl font-bold text-center'>Link Sent</p>
                                <p className='mt-4 mb-8 font-semibold text-center'>Check your email to reset password</p>
                                <div className='text-center mt-4'><Link to="/login"><button className="btn btn-block btn-primary ">Login</button></Link></div>

                            </>
                        }

                        {
                            !linkSent &&
                            <>
                                <p className='my-8 font-semibold text-center'>We will send password reset link on your email Id</p>
                                <FormikProvider value={formik}>
                                    <form onSubmit={formik.handleSubmit}>

                                        <div className="mb-4">

                                            <Form className="grid grid-cols-1 gap-3" formFields={formFields} />

                                        </div>

                                        <ErrorText styleClass="mt-12">{errorMessage}</ErrorText>
                                        <button type="submit" className={"btn mt-2 w-full btn-primary" + (formik.isSubmitting ? " loading" : "")}>Send Reset Link</button>

                                        <div className='text-center mt-4'>Don't have an account yet? <Link to="/register"><button className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Register</button></Link></div>
                                    </form>
                                </FormikProvider>
                            </>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword