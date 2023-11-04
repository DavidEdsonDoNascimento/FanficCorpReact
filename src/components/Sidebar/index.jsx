import styles from "./styles.module.css";
import { PencilLine } from "phosphor-react";
export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://plus.unsplash.com/premium_photo-1683309565422-77818a287060?auto=format&fit=crop&q=50&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className={styles.profile}>
        <img className={styles.avatar} src="/imagem-gerada-no-gpt.jpeg" />

        <strong>Ameenda Silva</strong>
        <span>Consultora de negócios</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};
