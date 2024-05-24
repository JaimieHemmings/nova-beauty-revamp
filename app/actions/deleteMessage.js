'use server';

import ConnectDB from '@/config/database'
import Message from '@/models/Message'
import { getSessionUser } from '@/utils/getSessionUser'
import { revalidatePath } from 'next/cache'

async function deleteMessage(messageId) {
  await ConnectDB();

  const sessionUser = await getSessionUser()

  if (!sessionUser || !sessionUser.user) {
    throw new Error('User ID is required')
  }

  const { userId } = sessionUser;

  const message = await Message.findById(messageId)

  if (!message) throw new Error('Message Not Found')

  // Verify ownership
  if (!sessionUser.user.isAdmin) {
    throw new Error('Unauthorized')
  }

  // revalidate cache
  revalidatePath('/messages', 'page')
  await message.deleteOne()
  }

export default deleteMessage