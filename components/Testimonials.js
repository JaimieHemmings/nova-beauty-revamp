import profileImg from '../assets/profile.png'
import Image from 'next/image'
import styles from '../assets/styles/testimonials.module.css'

export default function Testimonials () {
    return (
        
<section className="container mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 mx-auto sm:py-16 lg-px6 max-w-screen-xl">
        <div className="grid gap-4">
            <div className="bg-white rounded py-2 px-2">
                <div className={styles.testimonialHead}>
                    <Image
                        src={profileImg}
                        width={0}
                        height={0}
                    />
                    <h2>Jodie</h2>
                </div>
                <p>Took a little bit of self care today & id just like to thank Rhi for an amazing full body massage. I’ve come away feeling amazing. If your looking for a massage that hits all the right places she’s your girl. She is so friendly & welcoming. Full body massage highly recommended.</p>
            </div>
            <div className="bg-white rounded py-2 px-2">
                <div className={styles.testimonialHead}>
                    <Image
                        src={profileImg}
                        width={0}
                        height={0}
                    />
                    <h2>Ariella</h2>
                </div>
                <p>Had an amazing massage this morning done by Kayleigh. Excellent treatment I will be back</p>
            </div>
            <div className="bg-white rounded py-2 px-2">
                <div className={styles.testimonialHead}>
                    <Image
                        src={profileImg}
                        width={0}
                        height={0}
                    />
                    <h2>Danni</h2>
                </div>
                <p>Always so happy with my brows warm friendly and SSSSOOOOO talented!</p>
            </div>
        </div>
        <div className="grid gap-4">
            <div className="bg-white rounded py-2 px-2">
                <div className={styles.testimonialHead}>
                    <Image
                        src={profileImg}
                        width={0}
                        height={0}
                    />
                    <h2>Jaimie</h2>
                </div>
                <p>Love this place - Rhiannah I am holding out doing my nails - just filing the shellac down till you are open again #supportsmallbusinesses</p>
            </div>
            <div className="bg-white rounded py-2 px-2">
                <div className={styles.testimonialHead}>
                    <Image
                        src={profileImg}
                        width={0}
                        height={0}
                    />
                    <h2>Jo</h2>
                </div>
                <p>Had an amazing massage this morning. Excellent treatment I will be back </p>
            </div>
            <div className="bg-white rounded py-2 px-2">
                <div className={styles.testimonialHead}>
                    <Image
                        src={profileImg}
                        width={0}
                        height={0}
                    />
                    <h2>Georgia</h2>
                </div>
                <p>Had a lash lift and shellac manicure with Rhi today who was lovely im over the moon with the results and will definitely be going back!</p>
            </div>
        </div>
        <div className="grid gap-4">
            <div className="bg-white rounded py-2 px-2">
                <div className={styles.testimonialHead}>
                    <Image
                        src={profileImg}
                        width={0}
                        height={0}
                    />
                    <h2>Jennifer</h2>
                </div>
                <p>Really happy with my lash lift!</p>
            </div>
            <div className="bg-white rounded py-2 px-2">
                <div className={styles.testimonialHead}>
                    <Image
                        src={profileImg}
                        width={0}
                        height={0}
                    />
                    <h2>Senna</h2>
                </div>
                <p>Had Russian lashes for my holiday done by the lovely Rhi, great service throughout and she styled the lashes to suit my eye shape and I loved them, my lashes lasted my whole holiday would definitely recommend this to everyone thank you!! x</p>
            </div>
            <div className="bg-white rounded py-2 px-2">
                <div className={styles.testimonialHead}>
                    <Image
                        src={profileImg}
                        width={0}
                        height={0}
                    />
                    <h2>Janine</h2>
                </div>
                <p>Excellent. best. place. ever!!!</p>
            </div>
        </div>
        <div className="grid gap-4">
            <div className="bg-white rounded py-2 px-2">
                <div className={styles.testimonialHead}>
                    <Image
                        src={profileImg}
                        width={0}
                        height={0}
                    />
                    <h2>Catriona</h2>
                </div>
                <p>I have regular appointments booked as I am so pleased with the results, Rhi is really professional and friendly. Thoroughly recommend her! </p>
            </div>
            <div className="bg-white rounded py-2 px-2">
                <div className={styles.testimonialHead}>
                    <Image
                        src={profileImg}
                        width={0}
                        height={0}
                    />
                    <h2>Kirstie</h2>
                </div>
                <p>After hearing so many good things.. i went and had my brows done here for the first time today.. Rhi did an amazing job at re shaping my brows! Safe to say this is the ONLY place i will be going from now on.. thank you!</p>
            </div>
            <div className="bg-white rounded py-2 px-2">
                <div className={styles.testimonialHead}>
                    <Image
                        src={profileImg}
                        width={0}
                        height={0}
                    />
                    <h2>Sofy</h2>
                </div>
                <p>Lovely nails by Rhi today. Really recommend, beautiful salon, great service.</p>
            </div>
        </div>
    </div>
</section>
    )
}