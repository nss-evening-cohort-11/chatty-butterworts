import 'bootstrap';
import '../styles/main.scss';
import displayMessage from './components/displayMessage';
import messageData from './helpers/Data/messageData';
import darkTheme from './components/darkTheme/darkTheme';

console.error('hi');

const init = () => {
  displayMessage.userMessageCardBuilder();
  messageData.getUserMessages();
  darkTheme.turnDark();
};

init();
