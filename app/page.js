import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import ServicesHome from "@/components/ServicesHome";
import Testimonials from "@/components/Testimonials";

export const metadata = {
  title: "Nova Beauty | Home"
};

export default function Home() {
  return (
    <>
      <Hero
        title="We invest in your potential"
        text="Welcome to my sanctuary of holistic beauty and rejuvenation, where tranquility meets transformation. Nestled in the heart of serene Cornish surroundings, we invite you on a journey of self-discovery and revitalization. Using a variety of skills I blend ancient healing techniques with modern practices to provide a holistic approach to beauty and wellness."
      />
      <ServicesHome />
      <CTA />
      <Testimonials />
    </>
  );
}
