import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

import team from '@/content/home/team.json'
import reasons from '@/content/home/whyus.json'
import items from '@/content/home/carousel.json'
import services from '@/content/home/services.json'

const Carousel = () => {
  const calculateBackward = (id: number) => {
    if (id === 1) {
      return "#slide".concat(String(items.length))
    } else {
      return "#slide".concat(String(id - 1))
    }
  }

  const calculateForward = (id: number) => {
    if (id === items.length) {
      return "#slide1"
    } else {
      return "#slide".concat(String(id + 1))
    }
  }

  return (
    <>
      <div className="hidden sm:carousel w-full">
        {items.map((item) => (
          <div id={"slide".concat(item.id)} className="carousel-item relative w-full">
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${item.backgroundImage})` }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-screen-lg">
                  <h1 className="mb-8 text-5xl md:text-6xl lg:text-7xl font-bold">{item.title}</h1>
                  {item.messages.map((message) => (
                    <div className="mb-5"><div dangerouslySetInnerHTML={{ __html: message }} /></div>
                  ))}
                  {/* <Link href="#why-us"><button className="btn btn-primary">{item.buttonText}</button></Link> */}
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href={calculateBackward(parseInt(item.id))} className="btn btn-circle">❮</a>
              <a href={calculateForward(parseInt(item.id))} className="btn btn-circle">❯</a>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel carousel-center space-x-4 sm:hidden">
        {items.map((item) => (
          <div className="carousel-item">
            <div className="hero min-h-screen w-screen" style={{ backgroundImage: `url(${item.backgroundImage})` }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl md:text-6xl lg:text-7xl font-bold">{item.title}</h1>
                  {item.messages.map((message) => (
                    <div className="mb-5"><div dangerouslySetInnerHTML={{ __html: message }} /></div>
                  ))}
                  {/* <Link href="#why-us"><button className="btn btn-primary">{item.buttonText}</button></Link> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

const Services = () => {
  return (
    <>
      <h1 className='text-center text-5xl md:text-6xl lg:text-7xl font-bold mt-20 mb-10'>Services</h1>
      <div className="max-w-screen mx-auto px-2 grid grid-cols-1 md:grid-cols-3 gap-2 justify-between">
        {services.map((service) => (
          <div className="card bg-base-100 shadow-xl image-full mx-auto">
            <figure><Image src={service.backgroundImage} height={786} width={1723} alt="Gap Analysis" /></figure>
            <div className="card-body">
              <h2 className="card-title">{service.title}</h2>
              <p>{service.description}</p>
              <div className="card-actions">
                <Link href={service.href}><button className="btn btn-primary">Learn More</button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

const WhyChooseUs = () => {
  return (
    <div id="why-us" className="w-screen bg-base-100 text-gray-800 my-10">
      <h1 className='text-center pt-10 text-5xl md:text-6xl lg:text-7xl font-bold my-10'>Why Choose Us?</h1>
      <div className="max-w-screen mx-auto px-2 grid grid-cols-1 md:grid-cols-2 gap-2 justify-between">
        {reasons.map((reason) => (
          <div className="card bg-base-100 shadow-xl">
            <figure><Image src={reason.backgroundImage} height={786} width={1723} className='w-full' alt="Experienced team" /></figure>
            <div className="card-body">
              <h2 className="card-title">{reason.title}</h2>
              <p className='text-justify'>{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const AboutUs = () => {
  return (
    <>
      <div className="w-screen py-8 bg-base-100 text-gray-800 z-50">
        <h1 className='text-center text-5xl md:text-6xl lg:text-7xl font-bold my-10 text'>Our Team</h1>
        <div className="max-w-screen mx-auto px-2 grid grid-cols-1 lg:grid-cols-2 gap-2 items-start">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col justify-center items-center bg-base-100">
              <figure><Image src={member.displayPicture} height={180} width={180} className='mask mask-circle' alt="Album" /></figure>
              <div className="text-center py-4">
                <div className="mb-1">
                  <h1 className="text-3xl font-bold">{member.name}</h1>
                  <h2 className='text-xl'>{member.designation}</h2>
                </div>
                <p className='text-base text-justify hidden mx-4 lg:block'>{member['description-lg']}</p>
                <p className='text-base text-justify block mx-4 lg:hidden'>{member['description-sm']}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

const ConfusedContact = () => {
  const allStyle = {
    backgroundImage: `url("/confused-contact.png")`,
    backgroundPosition: '40% 40%',
  }

  return (
    <>
      <div className="hero min-h-screen" style={allStyle}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white">Confused About Costing?</h1>
            <p className="text-5xl font-bold py-6 text-white">Our Team is Here to Help You!</p>
            <Link href="/costing-quote"><button className="btn btn-primary text-white">Get Your Costing Today!</button></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>SQMC India</title>
      </Head>
      <Navbar />
      <Carousel />
      <Services />
      <WhyChooseUs />
      <AboutUs />
      <ConfusedContact />
      <Footer />
    </>
  )
}
