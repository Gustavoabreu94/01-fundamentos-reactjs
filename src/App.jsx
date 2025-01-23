import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar.jsx";
import "./global.css";
import { Post } from "./Post.jsx";
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
