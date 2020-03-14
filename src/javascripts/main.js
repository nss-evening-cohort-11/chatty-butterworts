import 'bootstrap';
import '../styles/main.scss';
import displayMessage from './components/displayMessage';
import messageData from './helpers/Data/messageData';
import darkTheme from './components/darkTheme/darkTheme';

console.error('hi');

const init = () => {
  // displayMessage.userMessageCardBuilder();
  // messageData.getUserMessages();
  $('body').on('click', '.delete-btn', displayMessage.deleteMessage);
  $(document).ready(() => {
    $(document).on('click', 'button#clear-chat', displayMessage.clearAllMessages);
  });
  // $(document).ready(() => {
  //   $(document).on('click', ':submit', messageData.getUserRadioValue);
  // });
  $(document).ready(() => {
    $(document).on('click', ':submit', messageData.setUserMessages);
    $(document).on('click', ':submit', displayMessage.userMessageCardBuilder);
  });
  darkTheme.turnDark();
};

init();
