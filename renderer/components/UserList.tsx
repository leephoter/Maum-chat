import styles from './UserList.module.scss';
import { useSetRecoilState } from 'recoil';
import currentMessagesState from 'store/currentMessages';
import { startChat, getChatInfos } from 'utils/firebaseMessage';
import { currentRoomUidState } from 'store';

export default function UserList({ users }) {
  const noUsers = !users.length;
  const setCurrentRoomUid = useSetRecoilState(currentRoomUidState);
  const setCurrentMessagesState = useSetRecoilState(currentMessagesState);
  const getMessages = async (opponent) => {
    startChat(opponent).then((res) => {
      const roomUid = res;
      setCurrentRoomUid(roomUid);
      getChatInfos(res).then((res) => {
        setCurrentMessagesState(res.chat);
      });
    });
  };

  const renderUsers = () =>
    users.map((user) => (
      <button
        className={styles.userChat}
        key={user.uid}
        onClick={() => {
          getMessages(user.uid);
        }}
      >
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
