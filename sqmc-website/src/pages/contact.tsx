import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { Footer } from "@/components/Footer"
import { Navbar } from "@/components/Navbar"
import { FormContact } from "@/components/FormContact"

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | SQMC India</title>
      </Head>
      <Navbar />
      <div className="hero w-screen bg-[url('/contact.jpg')] bg-cover mb-10">
        <div className="hero-overlay bg-opacity-60"></div>
        <h1 className="text-center text-white text-5xl md:text-6xl lg:text-7xl font-bold py-20">Contact Us</h1>
      </div>
      <div className="container text-justify mx-auto px-4 mb-10">
        <p className="mb-10 text-lg md:text-xl lg:text-2xl xl:text-3xl">At SQMC India, we are committed to providing our clients with the highest quality certification services. Our team of experts is here to answer any questions you may have about our services, and to provide you with the support and guidance you need to achieve your certification goals.</p>
        <div className="card bg-base-100 shadow-xl mb-2">
          <div className="card-body">
            <p className="card-title text-2xl md:text-3xl lg:text-4xl text-center">Contact Information</p>
            <div className='divider'></div>
            <p className='mb-2 text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl'>
              <span className='font-bold'>
                <FontAwesomeIcon icon={faLocationDot} style={{ color: "#9400ff", }} />
              </span>
              <a href='tel:+919818138838' className='pl-3'>
                B-702 Puri Busniess Hub, Puri 81 High Street, Sector 81, Faridabad, Haryana India 121002 (Office Hours: 10:00 - 18:00)
              </a>
            </p>
            <p className='mb-2 text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl'>
              <span className='font-bold'>
                <FontAwesomeIcon icon={faPhone} style={{ color: "#9400ff", }} />
              </span>
              <a href='tel:+919818138838' className='pl-3 underline hover:no-underline'>+91-9818138838</a>
              <a href='tel:+919560008730' className='pl-3 underline hover:no-underline'>+91-9560008730</a>
            </p>
            <p className='text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl'>
              <span className='font-bold'>
              <FontAwesomeIcon icon={faEnvelope} style={{ color: "#9400ff", }} />
              </span>
              <a href='mailto:infosqmc@gmail.com' className='pl-3 underline hover:no-underline'>infosqmc@gmail.com</a>
              <a href='mailto:sqmcindia@gmail.com' className='pl-3 underline hover:no-underline'>sqmcindia@gmail.com</a>
            </p>
          </div>
        </div>
        <p className='text-xs md:text-sm mb-5'>*Before visiting our office, please call, email, or use the chat feature below to schedule an appointment. Our team is always happy to assist you and ensure that we are available to meet with you at a time that is convenient for you.</p>
      </div>
      <FormContact />
      <Footer />
    </>
  )
}