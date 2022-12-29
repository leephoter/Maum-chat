import styles from './InputMessage.module.scss';

export default function InputMessage() {
  return (
    <div className={styles.input}>
      <textarea placeholder="메시지 입력" />
      <button>Send</button>
    </div>
  );
}
