import Start from "./components/Start";
import Board from "./components/Board";

export default function Home() {
  return (
    <main>
      <div className="page">
      <div className="container">
        <Start />
        <Board />
      </div>
      </div>
    </main>
  );
}
