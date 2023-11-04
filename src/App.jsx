import { Post, Header } from "./components";
import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <Post author="John" content="Hello" />
      <Post author="John" content="Hello" />
      <Post author="John" content="Hello" />
    </div>
  );
}

export default App;
