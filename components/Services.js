import ConnectDB from "@/config/database"
import ServicesList from "@/models/Services"

const ServicesPage = async ({data}) => {
    await ConnectDB();
    const Service = await ServicesList.find({}).lean();
    return (
        <section className="feature__section container mx-auto">
            <div className="max-w-5xl px-7 lg:px-10 py-14 mx-auto">
                <div className="flex flex-col gap-y-3">
                    <h2 className="text-3xl md:text-3xl lg:text-4xl md:max-w-lg font-bold text-white">Nail Treatments</h2>
                    <p className="md:max-w-lg text-white">{data.property3}</p>
                </div>
                <div className="w-full pt-10 lg:w-full relative isolate grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    { Service.map((serviceItem) => (
                        serviceItem.type === "Nails" ? (
                            <div key={serviceItem._id}
                                className="grid grid-rows-1 p-5 bg-white rounded-xl gap-y-2 w-full border border-slate-500/50 ">
                                <div className="flex flex-col gap-y-2.5">
                                <h3 className="text-lg font-semibold">{serviceItem.name}</h3>
                                <p className="text-xl font-semibold">£{serviceItem.price}</p>
                                </div>
                                <p className="text-slate-700/70 text-base">{serviceItem.description}</p>
                            </div>
                        ) : ("")
                    ))}
                </div>
            </div>
            
            <div className="max-w-5xl px-7 lg:px-10 py-14 mx-auto">
                <div className="flex flex-col gap-y-3">
                    <h2 className="text-3xl md:text-3xl lg:text-4xl md:max-w-lg font-bold text-white">Massage Treatments</h2>
                    <p className="md:max-w-lg text-white">{data.property4}</p>
                </div>
                <div className="w-full pt-10 lg:w-full relative isolate grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    { Service.map((serviceItem) => (
                        serviceItem.type === "Massages" ? (
                            <div key={serviceItem._id}
                            className="grid grid-rows-1 p-5 bg-white rounded-xl gap-y-2 w-full border border-slate-500/50 ">
                                <div className="flex flex-col gap-y-2.5">
                                <h3 className="text-lg font-semibold">{serviceItem.name}</h3>
                                <p className="text-xl font-semibold">£{serviceItem.price}</p>
                                </div>
                                <p className="text-slate-700/70 text-base">{serviceItem.description}</p>
                            </div>
                        ) : ("")
                    ))}
                </div>
            </div>

            
            <div className="max-w-5xl px-7 lg:px-10 py-14 mx-auto">
                <div className="flex flex-col gap-y-3">
                    <h2 className="text-3xl md:text-3xl lg:text-4xl md:max-w-lg font-bold text-white">Microdermabrasion</h2>
                    <p className="md:max-w-lg text-white">{data.property5}</p>
                </div>
                <div className="w-full pt-10 lg:w-full relative isolate grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    { Service.map((serviceItem) => (
                        serviceItem.type === "Microdermabrasion" ? (
                            <div key={serviceItem._id}
                            className="grid grid-rows-1 p-5 bg-white rounded-xl gap-y-2 w-full border border-slate-500/50 ">
                                <div className="flex flex-col gap-y-2.5">
                                <h3 className="text-lg font-semibold">{serviceItem.name}</h3>
                                <p className="text-xl font-semibold">£{serviceItem.price}</p>
                                </div>
                                <p className="text-slate-700/70 text-base">{serviceItem.description}</p>
                            </div>
                        ) : ("")
                    ))}
                </div>
            </div>

            
            <div className="max-w-5xl px-7 lg:px-10 py-14 mx-auto">
                <div className="flex flex-col gap-y-3">
                    <h2 className="text-3xl md:text-3xl lg:text-4xl md:max-w-lg font-bold text-white">Waxing Treatments</h2>
                    <p className="md:max-w-lg text-white">{data.property6}</p>
                </div>
                <div className="w-full pt-10 lg:w-full relative isolate grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    { Service.map((serviceItem) => (
                        serviceItem.type === "Waxing" ? (
                            <div key={serviceItem._id}
                            className="grid grid-rows-1 p-5 bg-white rounded-xl gap-y-2 w-full border border-slate-500/50 ">
                                <div className="flex flex-col gap-y-2.5">
                                <h3 className="text-lg font-semibold">{serviceItem.name}</h3>
                                <p className="text-xl font-semibold">£{serviceItem.price}</p>
                                </div>
                                <p className="text-slate-700/70 text-base">{serviceItem.description}</p>
                            </div>
                        ) : ("")
                    ))}
                </div>
            </div>

            <div className="max-w-5xl px-7 lg:px-10 py-14 mx-auto">
                <div className="flex flex-col gap-y-3">
                    <h2 className="text-3xl md:text-3xl lg:text-4xl md:max-w-lg font-bold text-white">Facials</h2>
                    <p className="md:max-w-lg text-white">{data.property7}</p>
                </div>
                <div className="w-full pt-10 lg:w-full relative isolate grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    { Service.map((serviceItem) => (
                        serviceItem.type === "Facials" ? (
                            <div key={serviceItem._id}
                            className="grid grid-rows-1 p-5 bg-white rounded-xl gap-y-2 w-full border border-slate-500/50 ">
                                <div className="flex flex-col gap-y-2.5">
                                <h3 className="text-lg font-semibold">{serviceItem.name}</h3>
                                <p className="text-xl font-semibold">£{serviceItem.price}</p>
                                </div>
                                <p className="text-slate-700/70 text-base">{serviceItem.description}</p>
                            </div>
                        ) : ("")
                    ))}
                </div>
            </div>
            
            <div className="max-w-5xl px-7 lg:px-10 py-14 mx-auto">
                <div className="flex flex-col gap-y-3">
                    <h2 className="text-3xl md:text-3xl lg:text-4xl md:max-w-lg font-bold text-white">Lashes Treatments</h2>
                    <p className="md:max-w-lg text-white">{data.property8}</p>
                </div>
                <div className="w-full pt-10 lg:w-full relative isolate grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    { Service.map((serviceItem) => (
                        serviceItem.type === "Lashes" ? (
                            <div key={serviceItem._id}
                            className="grid grid-rows-1 p-5 bg-white rounded-xl gap-y-2 w-full border border-slate-500/50 ">
                                <div className="flex flex-col gap-y-2.5">
                                <h3 className="text-lg font-semibold">{serviceItem.name}</h3>
                                <p className="text-xl font-semibold">£{serviceItem.price}</p>
                                </div>
                                <p className="text-slate-700/70 text-base">{serviceItem.description}</p>
                            </div>
                        ) : ("")
                    ))}
                </div>
            </div>

            <div className="max-w-5xl px-7 lg:px-10 py-14 mx-auto">
                <div className="flex flex-col gap-y-3">
                    <h2 className="text-3xl md:text-3xl lg:text-4xl md:max-w-lg font-bold text-white">Hair</h2>
                    <p className="md:max-w-lg text-white">{data.property9}</p>
                </div>
                <div className="w-full pt-10 lg:w-full relative isolate grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    { Service.map((serviceItem) => (
                        serviceItem.type === "Hair" ? (
                            <div key={serviceItem._id}
                            className="grid grid-rows-1 p-5 bg-white rounded-xl gap-y-2 w-full border border-slate-500/50 ">
                                <div className="flex flex-col gap-y-2.5">
                                <h3 className="text-lg font-semibold">{serviceItem.name}</h3>
                                <p className="text-xl font-semibold">£{serviceItem.price}</p>
                                </div>
                                <p className="text-slate-700/70 text-base">{serviceItem.description}</p>
                            </div>
                        ) : ("")
                    ))}
                </div>
            </div>

            <div className="max-w-5xl px-7 lg:px-10 py-14 mx-auto">
                <div className="flex flex-col gap-y-3">
                    <h2 className="text-3xl md:text-3xl lg:text-4xl md:max-w-lg font-bold text-white">Brows</h2>
                    <p className="md:max-w-lg text-white">{data.property10}</p>
                </div>
                <div className="w-full pt-10 lg:w-full relative isolate grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    { Service.map((serviceItem) => (
                        serviceItem.type === "Brows" ? (
                            <div key={serviceItem._id}
                            className="grid grid-rows-1 p-5 bg-white rounded-xl gap-y-2 w-full border border-slate-500/50 ">
                                <div className="flex flex-col gap-y-2.5">
                                <h3 className="text-lg font-semibold">{serviceItem.name}</h3>
                                <p className="text-xl font-semibold">£{serviceItem.price}</p>
                                </div>
                                <p className="text-slate-700/70 text-base">{serviceItem.description}</p>
                            </div>
                        ) : ("")
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesPage