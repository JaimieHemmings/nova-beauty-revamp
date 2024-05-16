export default function Footer() {
    const getYear = new Date().getFullYear();
    return (
        <footer className="bg-white shadow dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {getYear} <a href="https://flowbite.com/" className="hover:underline">Nova Beauty</a>. All Rights Reserved.
            </span>
            </div>
        </footer>
    )
}