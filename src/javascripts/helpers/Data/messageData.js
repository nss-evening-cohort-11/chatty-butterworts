const userMessages = [
  {
    id: 'user1',
    userName: 'Xavier',
    userImg: 'src/img/people_0001_casual-facial-hair-fine-looking-1680317.png',
    messageContent: 'Hello World!',
    timeStamp: 'October 16, 2019 8:00pm',

  },
  {
    id: 'user2',
    userName: 'Joanna',
    userImg: 'src/img/people_0000_adult-afro-blur-1181519.png',
    messageContent: 'Hey boy I see you looking at me',
    timeStamp: 'October 16, 2019 8:00pm',

  },

  {
    id: 'user3',
    userName: 'Gunter',
    userImg: 'src/img/people_0003_adult-casual-close-up-220453.png',
    messageContent: 'I can beat you with my little finger',
    timeStamp: 'October 16, 2019 8:00pm',

  },

  {
    id: 'user4',
    userName: 'sven',
    userImg: 'src/img/people_0004_adult-afro-hair-bracelet-2474311.png',
    messageContent: 'Yeah Girl I see you',
    timeStamp: 'October 16, 2019 8:00pm',

  },

  {
    id: 'user4',
    userName: 'Mackenzie',
    userImg: 'src/img/people_0002_beautiful-brunette-cute-774909.png',
    messageContent: 'Just call me the cat lady!!',
    timeStamp: 'October 16, 2019 8:00pm',

  },
];

// let selectedMessageContent = '';

// const setUserMessages = (messageContent) => {
//   selectedMessageContent = messageContent;
//   console.error('selectedMessageContent', selectedMessageContent);
// };

const getUserMessages = () => userMessages;


export default { getUserMessages };
