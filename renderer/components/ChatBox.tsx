import styles from './ChatBox.module.scss';
import Img from './Img';

export default function ChatBox() {
  return (
    <div className={styles.chat}>
      <div className={styles.chatInfo}>
        <span>{'Dummy nickname'}</span>
        <div className={styles.chatIcons}>
          <Img
            src={'/images/logo.png'}
            width={'24px'}
            objectFit={'contain'}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
