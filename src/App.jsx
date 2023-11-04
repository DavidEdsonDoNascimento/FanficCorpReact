import { Post, Header, Sidebar } from "./components";
import styles from "./App.module.css";
import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
       <Sidebar />
        <main>
          <Post 
            author="Elena"
            content="Fui promovida a ser parte da familia da empresa no meu primeiro dia, pra quem trabalha em uma empresa como essa nunca fica cansada."
          />
        </main>
      </div>
    </div>
  );
}

export default App;
