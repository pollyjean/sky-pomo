import { Main } from "./styles";
import { Timer, Player, GoalDisplay } from "./components";

const S = { Main };

const App = () => {
  return (
    <S.Main>
      <h1>Pomodoro</h1>
      <Timer />
      <Player />
      <GoalDisplay />
    </S.Main>
  );
};

export default App;
