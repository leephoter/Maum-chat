import Img from './Img';
import styles from './UserList.module.scss';

export default function UserList({ users }) {
  const noUsers = !users.length;

  const renderUsers = () =>
    users.map((user, index) => (
      <div className={styles.userChat} key={user.displayName + index}>
        <Img src={'/images/logo.png'} width={'50px'} alt="" />
        <div className={styles.userChatInfo}>
          <span>{user.displayName}</span>
          <p>{'유저 마지막 메시지'}</p>
        </div>
      </div>
    ));

  return (
    <>
      {noUsers ? (
        <div className={styles.noData}>{'No other Users'}</div>
      ) : (
        renderUsers()
      )}
    </>
  );
}
