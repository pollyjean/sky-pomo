import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import { TO_MILLISECONDS, TO_SECONDS } from "../commonConfig";
import { TimerWrap } from "../styles";
import { remainState } from "../atoms";
import { NumberPlate } from ".";

const S = { TimerWrap };

const Timer = () => {
  const remain = useRecoilValue(remainState);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const minuteCalculated = Math.floor(remain / TO_MILLISECONDS / TO_SECONDS);
    const secondCalculated = Math.floor((remain / TO_MILLISECONDS) % TO_SECONDS);
    minuteCalculated >= 0 && setMinutes(minuteCalculated);
    secondCalculated >= 0 && setSeconds(secondCalculated);
  }, [remain]);
  return (
    <S.TimerWrap>
      <NumberPlate number={minutes} />
      <span>:</span>
      <NumberPlate number={seconds} />
    </S.TimerWrap>
  );
};

export default Timer;
