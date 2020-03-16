import 'bootstrap';
import '../styles/main.scss';
import displayMessage from './components/displayMessage';
import darkTheme from './components/darkTheme/darkTheme';
import largeText from './components/largeText';

const init = () => {
  displayMessage.userMessageCardBuilder();
  $(document).ready(() => {
    $(document).on('click', 'button#dark-mode', darkTheme.myFunction);
  });
  $('body').on('click', '.delete-btn', displayMessage.deleteMessage);
  $(document).ready(() => {
    $(document).on('click', 'button#clear-chat', displayMessage.clearAllMessages);
  });
  $(document).ready(() => {
    $(document).on('click', ':submit', displayMessage.newMessageSetter);
  });
  $(document).ready(() => {
    $(document).on('click', 'button#large-text', largeText.bigText);
  });
};

init();
