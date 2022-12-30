import styles from './UserList.module.scss';
import { useSetRecoilState } from 'recoil';
import { startChat, getChatInfos } from 'utils/firebaseMessage';
import {
  currentRoomUidState,
  currentOpponentState,
  currentMessagesState,
} from 'store';

export default function UserList({ users }) {
  const noUsers = !users.length;
  const setCurrentRoomUid = useSetRecoilState(currentRoomUidState);
  const setCurrentMessagesState = useSetRecoilState(currentMessagesState);
  const setCurrentOpponent = useSetRecoilState(currentOpponentState);
  const getMessages = async (opponent) => {
    startChat(opponent).then((res) => {
      const roomUid = res;
      setCurrentRoomUid(roomUid);
      getChatInfos(res).then((res) => {
        const opponent = Object.values(res.user);
        setCurrentOpponent(opponent);
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
          <p>{'님과 채팅하기'}</p>
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
