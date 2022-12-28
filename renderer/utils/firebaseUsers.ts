import { ref, set, get } from 'firebase/database';
import { auth, realtimeDB } from './config';

export const setUsers = () => {
  const uid = auth.currentUser.uid;
  const myConnectionsRef = ref(realtimeDB, `users/${uid}/connected`);
  const myDisplayNameRef = ref(realtimeDB, `users/${uid}/displayName`);
  set(myConnectionsRef, true);
  set(myDisplayNameRef, auth.currentUser.displayName);
};

export const getUsers = async () => {
  const uid = auth.currentUser.uid;
  const connectedRef = ref(realtimeDB, 'users');
  try {
    const response = await get(connectedRef);
    const users = Object.keys(response.val());
    const result = [];
    users.forEach((user) => {
      if (user !== uid) {
        result.push({
          uid: user,
          displayName: response.val()[user].displayName,
        });
      }
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
