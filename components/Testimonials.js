import profileImg from '../assets/profile.png'
import Image from 'next/image'
import styles from '../assets/styles/testimonials.module.css'

export default function Testimonials () {
    return (
        <div className="container mx-auto flex items-center justify-center pb-10">
            <div className="w-full px-5">
                <div className="w-full max-w-6xl mx-auto">
                    <div className="text-center max-w-xl mx-auto">
                        <h1 className="text-6xl md:text-7xl font-bold mb-5 text-white">What people <br />are saying.</h1>
                        <h3 className="text-xl mb-10 font-light text-white">Don't just take my word for it, I've got hundreds of happy customers!</h3>
                    </div>
                    <div className="-mx-3 md:flex items-start">
                        <div className="px-3 md:w-1/3">
                            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                <div className="w-full flex mb-4 items-center">
                                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                    <Image
                                        src={profileImg}
                                        width={0}
                                        height={0}
                                        alt="User profile Image"
                                    />
                                    </div>
                                    <div className="flex-grow pl-3">
                                        <h6 className="font-bold text-sm uppercase text-gray-600">Jodie Warburton</h6>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>After hearing so many good things.. i went and had my brows done here for the first time today.. Rhi did an amazing job at re shaping my brows! Safe to say this is the ONLY place i will be going from now on.. thank you!<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                </div>
                            </div>
                            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                <div className="w-full flex mb-4 items-center">
                                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                    <Image
                                        src={profileImg}
                                        width={0}
                                        height={0}
                                        alt="User profile Image"
                                    />
                                    </div>
                                    <div className="flex-grow pl-3">
                                        <h6 className="font-bold text-sm uppercase text-gray-600">Stevie Tifft</h6>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lovely nails by Rhi today. Really recommend, beautiful salon, great service.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="px-3 md:w-1/3">
                            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                <div className="w-full flex mb-4 items-center">
                                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                    <Image
                                        src={profileImg}
                                        width={0}
                                        height={0}
                                        alt="User profile Image"
                                    />
                                    </div>
                                    <div className="flex-grow pl-3">
                                        <h6 className="font-bold text-sm uppercase text-gray-600">Tommie Ewart.</h6>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Had Russian lashes for my holiday done by the lovely Rhi, great service throughout and she styled the lashes to suit my eye shape and I loved them, my lashes lasted my whole holiday would definitely recommend this to everyone thank you!! x<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                </div>
                            </div>
                            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                <div className="w-full flex mb-4 items-center">
                                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                    <Image
                                src={profileImg}
                                width={0}
                                height={0}
                                alt="User profile Image"
                            />
                                    </div>
                                    <div className="flex-grow pl-3">
                                        <h6 className="font-bold text-sm uppercase text-gray-600">Charlie Howse.</h6>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>I have regular appointments booked as I am so pleased with the results, Rhi is really professional and friendly. Thoroughly recommend her!<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="px-3 md:w-1/3">
                            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                <div className="w-full flex mb-4 items-center">
                                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                    <Image
                                src={profileImg}
                                width={0}
                                height={0}
                                alt="User profile Image"
                            />
                                    </div>
                                    <div className="flex-grow pl-3">
                                        <h6 className="font-bold text-sm uppercase text-gray-600">Nevada Herbertson.</h6>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Took a little bit of self care today & id just like to thank Rhi for an amazing full body massage. I’ve come away feeling amazing. If your looking for a massage that hits all the right places she’s your girl. She is so friendly & welcoming. Full body massage highly recommended.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                </div>
                            </div>
                            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                <div className="w-full flex mb-4 items-center">
                                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                    <Image
                                src={profileImg}
                                width={0}
                                height={0}
                                alt="User profile Image"
                            />
                                    </div>
                                    <div className="flex-grow pl-3">
                                        <h6 className="font-bold text-sm uppercase text-gray-600">Kris Stanton.</h6>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Love this place - Rhiannah I am holding out doing my nails - just filing the shellac down till you are open again #supportsmallbusinesses<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}