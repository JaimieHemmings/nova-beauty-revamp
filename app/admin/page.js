import { getSessionUser } from "@/utils/getSessionUser";
import { redirect } from "next/navigation";
import Link from "next/link";

const AdminPage = async () => {
    const sessionUser = await getSessionUser();

    if(sessionUser.user.isAdmin) {
        return (
            <section className="container mx-auto mt-10 mb-10">
                <ul className="w-full">
                    <li className="block w-full rounded-lg bg-white p-4 text-left mt-5 grid grid-cols-2 gap-4">
                        <p className="inline-start">Home Page</p>
                        <Link href="/admin/home-edit" class="text-center inline-end bg-highlight text-white font-bold py-2 px-4 rounded">Edit</Link>
                    </li>
                    <li className="block w-full rounded-lg bg-white p-4 text-left mt-5 grid grid-cols-2 gap-4">
                        <p className="inline-start">About Page</p>
                        <Link href="/admin/about-edit" class="text-center inline-end bg-highlight text-white font-bold py-2 px-4 rounded">Edit</Link>
                    </li>
                    <li className="block w-full rounded-lg bg-white p-4 text-left mt-5 grid grid-cols-2 gap-4">
                        <p className="inline-start">Services Page</p>
                        <Link href="/admin/services-edit" class="text-center inline-end bg-highlight text-white font-bold py-2 px-4 rounded">Edit</Link>
                    </li>
                    <li className="block w-full rounded-lg bg-white p-4 text-left mt-5 grid grid-cols-2 gap-4">
                        <p className="inline-start">Contact Page</p>
                        <Link href="/admin/contact-edit" class="text-center inline-end bg-highlight text-white font-bold py-2 px-4 rounded">Edit</Link>
                    </li>
                    <li className="block w-full rounded-lg bg-white p-4 text-left mt-5 grid grid-cols-2 gap-4">
                        <p className="inline-start">Services Page Items</p>
                        <Link href="/admin/service-items-edit" class="text-center inline-end bg-highlight text-white font-bold py-2 px-4 rounded">Edit</Link>
                    </li>
              </ul>    
            </section>
        )
    } else {
        redirect('/');
    }
}

export default AdminPage
