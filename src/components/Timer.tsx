import { useRecoilValue } from "recoil";
import { TO_MILLISECONDS, TO_SECONDS } from "../commonConfig";
import { TimerWrap, NumberBox } from "../styles";
import { remainState } from "../atoms";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const S = { TimerWrap, NumberBox };

const timeChange = {
  initial: {
    opacity: 0.9,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0.9,
    scale: 0.8,
  },
};

const timeTransition = {
  type: "spring",
  duration: 0.8,
  damping: 8.5,
};

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
      <S.NumberBox>
        <AnimatePresence>
          <motion.div
            key={minutes}
            variants={timeChange}
            initial="initial"
            animate="animate"
            transition={timeTransition}
            exit="exit"
          >
            {minutes.toString().padStart(2, "0")}
          </motion.div>
        </AnimatePresence>
      </S.NumberBox>
      <span>:</span>
      <S.NumberBox>
        <AnimatePresence>
          <motion.div
            key={seconds}
            variants={timeChange}
            initial="initial"
            animate="animate"
            transition={timeTransition}
            exit="exit"
          >
            {seconds.toString().padStart(2, "0")}
          </motion.div>
        </AnimatePresence>
      </S.NumberBox>
    </S.TimerWrap>
  );
};

export default Timer;
