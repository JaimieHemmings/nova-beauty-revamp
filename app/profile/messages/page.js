import ConnectDB from '@/config/database'
import Message from '@/models/Message'
import { convertToSerializeableObject } from '@/utils/convertToObject'
import { getSessionUser } from '@/utils/getSessionUser'
import MessageCard from '@/components/Messages'

const MessagesPage = async () => {

    await ConnectDB();
    const sessionUser = await getSessionUser();

    let messages = '';
    
    if(sessionUser.user.isAdmin) {
        const readMessages = await Message.find({read: true})
            .sort({ createdAt: -1})
            .populate('name')
            .lean();
    
        const unreadMessages = await Message.find({ read: false})
            .sort({ createdAt: -1 })
            .lean();
    
        messages = [...unreadMessages, ...readMessages].map((messageDoc) => {
            const message = convertToSerializeableObject(messageDoc)
            return message
        })
    }
    
    return (
        <section className='container mx-auto py-24 max-w-6xl'>
            <div className='text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 p-5'>
                
                <h1 className='text-3xl font-bold mb-4 text-white'>Your Messages</h1>

                <div className='space-y-4'>
                    {messages.length === 0 ? (
                    <p>You have no messages</p>
                    ) : (
                    messages.map((message) => (
                        <MessageCard key={message._id} message={message} />
                    ))
                    )}
                </div>
            </div>
            </section>
    )
}

export default MessagesPage