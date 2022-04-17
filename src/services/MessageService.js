import Api from './Api';
import Constants from './Constants';

const MESSAGE_URL = Constants.MESSAGE_URL;
const ALL_MESSAGES_URL = MESSAGE_URL + '/all';

async function getAllMessages() {
  let messageArray = [];

  const res = await Api.get(ALL_MESSAGES_URL)
    .catch(error => {
      console.log(error);
    });

  messageArray = res.data;

  return messageArray;
}

async function deleteMessageById(messageId) {
  await Api.delete(MESSAGE_URL + '/' + messageId)
    .catch(error => {
      console.log(error);
    });
}


const MessageService = {
  getAllMessages,
  deleteMessageById
}

export default MessageService;
