import styles from './ChatBox.module.scss';
import Message from './Message';
import InputMessage from './InputMessage';
import { currentMessagesState, currentOpponentState } from 'store';
import { useRecoilValue } from 'recoil';

export default function ChatBox() {
  const messages = useRecoilValue(currentMessagesState);
  const currentOpponent = useRecoilValue(currentOpponentState);

  const renderOpponent = () => {
    if (!currentOpponent.length) {
      return;
    }
    return (
      <>
        {currentOpponent.map((user) => (
          <span>{`${user}`}</span>
        ))}
        <span>{`님`}</span>
      </>
    );
  };

  return (
    <div className={styles.chat}>
      <div className={styles.chatInfo}>
        {renderOpponent()}
        <span>{'채팅방'}</span>
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
        <div className={styles.noMessages}>{'대화할 사용자를 선택하세요'}</div>
      )}
    </div>
  );
}
