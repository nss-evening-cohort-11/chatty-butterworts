import 'bootstrap';
import '../styles/main.scss';
import displayMessage from './components/displayMessage';
import messageData from './helpers/Data/messageData';
import darkTheme from './components/darkTheme/darkTheme';
import largeText from './components/largeText';

console.error('hi');

const init = () => {
  displayMessage.userMessageCardBuilder();
  messageData.getUserMessages();
  $('body').on('click', '.delete-btn', displayMessage.deleteMessage);
  darkTheme.turnDark();
  // largeText.largeTextButtonEvent();
  $(document).ready(() => {
    $(document).on('click', 'button#large-text', largeText.bigText);
  });
  // largeText.makeFontLarge();
  // largeText.bigText();
};

init();
