import { auth, realtimeDB } from './config';
import { ref, get, set } from 'firebase/database';

// 첫 채팅 전송
export const startChat = async (opponentUID) => {
  // 상대 uid 를 파라미터로 받음
  const uid = auth.currentUser.uid;
  const displayName = auth.currentUser.displayName;
  const myChatRoom = ref(realtimeDB, `usersChatRoom/${uid}`);
  // 나와 상대의 채팅방 id
  const myChatRoomWithOppoent = ref(
    realtimeDB,
    `usersChatRoom/${uid}/${opponentUID}`
  );
  // 상대와 나의 채팅방 id
  const opponentChatRoom = ref(
    realtimeDB,
    `usersChatRoom/${opponentUID}/${uid}`
  );

  // 상대 닉넴
  const oppenentNameRef = ref(realtimeDB, `users/${opponentUID}/displayName`);
  const oppenentName = await get(oppenentNameRef);
  let hasRoom = false;
  // 내 채팅방 목록
  const myList = await get(myChatRoom);
  // 상대랑 나의 채팅방이 있는지 판단
  for (let key in myList.val()) {
    if (key === opponentUID) {
      hasRoom = true;
      break;
    }
  }
  if (hasRoom) {
    // 이미 채팅방이 있으면
    const roomID = await get(myChatRoomWithOppoent);
    return roomID.val();
  } else {
    // 새로운 상대와 채팅이면
    const randomRoomID =
      Date.now().toString(36) + Math.random().toString(36).substr(2);
    const chatRoomRef = ref(realtimeDB, `oneOnOneChatRooms/${randomRoomID}`);
    set(myChatRoomWithOppoent, randomRoomID);
    set(opponentChatRoom, randomRoomID);

    const opponent = {};
    const me = {};
    opponent[opponentUID] = oppenentName.val();
    me[uid] = displayName;
    set(chatRoomRef, { users: [opponent, me], chat: ['chat start'] });
    return randomRoomID;
  }
};

export const getChatInfos = async (uid) => {
  let result = { user: '', chat: [] };
  const myUID = auth.currentUser.uid;
  const chatRoomRef = ref(realtimeDB, `oneOnOneChatRooms/${uid}`);
  const chatRoomInfo = await (await get(chatRoomRef)).val();

  result.chat = chatRoomInfo.chat;
  for (let user in chatRoomInfo.users) {
    if (Object.keys(chatRoomInfo.users[user])[0] !== myUID)
      result.user = chatRoomInfo.users[user];
  }
  return result;
};

export const sendChat = async (chatRoomUID, message) => {
  const uid = auth.currentUser.uid;
  const displayName = auth.currentUser.displayName;
  const chatMessageRef = ref(
    realtimeDB,
    `oneOnOneChatRooms/${chatRoomUID}/chat`
  );
  const chat = await get(chatMessageRef);
  set(chatMessageRef, [
    ...chat.val(),
    { message: message, uid: uid, displayName: displayName },
  ]);
};
