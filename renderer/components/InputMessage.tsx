import styles from './InputMessage.module.scss';
import { sendChat } from 'utils/firebaseMessage';
import { currentRoomUidState, currentMessagesState } from 'store';
import { useRecoilValue, useRecoilState } from 'recoil';
import { useState, useCallback } from 'react';
import { auth } from 'utils/config';

export default function InputMessage() {
  const [typingValue, setTypingValue] = useState('');
  const [currentMessages, setCurrentMessages] = useRecoilState(
    currentMessagesState
  );
  const currentRoomUidValue = useRecoilValue(currentRoomUidState);
  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendChat(currentRoomUidValue, typingValue).then(() => {
      setCurrentMessages([
        ...currentMessages,
        {
          message: typingValue,
          displayName: auth.currentUser.displayName,
          uid: auth.currentUser.uid,
        },
      ]);
      setTypingValue('');
    });
  };

  const typingChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setTypingValue(e.currentTarget.value);
    },
    []
  );

  // TODO: 엔터키 누르면 전송되게
  return (
    <form className={styles.input} onSubmit={sendMessage}>
      <textarea
        placeholder="메시지 입력"
        value={typingValue}
        onChange={typingChange}
      />
      <button>Send</button>
    </form>
  );
}
