import { atom } from 'recoil';

const currentMessagesState = atom({
  key: 'currentMessages',
  default: [],
});

export default currentMessagesState;
