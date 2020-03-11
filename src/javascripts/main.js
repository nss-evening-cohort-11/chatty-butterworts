import 'bootstrap';
import '../styles/main.scss';
import messageData from './helpers/Data/messageData';


const init = () => {
  messageData.setUserMessages();
};


init();
