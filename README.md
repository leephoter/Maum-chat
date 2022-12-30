# Maum-chat

> 채팅 프로그램 데스크탑 앱

---

## 앱 실행 방법

1. $ `git clone https://github.com/leephoter/Maum-chat.git`
2. $ `cd Maum-chat`
3. `/renderer` 디렉토리에 `.env` 파일 생성
4. $ `npm install` (yarn 사용자 : `yarn install`)
5. $ `npm run build` (yarn 사용자 : `yarn build`)
6. `Maum-chat/dist` 내부 폴더 안에 `Maum Chat` 앱 실행

- mac : ...dist/mac 에 `Maum Chat` 앱 실행
- window : ...dis/win-unpacked 에 `Maum Chat` 앱 실행

| -    | version  |
| ---- | -------- |
| node | v16.13.2 |

## .env 파일 생성 (firebase SDK 설정)

- NEXT_PUBLIC_FB_API_KEY={apiKey}
- NEXT_PUBLIC_FB_AUTH_DOMAIN={authDomain}
- NEXT_PUBLIC_FB_DATABASE_URL={databaseURL}
- NEXT_PUBLIC_FB_PROJECT_ID={projectId}
- NEXT_PUBLIC_FB_STORAGE_BUCKTET={storageBucket}
- NEXT_PUBLIC_FB_MESSAGING_SENDER_ID={messagingSenderId}
- NEXT_PUBLIC_FB_APP_ID={appId}
- NEXT_PUBLIC_FB_MEASUREMENT_ID={measurementId}

### 회원가입

### 로그인

### 유저목록

### 1:1 채팅

### 그룹 채팅 (개발 중...)
