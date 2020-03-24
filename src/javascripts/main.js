import 'bootstrap';
import '../styles/main.scss';
// eslint-disable-next-line import/no-named-as-default
import displayMessage from './components/displayMessage';
import darkTheme from './components/darkTheme/darkTheme';
import largeText from './components/largeText';
import bot from './components/chatbot';

const events = () => {
  $(document).ready(() => {
    $(document).on('click', 'button#dark-mode', darkTheme.darkMode);
  });
  $('body').on('click', '.delete-btn', displayMessage.deleteMessage);
  $(document).ready(() => {
    $(document).on('click', 'button#clear-chat', displayMessage.clearAllMessages);
  });
  $(document).ready(() => {
    $(document).on('click', ':submit', displayMessage.newMessageSetter);
    $(document).on('click', ':submit', bot.dumbChatBot);
  });
  $(document).ready(() => {
    $(document).on('click', 'button#large-text', largeText.bigText);
  });
};

const init = () => {
  displayMessage.userMessageCardBuilder();
  events();
};

init();
