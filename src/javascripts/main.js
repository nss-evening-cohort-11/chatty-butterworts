import 'bootstrap';
import '../styles/main.scss';
import displayMessage from './components/displayMessage';
import messageData from './helpers/Data/messageData';
import darkTheme from './components/darkTheme/darkTheme';
import largeText from './components/largeText';

console.error('hi');

const init = () => {
  // displayMessage.userMessageCardBuilder();
  // messageData.getUserMessages();
  $(document).ready(() => {
    $(document).on('click', 'button#dark-mode', darkTheme.myFunction);
  });
  $('body').on('click', '.delete-btn', displayMessage.deleteMessage);
  $(document).ready(() => {
    $(document).on('click', 'button#clear-chat', displayMessage.clearAllMessages);
  });
  $(document).ready(() => {
    $(document).on('click', ':submit', messageData.setUserMessages);
    $(document).on('click', ':submit', displayMessage.userMessageCardBuilder);
  });
  darkTheme.turnDark();
  $(document).ready(() => {
    $(document).on('click', 'button#large-text', largeText.bigText);
  });

};

init();
