import '../styles/messages.css';
import MessageService from '../services/MessageService';
import React, { useState, useEffect } from 'react';

function Messages() {  

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMessages();
  }, []);

  async function loadMessages() {
    setMessages(await MessageService.getAllMessages());
    setLoading(false);
  }
  
  function deleteMessageById(messageId) {
    setMessages(messages.filter(message => message.id !== messageId));
    MessageService.deleteMessageById(messageId);
  }

  if (loading) {
    return (
      <div className='container-main'>
        <img src='loading.svg' width='70' height='70'/>
      </div>
    )
  }

  return (
    <div className='container-main'>
      <p className='info'>{messages.length} wiadomości</p>
      
      {messages ? messages.map(message => (
        <div className='card card-message' key={message.id}>
          <p className='title'>{message.productName}</p>
          <p className='from'>{message.email}</p>
          <p className='created-at'>Utworzono: {message.createdOn}</p>
          <p className='content'>{message.messageBody}</p>
          <div onClick={() => deleteMessageById(message.id)} className='btn btn-delete'>Usuń</div>
        </div>
      )) : []}
    </div>
  );
}

export default Messages;
