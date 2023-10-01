import { useRecoilState } from "recoil";
import { motion } from "framer-motion";
import { PlayWrap, Button, Icon } from "../styles";
import { goalState, playState, remainState, roundState } from "../atoms";
import { useRef } from "react";
import { GOAL_LIMITS, POMO_MILLISECONDS, ROUND_LIMITS, TO_MILLISECONDS } from "../commonConfig";

const S = { PlayWrap, Button, Icon };

const Player = () => {
  const [play, setPlay] = useRecoilState(playState);
  const [remain, setRemain] = useRecoilState(remainState);
  const [round, setRound] = useRecoilState(roundState);
  const [goal, setGoal] = useRecoilState(goalState);
  const milliSeconds = useRef(remain);
  const timerId = useRef<number | null>(null);

  const startTimer = () => {
    setRemain(milliSeconds.current);
    milliSeconds.current = remain;
    milliSeconds.current = milliSeconds.current - TO_MILLISECONDS;
    timerId.current = setInterval(() => {
      setRemain(milliSeconds.current);
      if (milliSeconds.current < 0) {
        pauseTimer();
        setRemain(POMO_MILLISECONDS);
        roundUp();
      }
      milliSeconds.current = milliSeconds.current - TO_MILLISECONDS;
    }, TO_MILLISECONDS);
    setPlay(true);
  };
  const pauseTimer = () => {
    clearInterval(timerId.current as number);
    setPlay(false);
  };
  const roundUp = () => {
    if (round === ROUND_LIMITS) {
      setRound(0);
      goalUp();
    } else {
      setRound((prev) => prev + 1);
    }
  };
  const goalUp = () => {
    if (goal === GOAL_LIMITS) {
      setGoal(GOAL_LIMITS);
    } else {
      setGoal((prev) => prev + 1);
    }
  };
  return (
    <S.PlayWrap>
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} transition={{ duration: 0.2 }}>
        {play ? (
          <S.Button aria-label="Pause" onClick={pauseTimer}>
            <S.Icon fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path
                fill="currentColor"
                d="M5.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75A.75.75 0 007.25 3h-1.5zM12.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75h-1.5z"
              ></path>
            </S.Icon>
          </S.Button>
        ) : (
          <S.Button aria-label="Play" onClick={startTimer}>
            <S.Icon fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
            </S.Icon>
          </S.Button>
        )}
      </motion.div>
    </S.PlayWrap>
  );
};

export default Player;
