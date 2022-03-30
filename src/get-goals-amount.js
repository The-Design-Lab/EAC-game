import { formatter } from "./formatter";

export function GetGoalsAmount(player) {
  let goalTotal = 0;
  player.goals.forEach(
    (goal) => (goalTotal = goalTotal + parseInt(goal.price))
  );
  return <span>{formatter.format(goalTotal)}</span>;
}
