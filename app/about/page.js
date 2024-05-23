import AboutSection from "@/components/AboutSection"
import CTA from "@/components/CTA"
import Hero from "@/components/Hero"
import Testimonials from "@/components/Testimonials"
import ConnectDB from "@/config/database"
import Pages from "@/models/Pages"

export default async function AboutPage() {
  await ConnectDB();
  const data = await Pages.findById("664ef033613f55c8e1cfa8fa").lean();
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
    <CTA
      title={data.property8}
      text1={data.property9}
      />
    <Testimonials />
    </>
  )
}
