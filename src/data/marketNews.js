import Tooltip from "../components/tooltip";

const marketNews = {
    2004: [
        <>
    The US economy grew at an annual rate of 2.86% in 2003, an increase from the preceding year.,
    
      The <Tooltip text={"S&P 500"} tooltipText={"S&P 500"} />, which fell for
      three consecutive years in 2000-2002, rebounded in 2003 up 26.38% for the
      year.
    </>,
    <>
      The <Tooltip tooltipText={"Shiller PE"} text={" Shiller PE"} /> Ratio
      increased from 22.9 at the beginning of the year to 26.64 at year end,
      indicating that <Tooltip text={"stocks"} tooltipText={"Stock"} /> are in
      an a bubble as this is well above the historical average or median levels
      of 15-16.
    </>,
  ],
  2005: [
    <>
      The US economy grew at an annual rate of 3.8% in 2004, an increase from
      the preceding year.
    </>,
    <>
      The stock market, as represented by the{" "}
      <Tooltip text={"S&P 500"} tooltipText={"S&P 500"} /> index increased by
      8.99%
    </>,
    <>
      The <Tooltip tooltipText={"PE Ratio"} text={"Schiller PE Ratio"} /> ranged
      from 25.17 to 27.66 throughout the year, indicating that{" "}
      <Tooltip text={"stocks"} tooltipText={"Stock"} /> are in a bubble as this
      is well above the historical average or median levels of 15-16.
    </>,
  ],
  2007: [
    <>
      Economic growth slowed slightly as{" "}
      <Tooltip tooltipText={"Gross Domestic Product (GDP)"} text={"GDP"} /> grew
      2.86% in 2006, lower than the 3.5% in the previous year.
    </>,
    "Annual housing starts, a main sign of health for a leading indicator on the economy, fell for the first time in several years.",
    <>
      Equity markets recorded sizable gains throughout the year with the{" "}
      <Tooltip text={"S&P 500"} tooltipText={"S&P 500"} /> increasing by 13.62%.
    </>,
    <>
      <Tooltip tooltipText={"Inflation"} text={"Inflation"} /> (as measured by{" "}
      <Tooltip text={"CPI"} tooltipText={"Consumer Price Index (CPI)"} />) at
      2.5% was only slightly above the{" "}
      <Tooltip tooltipText={"Fed Target Rate"} text={"Fed Target Level"} /> of
      2.0%.
    </>,
    <>
      10 year <Tooltip text={"Treasury"} tooltipText={"Treasury"} /> yields
      peaked at 5.11% mid-year, but fell to 4.54% at year end, a bit below the
      recent historical average
    </>,
    <>
      <Tooltip tooltipText={"Stock"} text={"Stock"} /> valuations remained in a
      bubble as demonstrated by the Shiller{" "}
      <Tooltip tooltipText={"PE Ratio"} text={"PE Ratio"} />, which ranged from
      24.70 to 27.28 throughout the year.This was well above the historical
      average or median levels of 15-16.
    </>,
  ],
  2009: [
    "Economic growth turned negative in 2008. The US economy grew at an annual rate of -0.137% as the world entered the Great Recession.",
    <>
      The <Tooltip text={"S&P 500"} tooltipText={"S&P 500"} /> fell by nearly
      40% throughout the year.
    </>,
    <>
      10 Year <Tooltip text={"Treasury"} tooltipText={"Treasury"} /> rates
      declined significantly, ending the year at 2.42% - below the recent
      historical average of 6.35%.
    </>,
    <>
      <Tooltip tooltipText={"Inflation"} text={"Inflation"} /> (as measured by{" "}
      <Tooltip text={"CPI"} tooltipText={"Consumer Price Index (CPI)"} />) was
      well below the 2% target at 0.1%.
    </>,
    <>
      At year-end, <Tooltip tooltipText={"Stock"} text={"stock"} /> valuations
      were at the historical average, as the Shiller{" "}
      <Tooltip tooltipText={"PE Ratio"} text={"PE Ratio"} /> fell from
      significant bubble levels during the year, down from 24.02 to 15.38
      throughout the year.
    </>,
  ],
  2014: [
    "Economic growth continued at a relatively slow pace in 2013.\n",
    <>
      The economy as indicated by{" "}
      <Tooltip tooltipText={"Gross Domestic Product (GDP)"} text={"GDP"} /> grew
      1.842%.
    </>,
    <>
      {" "}
      <Tooltip tooltipText={"Stock"} text={"Stocks"} /> as measured by the S&P
      500 increased by 29.6% to rise above the previous high in 2007. The S&P
      500 closed the year at $28.85.
    </>,
    <>
      10 Year <Tooltip text={"Treasury"} tooltipText={"Treasury"} /> r rates
      increased throughout the year to 2.9% which was still below the recent
      historical average of 6.35%.
    </>,
    <>
      <Tooltip tooltipText={"Inflation"} text={"Inflation"} /> (as measured by{" "}
      <Tooltip text={"CPI"} tooltipText={"Consumer Price Index (CPI)"} />) was
      modest at 1.7%.
    </>,
    <>
      The Shiller <Tooltip tooltipText={"PE Ratio"} text={"PE Ratio"} />{" "}
      remained at levels indicating stocks were in a bubble throughout the year.
    </>,
  ],
};

export default marketNews;
