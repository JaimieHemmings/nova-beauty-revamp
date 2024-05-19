'use client';
import { useState } from 'react';

const MessageCard = ({ message }) => {
    const [isRead, setIsRead] = useState(message.read)
  return (
    <div>
      {!isRead ? (
        <div>
          New
        </div>
      ) : null}
      <p>{message.body}</p>
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
    </div>
  )
}
export default MessageCard