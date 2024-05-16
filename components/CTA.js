import Link from "next/link";
import modelsIMG from '../assets/massage-bg.png'

var heroBG = {
    backgroundImage: `url("${ modelsIMG.src }")`
  };

export default function CTA() {
    return (
        <section className="dark:bg-gray-900 dark-overlay bg-image" style={heroBG}>
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Elevated Healing with Oncology Massage</h2>
                    <p className="mb-8 text-white font-light sm:text-xl">Discover the transformative power of Oncology Massage—a specialized therapeutic touch designed to support cancer patients through every stage of their journey. At Nova Beauty, we understand the unique challenges that come with a cancer diagnosis, and our compassionate, highly-trained therapists are here to offer relief, comfort, and a sense of well-being.</p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            <Link href="#" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                                Learn More
                            </Link> 
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};