import Head from 'next/head'

import { Footer } from "@/components/Footer"
import { Navbar } from "@/components/Navbar"
import { FormOnly } from "@/components/Form"

export default function GapAnalysis() {
  return (
    <>
      <Head>
        <title>Gap Analysis | SQMC India</title>
      </Head>
      <Navbar />
      <div className="hero w-screen bg-[url('/services/gap-analysis.jpg')] bg-bottom bg-cover mb-10">
        <div className="hero-overlay bg-opacity-60"></div>
        <h1 className="text-center text-white text-5xl md:text-6xl lg:text-7xl font-bold py-20">Gap Analysis</h1>
      </div>
      <div className="container text-justify mx-auto px-4 mb-10">
        <p className="mb-5 text-md md:text-lg lg:text-xl xl:text-2xl">At SQMC India, we understand that achieving certification can be a complex and challenging process. That's why we offer gap analysis services to help organizations identify the areas they need to improve to meet certification requirements.</p>
        <p className="mb-5 text-md md:text-lg lg:text-xl xl:text-2xl">Gap analysis is a vital step in the certification process that can help organizations avoid costly mistakes, reduce risk, and improve their overall performance. During a gap analysis, our team of experts will review your current processes, procedures, and documentation to identify areas that need improvement to meet the standards' requirements.</p>
        <p className="text-md md:text-lg lg:text-xl xl:text-2xl underline">Our Gap Analysis Services</p>
        <p className="text-xs md:text-sm lg:text-md xl:text-lg">We offer comprehensive gap analysis services for a wide range of industries, including manufacturing, healthcare, education, and more. Our team has extensive experience working with various international standards such as ISO 9001, ISO 14001, ISO 27001, and ISO 45001, among others.</p>
        <div className="mb-5 text-xs md:text-sm lg:text-md xl:text-lg">
          Our gap analysis services include:
          <ul className='list-disc ml-5'>
            <li><span className='font-bold'>Initial gap analysis review</span></li>
            <li><span className='font-bold'>Detailed gap analysis report</span></li>
            <li><span className='font-bold'>Recommendations for improvement</span></li>
            <li><span className='font-bold'>Assistance with implementation of recommended improvements</span></li>
          </ul>
        </div>
        <p className="text-md md:text-lg lg:text-xl xl:text-2xl underline">Why Choose Us for Your Gap Analysis</p>
        <div className="text-xs md:text-sm lg:text-md xl:text-lg">
          At SQMC India, we are committed to providing our clients with high-quality gap analysis services that help them achieve their certification goals. We are proud to hold the following certifications and accreditations:
          <ul className='list-disc ml-5'>
            <li><span className='font-bold'>[List of certifications/accreditations]</span> [List of certifications/accreditations]</li>
          </ul>
        </div>
        <p className="mb-5 text-xs md:text-sm lg:text-md xl:text-lg">Our team of experts has years of experience working with organizations of all sizes and industries, providing them with the expertise and support they need to achieve certification. We are dedicated to providing our clients with personalized service, tailored to their specific needs.</p>
        <p className="mb-5 text-md md:text-lg lg:text-xl xl:text-2xl">At SQMC India, we believe that gap analysis is an essential step in achieving certification. Our team of experts is here to support you every step of the way, providing you with the guidance and support you need to achieve your certification goals.</p>
      </div>
      <FormOnly service_type="Gap Analysis" />
      <Footer />
    </>
  )
}
