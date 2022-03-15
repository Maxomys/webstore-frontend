import Api from './Api';

const MESSAGE_URL = '/inquiry';
const ALL_MESSAGES_URL = MESSAGE_URL + '/all';

async function getAllMessages() {
  let messageArray = [];

  await Api.get(ALL_MESSAGES_URL)
    .then(response => {
      messageArray = response.data;
    }).catch(error => {
      console.log(error);
    });

    return messageArray;
}

async function deleteMessageById(messageId) {
  await Api.delete(MESSAGE_URL + '/' + messageId)
    .catch(error => {
      console.log(error);
    })
}


const MessageService = {
  getAllMessages,
  deleteMessageById
}

export default MessageService;
