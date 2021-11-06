import React, { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";
import styled from "styled-components";

const MarketStyles = styled.div`
  h5 {
    font-weight: 700;
    margin-bottom: 10px;
  }

  span {
    font-weight: 700;
    margin-bottom: 5px;
    display: block;
  }
`;

const marketData = [
  {
    year: 2003,
    description:
      "The US economy grew at an annual rate of 2.86% in 2003, an increase from the preceding year. The S&P 500, which fell for three consecutive years in 2000-2002, rebounded in 2003 up 26.38% for the year. The Schiller PE Ratio increased from 22.9% at the beginning of the year to 26.64 at year end, indicating that stocks are in an extreme bubble.",
  },
  {
    year: 2005,
    description:
      "GDP grew 3.5% in 2005, a slight decrease from the preceding year due primarily to the impact of Hurricane Katrina and Hurricane Rita on the economy. The S&P 500 increased by 3% over the previous year. Inflation (as measured by CPI) increased 3.4%. Non-farm payrolls increased throughout the year, while seasonally-adjusted unemployment claims remained low and in line with the previous year. Consumer spending and industrial production increased compared to 2004. 10 year Treasury yields increased slightly throughout the year. PMI remained above 50 throughout the year, suggesting the manufacturing sector is expanding. Stocks remained in an extreme bubble as demonstrated by the Schiller PE Ratio, which ranged from 24.88 to 26.74 throughout the year. ",
  },
  {
    year: 2006,
    description:
      "Economic growth slowed slightly as GDP grew 2.86% in 2006, lower than the 3.5% in the previous year. Economic activity decreased primarily due to a decrease in residential construction activity. Annual housing starts, a leading indicator on the economy, fell for the first time in several years. Equity markets recorded sizable gains throughout the year with the S&P 500 increasing by 13.62%. Consumer spending and industrial production remained strong. Unemployment rates held steady and nonfarm payrolls increased. Inflation (as measuered by CPI) at 2.5% was only slightly above the Fed target level of 2.0%. 10 year Treasury yields peaked at 5.11% mid-year, but fell to 4.54% at year end, a bit below the recent historical average. PMI trended down throughout the year, but remained at optimistic levels. Stocks remained in an extreme bubble as demonstrated by the Schiller PE Ratio, which ranged from 24.70 to 27.28 throughout the year. ",
  },
  {
    year: 2009,
    description:
      "GDP growth remained negative and was down 2.5% in 2009 from the previous year. Quarterly GDP growth was -1.75% in Q1 2009, -3.06% in Q2 2009, -2.8% in Q3 2009 and 0.47% in Q4 2009 indicating continued recession through Q3 of 2009. Seasonally adjusted unemployment rates peaked at 5% mid-year, before falling to 3.8% at year-end. Nonfarm payrolls continued to decline throughout the year. Industrial production and consumer spending decreased relative to previous years. The stock market as indicated by the S&P 500 rebounded strongly from earlier lows, increasing 42%. Ten-year Treasury rates increased in 2009 to 3.59% although still lower than recent historical averages of 6.35%. Inflation (as measured by CPI) increased 2.7% throughout the year. PMI increased throughout the year and was above 50 in the second half of 2009 signalling some economic recovery. The Schiller PE Ratio fell ta a low of 13.32 in March of 2009, indicating stocks were fairly valued, before increasing to 20.32 at year-end.",
  },
  {
    year: 2013,
    description:
      "Economic growth continued at a relatively slow pace in 2013. GDP grew 1.842%. Stocks as measured by the S&P 500 increased by 29.6% to rise above the previous high in 2007. Ten year Treasury rates increased throughout the year to 2.9% which was still below the recent historical average of 6.35%. Unemployment rates fell slightly and nonfarm payrolls increased. Consumer spending and industrial production increased year over year. Inflation (as measured by CPI) was modest at 1.7%. PMI remained at optimistic levels throughout the year. The Schiller PE Ratio remained at levels indicating stocks are in a bubble throughout the year. ",
  },
];

function Market() {
  const { choices } = useContext(PlayerContext);

  const SwitchMarketNews = () => {
    return (
      <>
        <span>Year:{marketData[choices.length].year}</span>
        <p>{marketData[choices.length].description}</p>
      </>
    );
  };

  return (
    <MarketStyles>
      <h5>Market News</h5>
      <SwitchMarketNews />
    </MarketStyles>
  );
}

export default Market;
