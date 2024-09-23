"use client"
import React from 'react'
import Pageheading from '../components/pageheading'
import ContactForm from './contact-form'
import ContactInfo from './contact-plateforms'
function page() {

  const bgimage = "https://res.cloudinary.com/dfodf3ofk/image/upload/v1718024728/page-haeder/contact-banner.png";
  const htitle = "Contact";
  return (
    <div className='relative'>
      <div>
        <Pageheading htitle={htitle} bgimage={bgimage} />
      </div>
      <div className='flex bg-white flex-col-reverse md:flex-row justify-around gap-2 px-8 items-center '>
        <div className=''>
          <ContactInfo />
        </div>
        <div className='bg-white'>
          <ContactForm />
        </div>
      </div>
    </div>

  )
}

export default page