import Link from 'next/link';
import styles from 'styles/login.module.scss';
import { useRouter } from 'next/router';
import { signUpWithEmail } from 'utils/firebaseAuth';

export default function Register() {
  const router = useRouter();

  const signUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    signUpWithEmail(email, password, displayName).then((res) => {
      if (res.status >= 200 && res.status <= 204) {
        alert('회원가입 완료');
        router.push('/login');
      } else {
        router.reload();
      }
    });
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formWrapper}>
        <span className={styles.logo}>Maum Chat</span>
        <span className={styles.title}>Register</span>
        <form onSubmit={signUp}>
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
