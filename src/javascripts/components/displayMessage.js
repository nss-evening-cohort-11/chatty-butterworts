import moment from 'moment';
import utils from '../helpers/utils';
import messageData from '../helpers/Data/messageData';

const domArray = messageData.getDomArray;

const userMessageCardBuilder = () => {
  const users = messageData.getUserMessages();
  const userId = $("input[name='exampleRadios']:checked").val();
  let domString = '';
  users.forEach((user) => {
    if (userId === user.id) {
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
      domString += `<a href="#" id=${user.id} class="btn btn-danger delete-btn">Delete</a>`;
      domString += '</div>';
      domString += '</div>';
      domString += '</div>';
      domArray.push(domString);
      domString = domArray.toString();
    }
  });
  domString += '</div>';
  console.error(domArray, 'domArray');
  console.error(domString, 'domString');
  utils.printToDom('message-display', domString);
};

const deleteMessage = (e) => {
  const userId = e.target.id;
  const users = messageData.getUserMessages();
  const targetUser = users.findIndex((x) => x.id === userId);
  users.splice(targetUser, 1);
  userMessageCardBuilder();
};

const clearAllMessages = (e) => {
  if (e.target.id === 'clear-chat') {
    $('#message-display').empty();
  }
};

export default { userMessageCardBuilder, deleteMessage, clearAllMessages };
