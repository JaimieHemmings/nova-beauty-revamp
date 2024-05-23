'use server'

import ConnectDB from '@/config/database'
import Message from '@/models/Message'
import { getSessionUser } from '@/utils/getSessionUser'

async function getUndreadMessageCount() {
  await ConnectDB()

  const sessionUser = await getSessionUser()

  if (!sessionUser.user.isAdmin) {
    return { error: 'You are not authorised' }
  }

  const { userId } = sessionUser;

  const count = await Message.countDocuments({
    read: false,
  })

  return { count }
}

export default getUndreadMessageCount