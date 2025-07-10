import Image from "next/image";
import styles from "./page.module.css";
import Intro from "@/components/Intro";
import Form from "@/components/Form";
import Navbar from "@/components/Navbar"
import Create from "@/components/Create";
import Explore from "@/components/Explore";
import Phone from "@/components/Phone";
import Passion from "@/components/Passion";
import Share from "@/components/Share";
import Footer from "@/components/Footer";
import './globals.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <div>
        <Navbar/>
      </div>
      <div className="Page-con">
        <Intro/>
        <Form/>
      </div>
      <div>
        <Create/>
        <Phone/>
        <Explore/>
        <Passion/>
        <Share/>    
        <Footer/>
      </div>
       
     
    </div>
  );
}
