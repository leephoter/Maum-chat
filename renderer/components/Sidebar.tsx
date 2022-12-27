import Img from './Img';
import styles from './Sidebar.module.scss';
import { userSignOut } from 'utils/firebaseAuth';
import { useRouter } from 'next/router';

export default function Sidebar() {
  const router = useRouter();
  const logOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    userSignOut();
    router.push('./login');
  };
  return (
    <div className={styles.sidebar}>
      <div className={styles.navbar}>
        <span className={styles.logo}>Maum Chat</span>
        <div className={styles.user}>
          <span>{'Nickname~~'}</span>
          <button onClick={logOut}>logout</button>
        </div>
      </div>
      <div className={styles.chats}>
        {/* TODO: 유저 목록을 map 반환해야됨 */}
        <div className={styles.userChat}>
          <Img src={'/images/logo.png'} width={'50px'} alt="" />
          <div className={styles.userChatInfo}>
            <span>{'유저 유저 닉네임'}</span>
            <p>{'유저 마지막 메시지'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
