import Head from 'next/head'

import { Footer } from "@/components/Footer"
import { Navbar } from "@/components/Navbar"
import { FormOnly } from "@/components/Form"

export default function Documentation() {
  return (
    <>
      <Head>
        <title>Documentation | SQMC India</title>
      </Head>
      <Navbar />
      <div className="hero w-screen bg-[url('/services/documentation.jpg')] bg-bottom bg-cover mb-10">
        <div className="hero-overlay bg-opacity-60"></div>
        <h1 className="text-center text-white text-5xl md:text-6xl lg:text-7xl font-bold py-20">Documentation</h1>
      </div>
      <div className="container text-justify mx-auto px-4 mb-10">
        <p className="mb-5 text-md md:text-lg lg:text-xl xl:text-2xl">Documentation is an essential component of any management system. It helps ensure that your organization's processes are consistent, effective, and compliant with the relevant standard. At SQMC India, we offer a range of documentation services to help your organization achieve and maintain certification to standards such as ISO 9001, ISO 14001, ISO 45001, and others. Our services are designed to be tailored to your specific needs, and we can work with you to create a documentation system that works for your organization.</p>
        <p className="text-md md:text-lg lg:text-xl xl:text-2xl underline">Types of Documentation</p>
        <div className="mb-5 text-xs md:text-sm lg:text-md xl:text-lg">
          We offer a variety of documentation services, including:
          <ul className='list-disc ml-5'>
            <li><span className='font-bold'>Documentation review:</span> Our experts will review your existing documentation to ensure that it meets the requirements of the relevant standard. This can include policies, procedures, work instructions, forms, and records.</li>
            <li><span className='font-bold'>Documentation development:</span> We can work with you to develop new documentation or update your existing documentation to meet the requirements of the standard. Our experts will help you create policies, procedures, work instructions, forms, and records that are tailored to your organization's needs.</li>
            <li><span className='font-bold'>Document control:</span> We can help you establish and maintain a document control system to ensure that your documentation is up-to-date and accessible. This can include the development of a document control procedure, the creation of document templates, and the implementation of a document management software.</li>
            <li><span className='font-bold'>Process mapping:</span> We can help you map out your organization's processes to identify areas for improvement and ensure that they are documented effectively. Our experts will work with you to create process flowcharts, process maps, and process narratives.</li>
          </ul>
        </div>
        <p className="text-md md:text-lg lg:text-xl xl:text-2xl underline">Benefits of Documentation</p>
        <div className="mb-5 text-xs md:text-sm lg:text-md xl:text-lg">
          Effective documentation can provide numerous benefits to your organization, including:
          <ul className='list-disc ml-5'>
            <li><span className='font-bold'>Improved process consistency:</span> By documenting your processes, you can ensure that they are consistently executed across your organization. This can lead to improved quality, increased efficiency, and reduced waste.</li>
            <li><span className='font-bold'>Enhanced employee understanding:</span> Documentation can help employees understand their roles and responsibilities more clearly, leading to improved performance. This can also help with employee training and onboarding.</li>
            <li><span className='font-bold'>Easier compliance:</span> Documentation can help you meet the requirements of the relevant standard more easily and effectively. This can reduce the risk of non-conformities and increase the likelihood of successful certification.</li>
            <li><span className='font-bold'>Improved communication:</span> By documenting your processes and procedures, you can improve communication within your organization and with external stakeholders. This can lead to better collaboration, increased transparency, and improved customer satisfaction.</li>
          </ul>
        </div>
        <p className="mb-5 text-md md:text-lg lg:text-xl xl:text-2xl">Documentation is a critical aspect of achieving and maintaining certification to management system standards. At SQMC India, we're committed to providing tailored and effective documentation services to help your organization succeed.</p>
      </div>
      <FormOnly service_type="Documentation" />
      <Footer />
    </>
  )
}
