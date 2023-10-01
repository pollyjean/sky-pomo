import { useRecoilState, useSetRecoilState } from "recoil";
import { motion } from "framer-motion";
import { PlayWrap, Button, Icon } from "../styles";
import { minutesState, playState, secondsState } from "../atoms";

const S = { PlayWrap, Button, Icon };

const Player = () => {
  const [play, setPlay] = useRecoilState(playState);
  const setMinutes = useSetRecoilState(minutesState);
  const setSeconds = useSetRecoilState(secondsState);
  const startTimer = () => {
    setPlay(true);
  };
  const pauseTimer = () => {
    setPlay(false);
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
