'use server';

import ConnectDB from '@/config/database'
import Message from '@/models/Message'
import { revalidatePath } from 'next/cache'

async function addMessage(previousState, formData) {
  await ConnectDB()

  const newMessage = new Message({
    name: formData.get('name'),
    phone: formData.get('phone'),
    body: formData.get('message'),
  })

  await newMessage.save()

  // revalidate cache
  revalidatePath('/messages', 'page')

  return { submitted: true }
}

export default addMessage