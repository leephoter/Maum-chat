import { atom } from 'recoil';

const currentRoomUidState = atom({
  key: 'currentRoomUid',
  default: '',
});

export default currentRoomUidState;
