import Hero from "@/components/Hero"
import ContactForm from "@/components/ContactForm"
import Testimonials from "@/components/Testimonials"
import AboutSection from "@/components/AboutSection"
import ConnectDB from "@/config/database";
import Pages from "@/models/Pages";

export default async function ContactPage() {
  await ConnectDB();
  const data = await Pages.findById("664ef051613f55c8e1cfa900").lean();
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
    <ContactForm />
    <Testimonials />
    </>
  )
}
