import Head from 'next/head'
import { useState } from 'react'

import { Footer } from "@/components/Footer"
import { Navbar } from "@/components/Navbar"
// import { FormQuote, FormValues } from '@/components/FormQuote'
import { FormQuote } from '@/components/FormQuote'

export default function CostingQuote() {
  // const [formData, setFormData] = useState<FormValues | null>(null)
  // const [isLoading, setIsLoading] = useState(false)
  // const [isSubmitted, setIsSubmitted] = useState(false)

  // const handleFormSubmit = (data: FormValues) => {
  //   setFormData(data)
  //   console.log(data)
  // }
  return (
    <>
      <Head>
        <title>Get a Quote | SQMC India</title>
      </Head>
      <Navbar />
      <div className="hero w-screen bg-[url('/contact.jpg')] bg-cover mb-10">
        <div className="hero-overlay bg-opacity-60"></div>
        <h1 className="text-center text-white text-5xl md:text-6xl lg:text-7xl font-bold py-20">Get a Quote</h1>
      </div>
      {/* <FormQuote onSubmit={handleFormSubmit} /> */}
      <FormQuote />
      <Footer />
    </>
  )
}
