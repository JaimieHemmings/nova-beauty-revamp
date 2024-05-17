import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import ServicesHome from "@/components/ServicesHome";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import AboutSection from "@/components/AboutSection";

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
      <AboutSection
        title="I am on a mission to make holistic"
        span="beauty and wellness"
        title2="treatments more accessible across Cornwall"
        text1="My goal is to provide exceptional beauty and therapy services that not only enhance your appearance but also promote overall well-being. With years of experience and a passion for excellence, I am committed to delivering personalized care in a serene and welcoming environment."
        text2="My goal is to provide exceptional beauty and therapy services that not only enhance your appearance but also promote overall well-being. With years of experience and a passion for excellence, I am committed to delivering personalized care in a serene and welcoming environment."
      />
      <ServicesHome />
      <AboutSection
        title="I am on a mission to make holistic"
        span="beauty and wellness"
        title2="treatments more accessible across Cornwall"
        text1="My goal is to provide exceptional beauty and therapy services that not only enhance your appearance but also promote overall well-being. With years of experience and a passion for excellence, I am committed to delivering personalized care in a serene and welcoming environment."
        text2="My goal is to provide exceptional beauty and therapy services that not only enhance your appearance but also promote overall well-being. With years of experience and a passion for excellence, I am committed to delivering personalized care in a serene and welcoming environment."
      />
      <CTA />
      <ContactForm />
      <Testimonials />
    </>
  );
}
