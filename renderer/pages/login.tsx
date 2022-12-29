import Link from 'next/link';
import styles from 'styles/login.module.scss';
import { signInWithEmail } from 'utils/firebaseAuth';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'utils/config';
import { setUsers } from 'utils/firebaseUsers';
import { useResetRecoilState } from 'recoil';
import { currentMessagesState, currentOpponentState } from 'store';

function Login() {
  const router = useRouter();
  const [err, setErr] = useState('');
  const setCurrentMessages = useResetRecoilState(currentMessagesState);
  const setCurrentOpponent = useResetRecoilState(currentOpponentState);
  const signIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    const result: any = await signInWithEmail(email, password);
    if (result._tokenResponse?.registered === true) {
      console.log(`Complete Login !!`);
      onAuthStateChanged(auth, (user) => {
        // TODO: token 저장
        setUsers();
        setCurrentMessages();
        setCurrentOpponent();
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
          <input type="email" placeholder="email" required />
          <input type="password" placeholder="password" required />
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
