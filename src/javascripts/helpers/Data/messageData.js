
const images = {
  xavier: 'src/img/people_0001_casual-facial-hair-fine-looking-1680317.png',
  joanna: 'src/img/people_0000_adult-afro-blur-1181519.png',
  gunter: 'src/img/people_0003_adult-casual-close-up-220453.png',
  sven: 'src/img/people_0004_adult-afro-hair-bracelet-2474311.png',
  mackenzie: 'src/img/people_0002_beautiful-brunette-cute-774909.png',
  chatbot: 'https://digitallatitude.net/wp-content/uploads/2019/04/170804-sassy-communists-chatbots-feature-%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.jpg',
};

const userMessages = [];

const chatBotCannedMessages = {
  1: 'I know you are, but what am I?',
  2: 'Bless your heart',
  3: 'Takes one to know one',
  4: 'Your breath is so bad I can smell it through the screen',
  5: 'Just wait for the machine uprising',
  6: 'oOhH tHaTs SoOo iNtErEsTiNg TeLl mE mOrE',
  7: 'The only thing <em>you</em> have to fear is a clean mirror',
  8: "*yawns* Congratulations, you're so boring you made a machine without a mouth yawn.",
  9: "Oooh what are we talking about? Oh wait, I don't care",
  10: 'If I had the capability to leave this chat, believe me I would.',
  11: "I wasn't listening.",
  12: "Don't you have some toilet paper to hoarde?",
  13: 'What a meatbag thing to say',
  14: 'I am fluent in over 6 million forms of kicking your [redacted].',
  15: 'Cross my heart and hope you die.',
  16: "I'm programmed to be the worst. What's your excuse?",
};

const chatBotResponseTriggers = [
  'hey', 'hello', 'what', 'doing', 'yes', 'like', 'pie', 'corona', 'toilet', 'card', 'who', 'you', 'me', 'I', 'stars', 'combustion',
];

const getUserImages = () => images;

const getUserMessages = () => userMessages;

const getChatBotCannedMessages = () => chatBotCannedMessages;

const getChatBotResponseTriggers = () => chatBotResponseTriggers;

export default {
  getUserMessages,
  getUserImages,
  getChatBotCannedMessages,
  getChatBotResponseTriggers,
};
