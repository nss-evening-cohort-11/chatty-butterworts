import moment from 'moment';
import utils from '../helpers/utils';
import messageData from '../helpers/Data/messageData';


const userMessageCardBuilder = () => {
  const users = messageData.getUserMessages();
  let domString = '';
  users.forEach((user) => {
    domString += '<div class="card mb-12">';
    domString += '<div class="row no-gutters">';
    domString += '<div class="col-md-4">';
    domString += `<img src="${user.userImg}" class="card-img" style="max-width: 150px;" alt="Picture of me">`;
    domString += '</div>';
    domString += '<div class="col-md-8">';
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${user.userName}</h5>`;
    domString += `<p class="card-text">${user.messageContent[0]}</p>`;
    domString += `<span class=“time-right”>${moment().format('LLL')}</span>`;
    domString += '</div>';
    domString += '<div>';
    domString += `<a href="#" id=${user.messageId} class="btn btn-danger delete-btn">Delete</a>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  utils.printToDom('message-display', domString);
  $('#message-content').val('');
};
const dumbChatBot = () => {
  const messages = messageData.getUserMessages();
  const trigger = messageData.getChatBotResponseTriggers();
  const images = messageData.getUserImages();
  const responses = messageData.getChatBotCannedMessages();
  const randInt = Math.ceil(Math.random() * 16);
  const user = $("input[name='exampleRadios']:checked").val();
  console.error(user);
  const userId = messages.findIndex((x) => x.id === user);
  console.error(userId);
  const prevMessage = messages[userId].messageContent[0];
  console.error(prevMessage);
  const newMessage = {
    id: 'insultbot',
    messageId: `message-${messages.length + 1}`,
    userName: 'INSULTBOT',
    userImg: images.chatbot,
    messageContent: [`${responses[randInt]}`],
  };
  if (trigger.includes(prevMessage)) {
    messages.push(newMessage);
    setTimeout(() => userMessageCardBuilder(), 1500);
  }
};

const newMessageSetter = (e) => {
  e.preventDefault();
  const messages = messageData.getUserMessages();
  const images = messageData.getUserImages();
  const userId = $("input[name='exampleRadios']:checked").val();
  const newMessage = {
    id: userId,
    messageId: `message-${messages.length + 1}`,
    userName: `${userId.charAt(0).toUpperCase() + userId.slice(1)}`,
    userImg: images[userId],
    messageContent: [$('textarea#message-content').val()],
  };
  if ($('textarea#message-content').val() !== '') {
    messages.push(newMessage);
    userMessageCardBuilder();
  }
  $('#form-check').removeClass('.was-validated');
  $('#collapseOne').removeClass('show');
  dumbChatBot();
};

const deleteMessage = (e) => {
  const messageId = e.target.id;
  const users = messageData.getUserMessages();
  const targetMessage = users.findIndex((x) => x.id === messageId);
  users.splice(targetMessage, 1);
  userMessageCardBuilder();
};

const clearAllMessages = (e) => {
  const users = messageData.getUserMessages();
  if (e.target.id === 'clear-chat') {
    utils.printToDom('message-display', '');
    users.splice(0, users.length);
  }
  return users;
};
export default {
  userMessageCardBuilder,
  deleteMessage,
  clearAllMessages,
  newMessageSetter,
  dumbChatBot,
};
