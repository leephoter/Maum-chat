import styles from './Sidebar.module.scss';
import { userSignOut } from 'utils/firebaseAuth';
import { useRouter } from 'next/router';
import { getUsers } from 'utils/firebaseUsers';
import { useEffect, useState } from 'react';
import UserList from './UserList';
import { auth } from 'utils/config';

export default function Sidebar() {
  const router = useRouter();
  const logOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    userSignOut();
    router.push('/login');
  };

  const currentUser = auth.currentUser;

  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res);
    });
  }, []);

  return (
    <div className={styles.sidebar}>
      <div className={styles.navbar}>
        <span className={styles.logo}>Maum Chat</span>
        <div className={styles.user}>
          <span>{currentUser?.displayName}</span>
          <button onClick={logOut}>logout</button>
        </div>
      </div>
      <div>
        <UserList users={users} />
      </div>
    </div>
  );
}
