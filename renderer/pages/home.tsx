import React from 'react';
import styles from 'styles/home.module.scss';
import { Sidebar, ChatBox } from 'components';

function Home() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <ChatBox />
    </div>
  );
}

export default Home;
