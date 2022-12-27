import Link from 'next/link';
import styles from 'styles/login.module.scss';

function Next() {
  return (
    <div className={styles.formContainer}>
      <div className={styles.formWrapper}>
        <span className={styles.logo}>Maum Chat</span>
        <span className={styles.title}>Login</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
        </form>
        <p>
          새 계정 만들기 <Link href="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Next;
