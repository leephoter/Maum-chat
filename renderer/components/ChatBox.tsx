import styles from './ChatBox.module.scss';
import Message from './Message';
import InputMessage from './InputMessage';
import currentMessagesState from 'store/currentMessages';
import { useRecoilValue } from 'recoil';

export default function ChatBox() {
  const messages = useRecoilValue(currentMessagesState);

  return (
    <div className={styles.chat}>
      <div className={styles.chatInfo}>
        <span>{`opponent nickname 님`}</span>
      </div>
      {messages.length ? (
        <>
          <div className={styles.messages}>
            {[...messages].slice(1).map((messageInfo, index) => (
              <Message key={index} messageInfo={messageInfo} />
            ))}
          </div>
          <InputMessage />
        </>
      ) : (
        <div className={styles.noMessages}>{'No Messages'}</div>
      )}
    </div>
  );
}
