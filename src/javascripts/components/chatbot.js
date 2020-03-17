import data from '../helpers/Data/messageData';
import display from './displayMessage';

const dumbChatBot = () => {
  const messages = data.getUserMessages();
  const trigger = data.getChatBotResponseTriggers();
  const images = data.getUserImages();
  const responses = data.getChatBotCannedMessages();

  const randInt = Math.ceil(Math.random() * 16);

  const user = $("input[name='exampleRadios']:checked").val();
  const userId = messages.findIndex((x) => x.id === user);
  const prevMessage = messages[userId].messageContent[0];

  const newMessage = {
    id: 'insultbot',
    messageId: `message-${messages.length + 1}`,
    userName: 'INSULTBOT',
    userImg: images.chatbot,
    messageContent: [`${responses[randInt]}`],
  };
  if (trigger.includes(prevMessage)) {
    messages.push(newMessage);
    setTimeout(() => display.userMessageCardBuilder(), 1800);
  }
};

export default { dumbChatBot };
