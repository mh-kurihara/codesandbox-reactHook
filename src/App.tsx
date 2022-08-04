import "./styles.css";
import { UserCard } from "./components/UserCard";

const user = {
  id: 111,
  name: "あああ",
  address: "東京都",
  email: "xxx@aaa.com"
};
export default function App() {
  return (
    <div className="App">
      <UserCard user={user} />
    </div>
  );
}
