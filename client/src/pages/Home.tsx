import Hero from "@/components/home/Hero";
import Specialties from "@/components/home/Specialties";
import AboutSection from "@/components/home/AboutSection";
import Testimonials from "@/components/home/Testimonials";
import Locations from "@/components/home/Locations";
import OrderProcess from "@/components/home/OrderProcess";
import { useEffect } from "react";

export default function Home() {
  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero />
      <Specialties />
      <AboutSection />
      <Testimonials />
      <Locations />
      <OrderProcess />
    </div>
  );
}
