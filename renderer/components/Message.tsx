import styles from './Message.module.scss';
import { auth } from 'utils/config';

export default function Message({ messageInfo }) {
  const currentUser = auth.currentUser;
  return (
    <div
      className={`${styles.message} ${
        messageInfo.uid === currentUser.uid && styles.owner
      }`}
    >
      <div className={styles.messageContent}>
        <p>{messageInfo.message}</p>
      </div>
    </div>
  );
}
