import Link from 'next/link';
import styles from 'styles/login.module.scss';

export default function Register() {
  return (
    <div className={styles.formContainer}>
      <div className={styles.formWrapper}>
        <span className={styles.logo}>Maum Chat</span>
        <span className={styles.title}>Register</span>
        <form>
          <input required type="text" placeholder="nickname" />
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          <button>Sign up</button>
        </form>
        <p>
          이미 계정이 있나요? <Link href="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
