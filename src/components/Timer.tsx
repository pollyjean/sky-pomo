import { useRecoilValue } from "recoil";
import { TimerWrap, NumberBox } from "../styles";
import { secondsState, minutesState } from "../atoms";

const S = { TimerWrap, NumberBox };

const Timer = () => {
  const minutes = useRecoilValue(minutesState);
  const seconds = useRecoilValue(secondsState);
  return (
    <S.TimerWrap>
      <S.NumberBox>{minutes.toString().padStart(2, "0")}</S.NumberBox>
      <span>:</span>
      <S.NumberBox>{seconds.toString().padStart(2, "0")}</S.NumberBox>
    </S.TimerWrap>
  );
};

export default Timer;
