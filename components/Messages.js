'use client';
import { useState } from 'react';
import markMessageAsRead from '@/app/actions/markMessageAsRead';
import deleteMessage from '@/app/actions/deleteMessage';
import { useGlobalContext } from '@/context/GlobalContext';
import { getDisplayName } from 'next/dist/shared/lib/utils';

const MessageCard = ({ message }) => {
    const [isRead, setIsRead] = useState(message.read);
    const [isDeleted, setIsDeleted] = useState(false);

    const { setUnreadCount } = useGlobalContext();

    const handleReadClick = async () => {
      const read = await markMessageAsRead(message._id);
  
      setIsRead(read);
      setUnreadCount((prevCount) => (read ? prevCount - 1 : prevCount + 1));
    };
  
    const handleDeleteClick = async () => {
      await deleteMessage(message._id);
      setIsDeleted(true);
      setUnreadCount((prevCount) => (isRead ? prevCount : prevCount - 1));
    }
  
    if (isDeleted) {
      return <p>Deleted message</p>
    }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 text-gray">
      {!isRead ? (
        <div>
          <strong>New</strong>
        </div>
      ) : null}
      <ul>
        <li>
          <strong>Name:</strong> {message.name}
        </li>
        <li>
          <strong>Reply Phone:</strong>{' '}
          <a href={`tel:${message.phone}`}>
            {message.phone}
          </a>
        </li>
        <li>
          <strong>Received:</strong>{' '}
          {new Date(message.createdAt).toLocaleString()}
        </li>
      </ul>
      <p className="pt-3 pb-3">{message.body}</p>
      <button
        onClick={handleReadClick}
        className={`mt-4 mr-3 ${
          isRead ? 'bg-gray-300' : 'bg-blue-500 text-white'
        } py-1 px-3 rounded-md`}
      >
        {isRead ? 'Mark As New' : 'Mark As Read'}
      </button>
      <button
        onClick={handleDeleteClick}
        className='mt-4 bg-red-500 text-white py-1 px-3 rounded-md'
      >
        Delete
      </button>
    </div>
  )
}
export default MessageCard