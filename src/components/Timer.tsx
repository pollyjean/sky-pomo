import { useRecoilValue } from "recoil";
import { TimerWrap, NumberBox } from "../styles";
import { hoursState, minutesState } from "../atoms";

const S = { TimerWrap, NumberBox };

const Timer = () => {
  const minutes = useRecoilValue(minutesState);
  const hours = useRecoilValue(hoursState);
  return (
    <S.TimerWrap>
      <S.NumberBox>{minutes.toString().padStart(2, "0")}</S.NumberBox>
      <span>:</span>
      <S.NumberBox>{hours.toString().padStart(2, "0")}</S.NumberBox>
    </S.TimerWrap>
  );
};

export default Timer;
