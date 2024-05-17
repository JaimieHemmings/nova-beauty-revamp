import Link from "next/link"

export default function AboutSection({title, span, title2, text1, text2}) {
    return (
        <section className="container mx-auto flex flex-col items-center py-12 sm:py-24">
            <div className="lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center  font-black leading-7 md:leading-10 text-white">
                {title}
                <span className="text-highlight"> {span} </span>
                {title2}
            </h1>
            <p className="mt-5 sm:mt-10 lg:w-10/12 text-white font-normal text-center text-sm sm:text-lg">{text1}</p>
            <p className="mt-5 sm:mt-10 lg:w-10/12 text-white font-normal text-center text-sm sm:text-lg">{text2}</p>
            </div>
            <div className="flex justify-center items-center">
            <Link href="/services" className="bg-highlight transition duration-150 ease-in-out lg:text-xl lg:font-bold rounded text-white px-4 sm:px-10 py-2 sm:py-4 text-sm">See Services</Link>
            <Link href="/contact" className="bg-highlight-alt ml-4 transition duration-150 ease-in-out lg:text-xl lg:font-bold rounded border px-4 sm:px-10 py-2 sm:py-4 text-sm">Contact Us</Link>
            </div>
        </section>
    )
}