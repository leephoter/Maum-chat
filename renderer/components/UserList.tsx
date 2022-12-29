import styles from './UserList.module.scss';

export default function UserList({ users }) {
  const noUsers = !users.length;

  const renderUsers = () =>
    users.map((user) => (
      <button className={styles.userChat} key={user.uid}>
        <div className={styles.userChatInfo}>
          <span>{user.displayName}</span>
          <p>{'유저 마지막 메시지'}</p>
        </div>
      </button>
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
