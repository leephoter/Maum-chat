import styles from './InputMessage.module.scss';
import { sendChat } from 'utils/firebaseMessage';
import { currentRoomUidState } from 'store';
import { useRecoilValue } from 'recoil';
import { useState, useCallback } from 'react';

export default function InputMessage() {
  const [typingValue, setTypingValue] = useState('');

  const currentRoomUidValue = useRecoilValue(currentRoomUidState);
  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendChat(currentRoomUidValue, typingValue).then(() => {
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
