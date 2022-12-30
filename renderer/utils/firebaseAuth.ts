import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from 'utils/config';

export const signUpWithEmail = async (email, password, nickname) => {
  const response = await createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      updateProfile(auth.currentUser, {
        displayName: nickname,
      });
      return { status: 201 };
    })
    .catch((err) => {
      if (err.code === 'auth/email-already-in-use') {
        alert('이미 사용 중인 이메일입니다');
      } else if (err.code === 'auth/weak-password') {
        alert('비밀번호를 강화해주세요');
      }
      return err.code;
    });
  return response;
};

export const signInWithEmail = async (email, password) => {
  const response = await signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      // displayName, email, expiresIn, idToken, registered, refreshToken ...
      return res;
    })
    .catch((err) => {
      if (err.code === 'auth/user-not-found') {
        return 'check email !!';
      }
      if (err.code === 'auth/wrong-password') {
        return 'check password !!';
      }
      return err.code;
    });
  return response;
};

export const userSignOut = async () => {
  try {
    signOut(auth);
  } catch (error) {
    console.log(error);
  }
};
