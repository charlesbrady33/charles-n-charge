import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Gallery from '../components/Gallery'
import Reviews from '../components/Reviews'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Charles n Charge | Lawn & Property Maintenance Marion, IN</title>
        <meta name="description" content="Professional lawn care, pressure washing, handyman, tree trimming, pest control, and more in Marion, Indiana" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </>
  )
}
