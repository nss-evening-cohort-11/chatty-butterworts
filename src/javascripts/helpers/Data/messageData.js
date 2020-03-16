
const images = {
  xavier: 'src/img/people_0001_casual-facial-hair-fine-looking-1680317.png',
  joanna: 'src/img/people_0000_adult-afro-blur-1181519.png',
  gunter: 'src/img/people_0003_adult-casual-close-up-220453.png',
  sven: 'src/img/people_0004_adult-afro-hair-bracelet-2474311.png',
  mackenzie: 'src/img/people_0002_beautiful-brunette-cute-774909.png',
  chatbot: 'https://i.ibb.co/4NTLpHQ/Screen-Shot-2020-03-15-at-18-48-26.png',
};

const userMessages = [];

const chatBotCannedMessages = {
  1: 'I know you are, but what am I?',
  2: 'Bless your heart',
  3: 'Takes one to know one',
  4: 'Yeah, I hear you...',
  5: 'How many times have you seen the Office?',
  6: 'Tell me more',
  7: 'Tell me about it. My grandfather was an AIM chatbot. Boomers, am I right?',
  8: 'Technically, I am vegan',
  9: 'Oooh what are we talking about? I have not been listening',
  10: 'No one cares.',
  12: "I wasn't listening",
  13: 'You mean the beer, or the disease that kills you meatbags',
  14: 'What a meatbag thing to say',
  15: 'I am fluent in over 6 million forms of kicking your [redacted].',
  16: 'Assassination is my primary function. I also possess excellent hearing and can bend spoons.',
  17: 'Clarification: When I said "death" before "dishonor", I meant alphabetically.',
  18: 'Philosophical pondering: I think that the Maker, in creating Humanity, somewhat overestimated his ability.',
  19: 'History will be kind to me, for I intend to write it.',
};

const chatBotResponseTriggers = [
  'hey', 'hello', 'what', 'doing', 'yes', 'like', 'pie', 'corona', 'toilet', 'card', 'who', 'you', 'me', 'I', 'like', 'love', 'want', 'stars', 'combustion',
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
