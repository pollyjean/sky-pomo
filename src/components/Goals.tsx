import { useRecoilValue } from "recoil";
import { GoalWrap, Goal } from "../styles";
import { goalState, roundState } from "../atoms";
import { GOAL_LIMITS, ROUND_LIMITS } from "../commonConfig";

const S = { GoalWrap, Goal };

const Goals = () => {
  const round = useRecoilValue(roundState);
  const goal = useRecoilValue(goalState);
  return (
    <S.GoalWrap>
      <S.Goal>
        <span>
          {round}/{ROUND_LIMITS}
        </span>
        <strong>Round</strong>
      </S.Goal>
      <S.Goal>
        <span>
          {goal}/{GOAL_LIMITS}
        </span>
        <strong>GOAL</strong>
      </S.Goal>
    </S.GoalWrap>
  );
};

export default Goals;
