import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import ServicesHome from "@/components/ServicesHome";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import AboutSection from "@/components/AboutSection";
import ConnectDB from "@/config/database";
import Pages from "@/models/Pages";

export const metadata = {
  title: "Nova Beauty | Home"
};

export default async function Home() {
  await ConnectDB();
  const data = await Pages.findById("664ef019613f55c8e1cfa8f7").lean();
  return (
    <>
      <Hero
        title={data.property1}
        text={data.property2}
      />
      <AboutSection
        title={data.property3}
        span={data.property4}
        title2={data.property5}
        text1={data.property6}
        text2={data.property7}
      />
      <ServicesHome />
      <AboutSection
        title={data.property8}
        span={data.property9}
        title2={data.property10}
        text1={data.property11}
        text2={data.property12}
      />
      <CTA
      title={data.property13}
      text1={data.property14}
      />
      <ContactForm />
      <Testimonials />
    </>
  );
}
