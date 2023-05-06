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

## Firebase 설정

- `이메일/비밀번호` 설정 Authentication
- Realtime Database

## .env 파일 생성 (firebase SDK 설정)

- NEXT_PUBLIC_FB_API_KEY={apiKey}
- NEXT_PUBLIC_FB_AUTH_DOMAIN={authDomain}
- NEXT_PUBLIC_FB_DATABASE_URL={databaseURL}
- NEXT_PUBLIC_FB_PROJECT_ID={projectId}
- NEXT_PUBLIC_FB_STORAGE_BUCKTET={storageBucket}
- NEXT_PUBLIC_FB_MESSAGING_SENDER_ID={messagingSenderId}
- NEXT_PUBLIC_FB_APP_ID={appId}
- NEXT_PUBLIC_FB_MEASUREMENT_ID={measurementId}

## Technology Stack
- Nextron
- Next, React
- Typescript
- SCSS
- firebase
  - Authentication
  - Realtime Database

### 기능
- 회원가입
- 로그인
- 유저목록
- 1:1 채팅

<img width="300" alt="1번째" src="https://user-images.githubusercontent.com/69745441/236620872-5590fb70-422e-4622-97cc-b0a5372b1145.png"><img width="300" alt="2번째" src="https://user-images.githubusercontent.com/69745441/236620879-16d6e773-358f-45d7-9d4f-bcde6943a089.png"><img width="300" alt="3번째" src="https://user-images.githubusercontent.com/69745441/236620883-d34854c1-444b-4e3d-ae78-fd7c04c64639.png"><img width="400" alt="4번째" src="https://user-images.githubusercontent.com/69745441/236620884-0d251e50-9dc3-41cf-aa20-13a8834e2273.png"><img width="400" alt="5번째" src="https://user-images.githubusercontent.com/69745441/236620886-3cab6283-d254-4685-b338-efe0053f8ef1.png">
