import { useRecoilState } from "recoil";
import { PlayWrap, Button, Icon } from "../styles";
import { playState } from "../atoms";
import { motion } from "framer-motion";

const S = { PlayWrap, Button, Icon };

const Player = () => {
  const [play, setPlay] = useRecoilState(playState);
  return (
    <S.PlayWrap>
      {play ? (
        <S.Button aria-label="Pause" as={motion.button} layoutId="player" onClick={() => setPlay(false)}>
          <S.Icon fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path
              fill="currentColor"
              d="M5.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75A.75.75 0 007.25 3h-1.5zM12.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75h-1.5z"
            ></path>
          </S.Icon>
        </S.Button>
      ) : (
        <S.Button aria-label="Play" as={motion.button} layoutId="player" onClick={() => setPlay(true)}>
          <S.Icon fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
          </S.Icon>
        </S.Button>
      )}
    </S.PlayWrap>
  );
};

export default Player;
