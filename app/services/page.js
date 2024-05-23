import Services from "@/components/Services"
import Hero from "@/components/Hero"
import ConnectDB from "@/config/database";
import Pages from "@/models/Pages";

export default async function ServicesPage() {
  await ConnectDB();
  const data = await Pages.findById("664ef043613f55c8e1cfa8fd").lean();
  return (
    <>
    <Hero
      title={data.property1}
      text={data.property2}
    />
    <Services data={data} />
    </>
  )
}
