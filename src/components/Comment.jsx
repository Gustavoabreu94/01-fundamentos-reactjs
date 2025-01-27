import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder src="https://github.com/Gustavoabreu94.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gustavo Abreu</strong>
              <time
                title="23 de janeiro as 8:20"
                dateTime="2024-01-23 08:20:20"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentario">
              {" "}
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir
            <span> 20 </span>
          </button>
        </footer>
      </div>
    </div>
  );
}
