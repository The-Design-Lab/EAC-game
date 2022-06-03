import {
  choice1,
  choice2,
  choice3,
  choice4,
  choice5,
} from "../data/investmentData";

/**
 *
 * @param year
 * @param investments
 * @returns {number}
 */

function CalculateGraphReturns(year, investments) {
  let returns = 0;
  switch (year) {
    case 2004:
      returns = choice1[1][3];
      break;
    case 2005:
      if (investments.includes("S&P")) {
        returns += choice2[1][3];
      }
      break;
    case 2006:
      if (investments.includes("S&P")) {
        returns += choice3[1][3];
      }
      if (investments.includes("CD")) {
        returns += choice3[2][3];
      }
      break;
    case 2008:
      if (investments.includes("S&P")) {
        returns += choice4[1][11];
      }
      if (investments.includes("CD")) {
        returns += choice4[2][11];
      }
      if (investments.includes("Inveesgo")) {
        returns += choice4[3][11];
      }
      if (investments.includes("mutualFund")) {
        returns += choice4[4][11];
      }
      break;
    case 2013:
      if (investments.includes("S&P")) {
        returns += choice5[1][15];
      }
      if (investments.includes("CD")) {
        returns += choice5[2][15];
      }
      if (investments.includes("inveesgo")) {
        returns += choice5[3][15];
      }
      if (investments.includes("mutualFund")) {
        returns += choice5[4][15];
      }
      break;
    default:
      return null;
  }

  return returns;
}

export default CalculateGraphReturns;
