import Head from 'next/head'

import { Footer } from "@/components/Footer"
import { Navbar } from "@/components/Navbar"
import { FormOnly } from "@/components/Form"

export default function Certification() {
  return (
    <>
      <Head>
        <title>Certification | SQMC India</title>
      </Head>
      <Navbar />
      <div className="hero w-screen bg-[url('/services/certification.jpg')] bg-bottom bg-cover mb-10">
        <div className="hero-overlay bg-opacity-60"></div>
        <h1 className="text-center text-white text-5xl md:text-6xl lg:text-7xl font-bold py-20">Certification</h1>
      </div>
      <div className="container text-justify mx-auto px-4 mb-10">
        <p className="mb-5 text-md md:text-lg lg:text-xl xl:text-2xl">Certification is a valuable tool for organizations to demonstrate their commitment to quality, safety, and environmental management. At SQMC India, we offer certification services for a variety of management system standards, including ISO 9001, ISO 14001, ISO 45001, and others. Our certification process is designed to be efficient, effective, and tailored to meet your specific needs.</p>
        <p className="text-md md:text-lg lg:text-xl xl:text-2xl underline">Benefits of Certification</p>
        <div className="mb-5 text-xs md:text-sm lg:text-md xl:text-lg">
          The benefits of internal auditing include:
          <ul className='list-disc ml-5'>
            <li><span className='font-bold'>Demonstrating your commitment to quality, safety, and environmental management:</span> Certification shows that you have a well-implemented management system that meets the requirements of the relevant standard.</li>
            <li><span className='font-bold'>Enhancing your organization's reputation and credibility:</span> Certification provides third-party verification of your management system, which can improve your reputation and build trust with customers and stakeholders.</li>
            <li><span className='font-bold'>Improving customer satisfaction and loyalty:</span> By implementing a management system that focuses on meeting customer needs and expectations, you can improve customer satisfaction and increase loyalty.</li>
            <li><span className='font-bold'>Meeting regulatory and customer requirements:</span> Certification can be a requirement for doing business with certain customers or for complying with regulatory requirements.</li>
            <li><span className='font-bold'>Identifying opportunities for improvement and cost savings:</span> The certification process can help you identify areas where you can improve your processes and save costs.</li>
          </ul>
        </div>
        <p className="text-md md:text-lg lg:text-xl xl:text-2xl underline">Certification Process</p>
        <div className="mb-5 text-xs md:text-sm lg:text-md xl:text-lg">
          The certification process typically involves the following steps:
          <ul className='list-disc ml-5'>
            <li><span className='font-bold'>Application:</span> You will need to submit an application for certification and provide information about your management system, including the scope and any relevant documents.</li>
            <li><span className='font-bold'>Gap analysis:</span> We will conduct a gap analysis to identify areas where your management system does not meet the requirements of the standard. This will help you understand what changes are needed to meet the standard.</li>
            <li><span className='font-bold'>System implementation:</span> You will need to implement changes to your management system to address the gaps identified during the gap analysis. We can provide support and guidance during this process.</li>
            <li><span className='font-bold'>Pre-audit:</span> We will conduct a pre-audit to verify that your management system is ready for the certification audit. This will help you identify any remaining gaps or areas that need improvement before the certification audit.</li>
            <li><span className='font-bold'>Certification audit:</span> We will conduct a certification audit to verify that your management system meets the requirements of the standard. This audit will include interviews with employees, review of documents and records, and observation of processes.</li>
            <li><span className='font-bold'>Certification decision:</span> We will make a certification decision based on the audit findings. If your management system meets the requirements of the standard, we will issue a certificate of conformity.</li>
            <li><span className='font-bold'>Surveillance audits:</span> We will conduct surveillance audits to verify that your management system continues to meet the requirements of the standard. These audits will be conducted at regular intervals over the certification period.</li>
          </ul>
        </div>
        <p className="text-md md:text-lg lg:text-xl xl:text-2xl underline">Certification Services</p>
        <div className="mb-5 text-xs md:text-sm lg:text-md xl:text-lg">
          <ul className='list-disc ml-5'>
            <li><span className='font-bold'>ISO 9001:</span> Quality Management System</li>
            <li><span className='font-bold'>ISO 14001:</span> Environmental Management System</li>
            <li><span className='font-bold'>ISO 45001:</span> Occupational Health and Safety Management System</li>
            <li><span className='font-bold'>Other management system standards as per the requirement of the client</span></li>
          </ul>
        </div>
        <p className="text-md md:text-lg lg:text-xl xl:text-2xl">Certification is a valuable tool for organizations to demonstrate their commitment to quality, safety, and environmental management. At SQMC India, we offer certification services for a variety of management system standards, and our process is designed to be efficient, effective, and tailored to meet your specific needs.</p>
      </div>
      <FormOnly service_type="Certification" />
      <Footer />
    </>
  )
}
