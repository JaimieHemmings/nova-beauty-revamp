'use server';

import ConnectDB from '@/config/database'
import Pages from '@/models/Pages'
import { revalidatePath } from 'next/cache'

async function addPage(previousState, formData) {
  await ConnectDB()

  const newPage = new Pages({
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
  })

  await newPage.save()

  // revalidate cache
  revalidatePath('/', 'layout')

  return { submitted: true }
}

export default addPage