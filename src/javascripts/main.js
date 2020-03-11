import 'bootstrap';
import '../styles/main.scss';
import displayMessage from './components/displayMessage';
import messageData from './helpers/Data/messageData';

console.error('hi');

const init = () => {
  displayMessage.userMessageCardBuilder();
  messageData.getUserMessages();
  $('body').on('click', '.delete-btn', messageData.deleteMessage);
};

init();
