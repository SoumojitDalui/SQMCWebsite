import Head from 'next/head'

import { Footer } from "@/components/Footer"
import { Navbar } from "@/components/Navbar"
import { FormOnly } from "@/components/Form"

export default function InternalAudit() {
  return (
    <>
      <Head>
        <title>Internal Audit | SQMC India</title>
      </Head>
      <Navbar />
      <div className="hero w-screen bg-[url('/services/internal-audit.jpg')] bg-bottom bg-cover mb-10">
        <div className="hero-overlay bg-opacity-60"></div>
        <h1 className="text-center text-white text-5xl md:text-6xl lg:text-7xl font-bold py-20">Internal Audit</h1>
      </div>
      <div className="container text-justify mx-auto px-4 mb-10">
        <p className="mb-5 text-md md:text-lg lg:text-xl xl:text-2xl">At SQMC India, we understand the importance of maintaining an effective management system. Internal auditing is a critical component of this process, as it helps organizations to identify areas for improvement, verify compliance with requirements, and ensure the continued effectiveness of the management system. Our team of experienced auditors can help you plan and conduct internal audits that meet the requirements of your management system standard and provide valuable insights for improvement.</p>
        <p className="text-md md:text-lg lg:text-xl xl:text-2xl underline">What is an Internal Audit?</p>
        <p className="mb-5 text-xs md:text-sm lg:text-md xl:text-lg">An internal audit is a systematic, independent, and objective evaluation of the organization's management system. It involves examining the effectiveness of the system in meeting the organization's objectives and identifying areas for improvement. The internal audit process includes planning, preparation, conducting the audit, reporting, and follow-up.</p>
        <p className="text-md md:text-lg lg:text-xl xl:text-2xl underline">Benefits of Internal Auditing</p>
        <div className="mb-5 text-xs md:text-sm lg:text-md xl:text-lg">
          The benefits of internal auditing include:
          <ul className='list-disc ml-5'>
            <li><span className='font-bold'>Verification of compliance:</span> Internal auditing helps organizations to ensure compliance with regulatory and certification requirements. Our auditors are knowledgeable about the requirements of various management system standards and can help you verify compliance with these requirements.</li>
            <li><span className='font-bold'>Identification of improvement opportunities:</span> Internal auditing helps organizations to identify areas for improvement and implement corrective actions. Our auditors are trained to identify improvement opportunities and provide recommendations for corrective actions.</li>
            <li><span className='font-bold'>Enhanced effectiveness:</span> Internal auditing helps organizations to evaluate the effectiveness of their management system and identify opportunities for improvement. Our auditors can provide valuable insights into the effectiveness of your management system and help you identify opportunities for improvement.</li>
            <li><span className='font-bold'>Risk management:</span> Internal auditing helps organizations to identify and mitigate risks that could impact the achievement of their objectives. Our auditors can help you identify and mitigate risks that could impact your business.</li>
          </ul>
        </div>
        <p className="text-md md:text-lg lg:text-xl xl:text-2xl underline">Internal Audit Process</p>
        <div className="mb-5 text-xs md:text-sm lg:text-md xl:text-lg">
          The internal audit process typically involves the following steps:
          <ul className='list-disc ml-5'>
            <li><span className='font-bold'>Planning:</span> Developing an audit plan that identifies the scope, objectives, and criteria for the audit. Our auditors will work with you to develop an audit plan that meets the requirements of your management system standard.</li>
            <li><span className='font-bold'>Preparation:</span> Gathering information, developing checklists, and preparing for the audit. Our auditors will review your documentation and prepare for the audit.</li>
            <li><span className='font-bold'>Conducting the audit:</span> Collecting and analyzing evidence, interviewing employees, and documenting findings. Our auditors will conduct the audit in a professional and objective manner.</li>
            <li><span className='font-bold'>Reporting:</span> Preparing a report that summarizes the audit findings and recommends corrective actions. Our auditors will prepare a clear and concise report that provides valuable insights for improvement.</li>
            <li><span className='font-bold'>Follow-up:</span> Verifying that corrective actions have been implemented and evaluating their effectiveness. Our auditors will verify that corrective actions have been implemented and evaluate their effectiveness.</li>
          </ul>
        </div>
        <p className="text-md md:text-lg lg:text-xl xl:text-2xl">Our team of experienced auditors can help you plan and conduct internal audits that identify areas for improvement and ensure compliance with regulatory and certification requirements.</p>
      </div>
      <FormOnly service_type="Internal Audit" />
      <Footer />
    </>
  )
}
