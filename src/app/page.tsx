import Image from "next/image";
import styles from "./page.module.css";
import Header from '@/components/Header/Header';
import Hero from '@/components/home/Hero';
import Services from "@/components/Services/Services";
import Footer from "@/components/Footer/Footer";
import Features from "@/components/Feature/Features";
import Contact from "@/components/contact/contact";
export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <Services />
    <Features />
    <Contact />
    <Footer />
      
    </>
  )
}