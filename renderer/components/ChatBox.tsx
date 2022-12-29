import styles from './ChatBox.module.scss';
import Message from './Message';
import InputMessage from './InputMessage';
import currentMessagesState from 'store/currentMessages';
import { useRecoilValue } from 'recoil';

export default function ChatBox() {
  const messages = useRecoilValue(currentMessagesState).slice(1);

  return (
    <div className={styles.chat}>
      <div className={styles.chatInfo}>
        <span>{`opponent nickname 님`}</span>
      </div>
      {/* TODO: 2 얘네가 안보이다가 보여야 됨 */}
      {messages.length ? (
        <>
          <div className={styles.messages}>
            {messages.map((messageInfo, index) => (
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
