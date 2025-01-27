import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src="https://github.com/Gustavoabreu94.png" />
          <div className={styles.authorInfo}>
            <strong>Gustavo Abreu</strong>
            <span> Web Developer</span>
          </div>
        </div>
        <time title="23 de janeiro as 8:20" dateTime="2024-01-23 08:20:20">
          Publicado ha 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="#"> jane.design/doctorcare </a>
        </p>
        <p>
          <a href="#">#novoprojeto </a> <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixei seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentLisst}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
