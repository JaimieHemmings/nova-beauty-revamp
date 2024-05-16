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
      <Hero />
      <ServicesHome />
      <CTA />
      <Testimonials />
    </>
  );
}
