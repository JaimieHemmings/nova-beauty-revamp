'use server';
import Page from '@/models/Pages';
import ConnectDB from '@/config/database'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

async function updatePage(pageId, formData) {
  await ConnectDB();

  const pageData ={
    PageTitle: formData.get('PageTitle'),
    property1: formData.get('property1'),
    property2: formData.get('property2'),
    property3: formData.get('property3'),
    property4: formData.get('property4'),
    property5: formData.get('property5'),
    property6: formData.get('property6'),
    property7: formData.get('property7'),
    property8: formData.get('property8'),
    property9: formData.get('property9'),
    property10: formData.get('property10'),
    property11: formData.get('property11'),
    property12: formData.get('property12'),
    property13: formData.get('property13'),
    property14: formData.get('property14'),
  };


  const updatedPage = await Page.findByIdAndUpdate(
    pageId,
    pageData
  );

  // revalidate cache
  revalidatePath('/', 'layout');

  redirect('/');
}

export default updatePage