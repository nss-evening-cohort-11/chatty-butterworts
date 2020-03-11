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
    domString += `<p class="card-text">${user.messageContent}</p>`;
    domString += `<span class=“time-right”>${moment().format('LLL')}</span>`;
    domString += '</div>';
    domString += '<div>';
    domString += `<a href="#" id=${user.id} class="btn btn-danger delete-btn">Delete</a>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  domString += '</div>';
  utils.printToDom('message-display', domString);
};

export default { userMessageCardBuilder };
