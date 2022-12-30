import { atom } from 'recoil';

const currentOpponentState = atom({
  key: 'currentOpponent',
  default: [],
});

export default currentOpponentState;
