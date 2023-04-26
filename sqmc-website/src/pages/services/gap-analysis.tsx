import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { Footer } from "@/components/Footer"
import { Navbar } from "@/components/Navbar"

export default function GapAnalysis() {
  const [certificate_select, setCertificate_select] = useState("Select certificate")

  const Introduction = () => {
    return (
      <>
        <div className="hero w-screen bg-[url('/services/gap-analysis.jpg')] bg-bottom bg-cover mb-10">
          <div className="hero-overlay bg-opacity-60"></div>
          <h1 className="text-center text-white text-5xl md:text-6xl lg:text-7xl font-bold py-20">Gap Analysis</h1>
        </div>
        <div className="container text-justify text-md md:text-lg lg:text-xl xl:text-2xl mx-auto px-4 mb-10">
          <p className="mb-5">A Gap Analysis is a crucial step in the journey towards achieving ISO certification. This assessment is aimed at identifying the gaps between an organization's current management system and the requirements of the relevant ISO standards. At SQMC India, we understand that ISO certification can be a daunting and challenging process, which is why we are committed to providing top-notch Gap Analysis services to our clients.</p>
          <p className="mb-5">Our team of experts has years of experience conducting Gap Analyses for a range of ISO certifications, including ISO 9001, ISO 14001, ISO 45001, IATF 16949, ISO 50001, and ISO 27001. We understand that every organization is unique and has different needs, which is why our services are customized to meet your specific requirements.</p>
          <p className="mb-5">During the Gap Analysis process, our team will conduct a comprehensive assessment of your organization's processes, procedures, and documentation to identify areas of non-conformance. We will provide you with a detailed report that highlights the gaps in your management system and recommendations for improvement. This report will serve as a roadmap for your organization to make necessary changes and achieve ISO certification.</p>
          <p className="mb-5">At SQMC India, we prioritize communication and collaboration with our clients. We will work closely with you throughout the Gap Analysis process to ensure that you fully understand the findings and recommendations. We will also provide guidance and support to help you implement the necessary changes and prepare for the certification audit.</p>
          <p className="mb-5">In summary, a Gap Analysis is a crucial step towards achieving ISO certification, and at SQMC India, we are committed to providing top-notch Gap Analysis services that are tailored to meet our clients' specific needs. Contact us today to schedule a Gap Analysis and take the first step towards achieving ISO certification.</p>
        </div>
      </>
    )
  }

  const Form = () => {
    return (
      <>
        <div className="hero max-w-screen-2xl mx-auto bg-gradient-to-b from-slate-900 to-white bg-opacity-10 rounded-xl">
          <div className="hero-overlay rounded-xl"></div>
          <div className="flex flex-col w-full">
            <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold my-10 mx-10 text-center">Get a rough quote for the cost of Gap Analysis <strong className="text-[#f7d65a] text-3xl md:text-4xl lg:text-5xl">TODAY!</strong>, fill out the form below with your details and one of our experts will get in touch with you shortly.</h1>
            <div className="card w-full shadow-2xl bg-base-100 rounded-none">
              <div className="card-body">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Full Name</span>
                    </label>
                    <input type="text" placeholder="Full Name" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="Email" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Phone Number</span>
                    </label>
                    <input type="tel" id="phone" className="input input-bordered" placeholder="123-456-6789" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required></input>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Organisation Name</span>
                    </label>
                    <input type="text" placeholder="Organisation Name" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Type of Certification</span>
                    </label>
                    <select className={certificate_select === "Select certificate" ? "select select-bordered text-slate-400" : "select select-bordered text-black"} onChange={(e) => setCertificate_select(e.target.value)} value={certificate_select}>
                      <option disabled>Select certificate</option>
                      <option className="text-black">ISO 9001:2015</option>
                      <option className="text-black">ISO 14001:2015</option>
                      <option className="text-black">ISO 45001:2018</option>
                      <option className="text-black">ISO 27001:2013</option>
                      <option className="text-black">ISO 50001:2011</option>
                      <option className="text-black">ISO 22301:2012</option>
                      <option className="text-black">ISO 26000:2010</option>
                      <option className="text-black">ISO 22000:2018</option>
                      <option className="text-black">ISO 13485:2016</option>
                      <option className="text-black">ISO/IEC 17025:2017</option>
                      <option className="text-black">ISO/IEC 20000-1:2011</option>
                      <option className="text-black">ISO/TS 16949:2009</option>
                      <option className="text-black">ISO/IEC 27001:2013</option>
                      <option className="text-black">ISO 31000:2018</option>
                    </select>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Number of Employees</span>
                    </label>
                    <input type="number" placeholder="Number of Employees" className="input input-bordered" min={0} />
                  </div>
                </div>
                <div className="form-control">
                    <label className="label">
                      <span className="label-text">Additional Comments/Questions</span>
                    </label>
                    <textarea placeholder="Additional Comments/Questions" className="textarea textarea-bordered" />
                  </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary rounded-lg">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <Introduction />
      <Form />
      <Footer />
    </>
  )
}
