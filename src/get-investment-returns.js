import INVESTMENTS_VEHICLES from "./data/Investments";
import { choice5 } from "./data/investmentData";

/**
 *
 * @param investments
 * @returns {number}
 */
function getInvestmentReturns(investments) {
  let investmentReturns = 0;
  let investmentsUsed = [
    "notused",
    INVESTMENTS_VEHICLES.SP,
    INVESTMENTS_VEHICLES.CD,
    INVESTMENTS_VEHICLES.inveesgo,
    INVESTMENTS_VEHICLES.mutualFund,
  ];

  for (let [i, value] of investmentsUsed.entries()) {
    if (investments.includes(value)) investmentReturns += choice5[i][15];
  }
  console.log(investmentReturns);
  return investmentReturns;
}

export default getInvestmentReturns;
