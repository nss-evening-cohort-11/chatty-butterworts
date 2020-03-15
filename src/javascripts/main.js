import 'bootstrap';
import '../styles/main.scss';
import displayMessage from './components/displayMessage';
import darkTheme from './components/darkTheme/darkTheme';

const init = () => {
  displayMessage.userMessageCardBuilder();
  $('body').on('click', '.delete-btn', displayMessage.deleteMessage);
  $(document).ready(() => {
    $(document).on('click', 'button#clear-chat', displayMessage.clearAllMessages);
  });
  $(document).ready(() => {
    $(document).on('click', ':submit', displayMessage.newMessageSetter);
  });
  darkTheme.turnDark();
};

init();
