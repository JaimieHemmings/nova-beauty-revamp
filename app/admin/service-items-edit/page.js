import Link from 'next/link';
import ConnectDB from '@/config/database'
import { getSessionUser } from '@/utils/getSessionUser'
import { convertToSerializeableObject } from '@/utils/convertToObject'
import Services from '@/models/Services'
import ServiceProperties from '@/components/ServiceProperties';

const ServicesItemsEditPage = async () => {
    await ConnectDB();
    const sessionUser = await getSessionUser();
    const Service = await Services.find({}).lean();
    const serviceList = Service.map(convertToSerializeableObject);

    return (
        <section className="container mx-auto">
            <ServiceProperties properties={serviceList} />
        </section>
    )
}
    

export default ServicesItemsEditPage
