import Head from 'next/head'

import { Footer } from "@/components/Footer"
import { Navbar } from "@/components/Navbar"
import { FormOnly } from "@/components/Form"

export default function Training() {
  return (
    <>
      <Head>
        <title>Training | SQMC India</title>
      </Head>
      <Navbar />
      <div className="hero w-screen bg-[url('/services/training.jpg')] bg-bottom bg-cover mb-10">
        <div className="hero-overlay bg-opacity-60"></div>
        <h1 className="text-center text-white text-5xl md:text-6xl lg:text-7xl font-bold py-20">Training</h1>
      </div>
      <div className="container text-justify mx-auto px-4 mb-10">
        <p className="mb-5 text-md md:text-lg lg:text-xl xl:text-2xl">At SQMC India, we understand that training is an essential part of achieving and maintaining certification to management system standards. That's why we offer a range of training courses to help organizations improve their processes and achieve certification to standards such as ISO 9001, ISO 14001, ISO 45001, and others. Our courses are designed to be engaging, informative, and practical, and can be delivered on-site or online to meet your specific needs.</p>
        <p className="text-md md:text-lg lg:text-xl xl:text-2xl underline">Benefits of Training</p>
        <div className="mb-5 text-xs md:text-sm lg:text-md xl:text-lg">
          The benefits of training can be numerous, and at SQMC India, we believe that training is an investment in your organization's success. Here are just a few of the benefits that training can bring:
          <ul className='list-disc ml-5'>
            <li><span className='font-bold'>Improving employee competence and performance:</span> By providing employees with the skills and knowledge they need to perform their roles effectively, you can enhance their performance and increase their job satisfaction.</li>
            <li><span className='font-bold'>Enhancing your management system:</span> Training can help your organization understand the requirements of the relevant standard and how to implement them effectively, leading to a more robust and effective management system.</li>
            <li><span className='font-bold'>Improving customer satisfaction:</span> By training employees on how to meet customer needs and expectations, you can improve customer satisfaction and loyalty, leading to increased business success.</li>
            <li><span className='font-bold'>Reducing costs:</span> By identifying and addressing areas where processes can be improved, training can help you save costs and improve your bottom line.</li>
          </ul>
        </div>
        <p className="text-md md:text-lg lg:text-xl xl:text-2xl underline">Training Courses</p>
        <div className="mb-5 text-xs md:text-sm lg:text-md xl:text-lg">
          We offer a wide range of training courses to meet your organization's needs. Our courses include:
          <ul className='list-disc ml-5'>
            <li><span className='font-bold'>Introduction to management systems:</span> An overview of the requirements of the relevant standard and how to implement them effectively.</li>
            <li><span className='font-bold'>Internal auditing:</span> Training on how to conduct internal audits of your management system to identify areas for improvement and ensure ongoing compliance with the standard.</li>
            <li><span className='font-bold'>Lead auditor:</span> Training on how to conduct certification audits of other organizations' management systems, including planning, executing, and reporting on audits.</li>
            <li><span className='font-bold'>Risk management:</span> Training on how to identify and manage risks to your organization effectively.</li>
            <li><span className='font-bold'>Process improvement:</span> Training on how to improve your processes to enhance efficiency and effectiveness.</li>
          </ul>
        </div>
        <p className="mb-5 text-md md:text-lg lg:text-xl xl:text-2xl">In addition to these courses, we can also provide customized training courses to meet your specific needs. Just let us know what you're looking for, and we'll work with you to create a training program that meets your organization's unique needs.</p>
        <p className="mb-5 text-md md:text-lg lg:text-xl xl:text-2xl">Training is an essential part of achieving and maintaining certification to management system standards. At SQMC India, we're committed to providing engaging, informative, and practical training courses to help your organization succeed.</p>
      </div>
      <FormOnly service_type="Training" />
      <Footer />
    </>
  )
}
