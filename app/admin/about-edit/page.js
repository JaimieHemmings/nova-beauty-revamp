import EditPageForm from '@/components/EditPageForm';
import ConnectDB from '@/config/database';
import Pages from '@/models/Pages';

const EditAboutPage = async () => {
    await ConnectDB();
    const pageData = await Pages.findById("664ef033613f55c8e1cfa8fa").lean();
  return (
    <section className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
            <EditPageForm data={pageData}/>
        </div>
    </section>
  )
}

export default EditAboutPage