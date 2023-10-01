import { NumberPlateProps } from "../commonConfig";
import { NumberBox } from "../styles";
import { AnimatePresence, motion } from "framer-motion";

const S = { NumberBox };

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

const NumberPlate = ({ number }: NumberPlateProps) => {
  return (
    <S.NumberBox>
      <AnimatePresence>
        <motion.div
          key={number}
          variants={timeChange}
          initial="initial"
          animate="animate"
          transition={timeTransition}
          exit="exit"
        >
          {number.toString().padStart(2, "0")}
        </motion.div>
      </AnimatePresence>
    </S.NumberBox>
  );
};

export default NumberPlate;
