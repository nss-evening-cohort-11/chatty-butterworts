import 'bootstrap';
import '../styles/main.scss';
import displayMessage from './components/displayMessage';
import messageData from './helpers/Data/messageData';
import darkTheme from './components/darkTheme/darkTheme';

console.error('hi');

const init = () => {
  displayMessage.userMessageCardBuilder();
  messageData.getUserMessages();
  $(document).ready(() => {
    $(document).on('click', 'button#dark-mode', darkTheme.myFunction);
  });
};

init();
