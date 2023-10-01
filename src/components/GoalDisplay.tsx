import { useRecoilValue } from "recoil";
import { GoalWrap, Goal } from "../styles";
import { goalState, roundState } from "../atoms";

const S = { GoalWrap, Goal };

const GoalDisplay = () => {
  const round = useRecoilValue(roundState);
  const goal = useRecoilValue(goalState);
  return (
    <S.GoalWrap>
      <S.Goal>
        <span>{round}/4</span>
        <strong>Round</strong>
      </S.Goal>
      <S.Goal>
        <span>{goal}/12</span>
        <strong>GOAL</strong>
      </S.Goal>
    </S.GoalWrap>
  );
};

export default GoalDisplay;
