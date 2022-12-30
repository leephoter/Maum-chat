import styles from './ChatBox.module.scss';
import Message from './Message';
import InputMessage from './InputMessage';
import { currentMessagesState, currentOpponentState } from 'store';
import { useRecoilValue } from 'recoil';
import { useRef, useEffect } from 'react';

export default function ChatBox() {
  const messages = useRecoilValue(currentMessagesState);
  const currentOpponent = useRecoilValue(currentOpponentState);
  const messageBox = useRef(null);
  const currentMessages = useRecoilValue(currentMessagesState);
  const renderOpponent = () => {
    if (!currentOpponent.length) {
      return;
    }
    return (
      <>
        {currentOpponent.map((user, index) => (
          <span key={`${user}${index}`}>{`${user}`}</span>
        ))}
        <span>{`님`}</span>
      </>
    );
  };

  useEffect(() => {
    if (messageBox.current) {
      messageBox.current.scrollTop = messageBox.current.scrollHeight;
    }
  }, [currentMessages]);

  return (
    <div className={styles.chat}>
      <div className={styles.chatInfo}>
        {renderOpponent()}
        <span>{'채팅방'}</span>
      </div>
      {messages.length ? (
        <>
          <div className={styles.messages} ref={messageBox}>
            {[...messages].slice(1).map((messageInfo, index) => (
              <Message key={index} messageInfo={messageInfo} />
            ))}
          </div>
          <InputMessage />
        </>
      ) : (
        <div className={styles.noMessages}>{'대화할 사용자를 선택하세요'}</div>
      )}
    </div>
  );
}
