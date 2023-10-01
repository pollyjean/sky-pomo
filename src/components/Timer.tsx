import { useRecoilValue } from "recoil";
import { TO_MILLISECONDS, TO_SECONDS } from "../commonConfig";
import { TimerWrap, NumberBox } from "../styles";
import { remainState } from "../atoms";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const S = { TimerWrap, NumberBox };

const timeChange = {
  initial: {
    scale: 0.7,
  },
  animate: {
    scale: 1,
  },
  exit: {
    scale: 0.7,
  },
};

const timeTransition = {
  type: "spring",
  duration: 0.15,
};

const Timer = () => {
  const remain = useRecoilValue(remainState);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    setMinutes(Math.floor(remain / TO_MILLISECONDS / TO_SECONDS));
    setSeconds(Math.floor(remain / TO_MILLISECONDS) % TO_SECONDS);
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
            transition={{ type: "spring" }}
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
