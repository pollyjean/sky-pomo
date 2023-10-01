import { Main } from "./styles";
import { Timer, Player, Goals } from "./components";

const S = { Main };

const App = () => {
  return (
    <S.Main>
      <h1>Pomodoro</h1>
      <Timer />
      <Player />
      <Goals />
    </S.Main>
  );
};

export default App;
