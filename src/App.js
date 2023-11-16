import "./styles.css";
import { items } from "./data/data";
import List from "./components/List";

export default function App() {
  return (
    <div className="App flex">
      <List items={items} />
    </div>
  );
}
