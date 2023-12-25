import { Question } from 'tg-bot/questionnaire';

export const questions: Question[] = [
  {
    preMessage: {
      text: 'Hello, I am a questionnaire Telegram bot created by @St_Serge.\n\nPre messages are optional, but with these messages I will guide you through some of the features.',
    },
    type: 'string',
    text: 'What is your name?',
    responseKey: 'Name',
  },
  {
    preMessage: {
      text: 'There is no need to provide your personal email, this is just to show you that I can handle email validation.',
    },
    type: 'email',
    text: 'What is your email?',
    responseKey: 'Email',
  },
  {
    preMessage: {
      text: 'I can also handle numbers.',
    },
    type: 'number',
    text: 'How old are you?',
    responseKey: 'Age',
  },
  {
    type: 'boolean',
    preMessage: {
      text: 'Did you see one of my other projects?',
      link: {
        placeholder: 'Click here:',
        url: 'https://lookupdomain.biz/',
      },
    },
    text: 'Did you like it?',
    responseKey: 'Like Previous Project',
  },
];
