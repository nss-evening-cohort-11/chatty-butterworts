import utils from '../helpers/utils';

const userMessageCardBuilder = () => {
  const users = messageData.getUserMessages();
  let domString = '';
  domString += '<div class="card mb-12">';
  domString += '<div class="row no-gutters">';
  domString += '<div class="col-md-4">';
  domString += `<img src="${users.userImg}" class="card-img" style="max-width: 150px;" alt="Picture of me">`;
  domString += '</div>';
  domString += '<div class="col-md-8">';
  domString += '<div class="card-body">';
  domString += `<h5 class="card-title">${users.name}</h5>`;
  domString += `<p class="card-text">${users.messageContent}</p>`;
  domString += `<p class="card-text"><small class="text-muted">${users.timeStamp}</small></p>`
  domString += '</div>';
  domString += '<div>';
  domString += '<a href="#" class="btn btn-danger">Delete</a>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  utils.printToDom('message-display', domString);
};

export default { userMessageCardBuilder };
