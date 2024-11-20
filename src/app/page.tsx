import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import List from "./components/List";
import Loc from "./components/Loc";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <List/>
      <Loc />
      <Footer />
    </>
   
  );
}
