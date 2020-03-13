const userMessages = [
  {
    id: 'xavier',
    userName: 'Xavier',
    userImg: 'src/img/people_0001_casual-facial-hair-fine-looking-1680317.png',
    messageContent: [],
    timeStamp: 'October 16, 2019 8:00pm',

  },
  {
    id: 'joanna',
    userName: 'Joanna',
    userImg: 'src/img/people_0000_adult-afro-blur-1181519.png',
    messageContent: [],
  },

  {
    id: 'gunter',
    userName: 'Gunter',
    userImg: 'src/img/people_0003_adult-casual-close-up-220453.png',
    messageContent: [],
  },

  {
    id: 'sven',
    userName: 'Sven',
    userImg: 'src/img/people_0004_adult-afro-hair-bracelet-2474311.png',
    messageContent: [],

  },

  {
    id: 'mackenzie',
    userName: 'Mackenzie',
    userImg: 'src/img/people_0002_beautiful-brunette-cute-774909.png',
    messageContent: [],
  },
];

const addMessageToUserArray = (userId, message) => {
  const userMessage = userMessages[userId].messageContent;
  $(document).ready(() => {
    userMessage.push(message);
  });
};

const setUserMessages = () => {
  const message = $('textarea#message-content').val();
  const userId = $("input[name='exampleRadios']:checked").val();
  console.error(userId);
  const targetUser = userMessages.findIndex((x) => x.id === userId);
  addMessageToUserArray(targetUser, message);
  console.error(userMessages[targetUser].messageContent);
};

const getUserMessages = () => userMessages;


export default { getUserMessages, setUserMessages };
