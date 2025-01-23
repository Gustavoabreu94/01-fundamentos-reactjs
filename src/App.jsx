import { Header } from "./components/Header";
import { Post } from "./components/Post.jsx";
import { Sidebar } from "./components/Sidebar.jsx";

import styles from "./App.module.css";
import "./global.css";

export default function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Gustavo Abreu" content="First messagem o app" />
        </main>
      </div>
    </div>
  );
}
