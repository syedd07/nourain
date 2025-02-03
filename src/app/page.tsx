'use client';
// import Image from "next/image";
// import styles from "./page.module.css";
import Header from '@/components/Header/Header';
import Hero from '@/components/home/Hero';
import Services from "@/components/Services/Services";
import Features from "@/components/Feature/Features";
import Contact from "@/components/contact/contact";
// import Seo from '../../../lib/seo';


export default function Home() {
 
  return (
    <>
      {/* <Seo
        title="Home Page Title"
        description="This is the home page description for SEO."
        openGraph={{
          title: 'Home Page Title',
          description: 'This is the home page description for SEO.',
          url: 'https://www.nourain.ae',
        }} 
        canonical={undefined} instagram={undefined} />
        */}
      <div className="relative flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <Services />
          <Features />
          <Contact />
        </main>
      </div>
    </>
  )
}