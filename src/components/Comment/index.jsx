import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./styles.module.css";
import { Avatar } from "../Avatar";

export const Comment = () => {
  return (
    <div className={styles.comment}>
      <Avatar 
      src="https://github.com/maykbrito.png" 
      hasBorder={false}
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Talita Cristina</strong>
              <time title="11 de Maio às 08:13h" dateTime="2024-03-13 09:13:00">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar Comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Ameenda, parabéns!! 👏👏</p>
        </div>
        <footer>
            <button>
                <ThumbsUp />
                Aplaudir <span>20</span>
            </button>
        </footer>
      </div>
    </div>
  );
};
