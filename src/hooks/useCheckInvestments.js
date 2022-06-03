// noinspection JSUnusedAssignment

import usePlayer from "../hooks/usePlayer";
import INVESTMENTS_VEHICLES from "../data/Investments";

function useCheckInvestments() {
  const { salary, investments } = usePlayer();

  investments.filter((investment) => {
    return investment !== INVESTMENTS_VEHICLES.SP;
  });

  const addAnnualExpenditures = [
    investments.includes(INVESTMENTS_VEHICLES.retirement) ? -6000 : 0,
    investments.includes(INVESTMENTS_VEHICLES.SP) ? -salary * 0.1 : 0,
  ];
  return addAnnualExpenditures.reduce((total, expenditure) => {
    return (total += expenditure);
  }, 0);
}

export default useCheckInvestments;
