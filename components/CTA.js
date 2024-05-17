import Link from "next/link";
import Image from "next/image";
import modelsIMG from '../assets/massage-bg.png'

export default function CTA() {
    return (
        <section className="container mx-auto relative">
            <Image className="xl:max-w-6xl" width={0} height={0} src={modelsIMG} alt="" />
            <div className="content bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-48 right-5">
                <h2 className="text-3xl font-semibold mt-4 md:mt-10">Oncology Massage</h2>
                <p className="my-3 pb-5 text-justify font-medium text-gray-700 leading-relaxed">Discover the transformative power of Oncology Massage—a specialized therapeutic touch designed to support cancer patients through every stage of their journey. At Nova Beauty, we understand the unique challenges that come with a cancer diagnosis, and our compassionate, highly-trained therapists are here to offer relief, comfort, and a sense of well-being.</p>
                <Link href="/services" className="mt-2 md:mt-5 p-3 px-5 bg-black text-white font-bold text-sm hover:bg-purple-800">See More</Link>
            </div>
    </section>
    );
};