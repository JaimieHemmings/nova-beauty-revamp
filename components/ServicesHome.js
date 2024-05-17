import Link from "next/link"
import Image from "next/image"

import Nails from '../assets/panels/nails.avif'
import Massage from '../assets/panels/massage.avif'
import Microdermabrasion from '../assets/panels/healthcare.avif'
import Waxing from '../assets/panels/waxing.avif'
import Facials from '../assets/panels/facials.avif'
import Lashes from '../assets/panels/eyes.avif'
import Hair from '../assets/panels/hair.avif'
import Brows from '../assets/panels/makeup.avif'



export default function ServicesHome() {
    return (
        <section className="services">
            <div className="container mx-auto">
                <div className="row">
                    <Link href="/services">
                        <Image src={Nails} alt="" width={400} height={400} />
                        <h2>Nails</h2>
                    </Link>
                    <Link href="/services">
                        <Image src={Massage} alt="" width={400} height={400} />
                        <h2>Massage</h2>
                    </Link>
                    <Link href="/services">
                        <Image src={Microdermabrasion} alt="" width={400} height={400} />
                        <h2>Microdermabrasion</h2>
                    </Link>
                    <Link href="/services">
                        <Image src={Waxing} alt="" width={400} height={400} />
                        <h2>Waxing</h2>
                    </Link>
                    <Link href="/services">
                        <Image src={Facials} alt="" width={400} height={400} />
                        <h2>Facials</h2>
                    </Link>
                    <Link href="/services">
                        <Image src={Lashes} alt="" width={400} height={400} />
                        <h2>Lashes</h2>
                    </Link>
                    <Link href="/services">
                        <Image src={Hair} alt="" width={400} height={400} />
                        <h2>Hair</h2>
                    </Link>
                    <Link href="/services">
                        <Image src={Brows} alt="" width={400} height={400} />
                        <h2>Brows</h2>
                    </Link>
                </div>
            </div>
        </section>
    )
}