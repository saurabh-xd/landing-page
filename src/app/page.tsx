import CtaSection from "@/components/footer/CtaSection";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/navbar";
import Pricing from "@/components/pricing/Pricing";
import Testimonials from "@/components/testimonials/Testimonials";
import Footer from "@/components/footer/Footer";


export default function Home() {
  return (
    <div className="bg-neutral-950">
     <Navbar />
     <Hero/>
     <Features/>
     <Testimonials/>
     <Pricing/>
    <Footer/>
   
     
   
</div>
  );
}
