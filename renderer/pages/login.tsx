import Link from 'next/link';
import styles from 'styles/login.module.scss';
import { signInWithEmail } from 'utils/firebaseAuth';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'utils/config';

function Login() {
  const router = useRouter();
  const [err, setErr] = useState('');

  const signIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    const result: any = await signInWithEmail(email, password);
    if (result._tokenResponse?.registered === true) {
      console.log(`Complete Login !!`);
      onAuthStateChanged(auth, (user) => {
        // token 저장
      });
      router.push('/home');
    } else {
      setErr(result);
    }
  };
  return (
    <div className={styles.formContainer}>
      <div className={styles.formWrapper}>
        <span className={styles.logo}>Maum Chat</span>
        <span className={styles.title}>Login</span>
        <form onSubmit={signIn}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
        </form>
        {err && <p>{err}</p>}
        <p>
          새 계정 만들기 <Link href="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
