// ALL POSSIBLE INVESTMENT QUARTER DATA
// SHAPE: [retirement, S&P, CD, Insego, Mutual fund ]

// 1 years passes

import { formatter } from "../formatter";

export const choice1 = [
  [1500, 3000, 4500, 6000],
  [10158, 9891, 9795, 10595],
];
// 1 years passes
export const choice2 = [
  [8500, 10000, 11500, 13000],
  [20468, 20424, 20840, 21671],
  [2013, 2027, 2040, 2054],
];

// 1 years passes
export const choice3 = [
  [14500, 17000, 19500, 22000],
  [31982, 31966, 32766, 35017],
  [2079, 2103, 2128, 2153],
  [1355, 1833, 1843, 1544],
  [1996, 1986, 2003, 2019],
];

// 3 years pass
export const choice4 = [
  [
    23500, 25000, 26500, 28000, 29500, 31000, 32500, 34000, 35500, 37000, 38500,
    40000,
  ],
  [
    44481, 48898, 47160, 47323, 51080, 53381, 49793, 32024, 28340, 38326, 40803,
    45522,
  ],
  [2181, 2209, 2237, 2266, 2287, 2291, 2304, 2317, 2318, 2319, 2320, 2321],
  [2135, 2866, 3746, 2596, 1747, 1701, 1042, 610, 873, 1929, 1587, 1406],
  [2018, 1999, 2007, 2038, 2049, 2013, 1984, 1830, 1857, 1929, 1996, 2028],
];

// 4 years pass
export const choice5 = [
  [
    41500, 43000, 44500, 46000, 47500, 49000, 50500, 52000, 53500, 55000, 56500,
    58000, 59500, 61000, 62500, 64000,
  ],
  [
    46025, 44386, 45020, 50493, 53621, 27928, 49939, 51912, 57572, 53843, 59585,
    60041, 63838, 69304, 69331, 76848,
  ],
  [
    2328, 2336, 2343, 2351, 2355, 2360, 2365, 2370, 2374, 2377, 2381, 2385,
    2387, 2390, 2393, 2395,
  ],
  [
    1098, 1010, 974, 1632, 977, 880, 552, 527, 563, 333, 333, 222, 362, 562,
    483, 395,
  ],
  [
    2053, 2057, 2041, 2020, 2045, 2043, 2062, 2070, 2062, 2049, 2026, 2045,
    2047, 2049, 2045, 2041,
  ],
];

export const singleGraph1 = [
  [
    {
      name: "Q1",
      amount: formatter.format(10158),
    },
    {
      name: "Q2",
      amount: formatter.format(9891),
    },
    {
      name: "Q3",
      amount: formatter.format(9795),
    },
    {
      name: "Q4",
      amount: formatter.format(10595),
    },
  ],
  [
    {
      name: "Q1",
      amount: formatter.format(1500),
    },
    {
      name: "Q2",
      amount: formatter.format(3000),
    },
    {
      name: "Q3",
      amount: formatter.format(4500),
    },
    {
      name: "Q4",
      amount: formatter.format(6000),
    },
  ],
];
export const singleGraph2 = [
  [
    // SP500
    {
      name: "Q1",
      amount: formatter.format(20468),
    },
    {
      name: "Q2",
      amount: formatter.format(20424),
    },
    {
      name: "Q3",
      amount: formatter.format(20840),
    },
    {
      name: "Q4",
      amount: formatter.format(21671),
    },
  ],
  [
    //Retirement
    {
      name: "Q1",
      amount: formatter.format(8500),
    },
    {
      name: "Q2",
      amount: formatter.format(10000),
    },
    {
      name: "Q3",
      amount: formatter.format(11500),
    },
    {
      name: "Q4",
      amount: formatter.format(13000),
    },
  ],
  [
    //CD
    {
      name: "Q1",
      amount: formatter.format(2013),
    },
    {
      name: "Q2",
      amount: formatter.format(2027),
    },
    {
      name: "Q3",
      amount: formatter.format(2040),
    },
    {
      name: "Q4",
      amount: formatter.format(2054),
    },
  ],
];
export const singleGraph3 = [
  [
    // SP500
    {
      name: "Q1",
      amount: formatter.format(31982),
    },
    {
      name: "Q2",
      amount: formatter.format(31966),
    },
    {
      name: "Q3",
      amount: formatter.format(32766),
    },
    {
      name: "Q4",
      amount: formatter.format(35017),
    },
  ],
  [
    //Retirement
    {
      name: "Q1",
      amount: formatter.format(14500),
    },
    {
      name: "Q2",
      amount: formatter.format(17000),
    },
    {
      name: "Q3",
      amount: formatter.format(19500),
    },
    {
      name: "Q4",
      amount: formatter.format(22000),
    },
  ],
  [
    //CD
    {
      name: "Q1",
      amount: formatter.format(2079),
    },
    {
      name: "Q2",
      amount: formatter.format(2103),
    },
    {
      name: "Q3",
      amount: formatter.format(2128),
    },
    {
      name: "Q4",
      amount: formatter.format(2153),
    },
  ],
  [
    //invesgoo
    {
      name: "Q1",
      amount: formatter.format(1355),
    },
    {
      name: "Q2",
      amount: formatter.format(1833),
    },
    {
      name: "Q3",
      amount: formatter.format(1843),
    },
    {
      name: "Q4",
      amount: formatter.format(1544),
    },
  ],
  [
    //Mutual Fund
    {
      name: "Q1",
      amount: formatter.format(1996),
    },
    {
      name: "Q2",
      amount: formatter.format(1986),
    },
    {
      name: "Q3",
      amount: formatter.format(2003),
    },
    {
      name: "Q4",
      amount: formatter.format(2019),
    },
  ],
];
export const singleGraph4 = [
  [
    // SP500
    {
      name: "Q1",
      amount: formatter.format(44481),
    },
    {
      name: "Q2",
      amount: formatter.format(48898),
    },
    {
      name: "Q3",
      amount: formatter.format(47160),
    },
    {
      name: "Q4",
      amount: formatter.format(47323),
    },
    {
      name: "Q5",
      amount: formatter.format(51080),
    },
    {
      name: "Q6",
      amount: formatter.format(53381),
    },
    {
      name: "Q7",
      amount: formatter.format(49793),
    },
    {
      name: "Q8",
      amount: formatter.format(32024),
    },
    {
      name: "Q9",
      amount: formatter.format(28340),
    },
    {
      name: "Q10",
      amount: formatter.format(38326),
    },
    {
      name: "Q11",
      amount: formatter.format(40803),
    },
    {
      name: "Q12",
      amount: formatter.format(45522),
    },
  ],
  [
    // Retirement
    {
      name: "Q1",
      amount: formatter.format(23500),
    },
    {
      name: "Q2",
      amount: formatter.format(25000),
    },
    {
      name: "Q3",
      amount: formatter.format(26500),
    },
    {
      name: "Q4",
      amount: formatter.format(28000),
    },
    {
      name: "Q5",
      amount: formatter.format(29500),
    },
    {
      name: "Q6",
      amount: formatter.format(31000),
    },
    {
      name: "Q7",
      amount: formatter.format(32500),
    },
    {
      name: "Q8",
      amount: formatter.format(34000),
    },
    {
      name: "Q9",
      amount: formatter.format(35500),
    },
    {
      name: "Q10",
      amount: formatter.format(37000),
    },
    {
      name: "Q11",
      amount: formatter.format(38500),
    },
    {
      name: "Q12",
      amount: formatter.format(40000),
    },
  ],
  [
    // CD
    {
      name: "Q1",
      amount: formatter.format(2181),
    },
    {
      name: "Q2",
      amount: formatter.format(2209),
    },
    {
      name: "Q3",
      amount: formatter.format(2237),
    },
    {
      name: "Q4",
      amount: formatter.format(2266),
    },
    {
      name: "Q5",
      amount: formatter.format(2287),
    },
    {
      name: "Q6",
      amount: formatter.format(2291),
    },
    {
      name: "Q7",
      amount: formatter.format(2304),
    },
    {
      name: "Q8",
      amount: formatter.format(2317),
    },
    {
      name: "Q9",
      amount: formatter.format(2318),
    },
    {
      name: "Q10",
      amount: formatter.format(2319),
    },
    {
      name: "Q11",
      amount: formatter.format(2320),
    },
    {
      name: "Q12",
      amount: formatter.format(2321),
    },
  ],
  [
    // Inveesgo
    {
      name: "Q1",
      amount: formatter.format(2135),
    },
    {
      name: "Q2",
      amount: formatter.format(2866),
    },
    {
      name: "Q3",
      amount: formatter.format(3746),
    },
    {
      name: "Q4",
      amount: formatter.format(2596),
    },
    {
      name: "Q5",
      amount: formatter.format(1747),
    },
    {
      name: "Q6",
      amount: formatter.format(1701),
    },
    {
      name: "Q7",
      amount: formatter.format(1701),
    },
    {
      name: "Q8",
      amount: formatter.format(610),
    },
    {
      name: "Q9",
      amount: formatter.format(873),
    },
    {
      name: "Q10",
      amount: formatter.format(1929),
    },
    {
      name: "Q11",
      amount: formatter.format(1587),
    },
    {
      name: "Q12",
      amount: formatter.format(1406),
    },
  ],
  [
    //Mutual Fund
    {
      name: "Q1",
      amount: formatter.format(2018),
    },
    {
      name: "Q2",
      amount: formatter.format(1999),
    },
    {
      name: "Q3",
      amount: formatter.format(2007),
    },
    {
      name: "Q4",
      amount: formatter.format(2038),
    },
    {
      name: "Q5",
      amount: formatter.format(2049),
    },
    {
      name: "Q6",
      amount: formatter.format(2013),
    },
    {
      name: "Q7",
      amount: formatter.format(1984),
    },
    {
      name: "Q8",
      amount: formatter.format(1830),
    },
    {
      name: "Q9",
      amount: formatter.format(1857),
    },
    {
      name: "Q10",
      amount: formatter.format(1929),
    },
    {
      name: "Q11",
      amount: formatter.format(1996),
    },
    {
      name: "Q12",
      amount: formatter.format(2028),
    },
  ],
];
export const singleGraph5 = [
  [
    // SP500
    {
      name: "Q1",
      amount: formatter.format(46025),
    },
    {
      name: "Q2",
      amount: formatter.format(44386),
    },
    {
      name: "Q3",
      amount: formatter.format(45020),
    },
    {
      name: "Q4",
      amount: formatter.format(50493),
    },
    {
      name: "Q5",
      amount: formatter.format(53621),
    },
    {
      name: "Q6",
      amount: formatter.format(27928),
    },
    {
      name: "Q7",
      amount: formatter.format(49939),
    },
    {
      name: "Q8",
      amount: formatter.format(51912),
    },
    {
      name: "Q9",
      amount: formatter.format(57572),
    },
    {
      name: "Q10",
      amount: formatter.format(53843),
    },
    {
      name: "Q11",
      amount: formatter.format(59585),
    },
    {
      name: "Q12",
      amount: formatter.format(60041),
    },
    {
      name: "Q13",
      amount: formatter.format(63838),
    },
    {
      name: "Q14",
      amount: formatter.format(69304),
    },
    {
      name: "Q15",
      amount: formatter.format(69331),
    },
    {
      name: "Q16",
      amount: formatter.format(76848),
    },
  ],
  [
    // Retirement
    {
      name: "Q1",
      amount: formatter.format(41500),
    },
    {
      name: "Q2",
      amount: formatter.format(43000),
    },
    {
      name: "Q3",
      amount: formatter.format(44500),
    },
    {
      name: "Q4",
      amount: formatter.format(46000),
    },
    {
      name: "Q5",
      amount: formatter.format(47500),
    },
    {
      name: "Q6",
      amount: formatter.format(49000),
    },
    {
      name: "Q7",
      amount: formatter.format(50500),
    },
    {
      name: "Q8",
      amount: formatter.format(52000),
    },
    {
      name: "Q9",
      amount: formatter.format(53500),
    },
    {
      name: "Q10",
      amount: formatter.format(55000),
    },
    {
      name: "Q11",
      amount: formatter.format(56500),
    },
    {
      name: "Q12",
      amount: formatter.format(58000),
    },
    {
      name: "Q13",
      amount: formatter.format(59500),
    },
    {
      name: "Q14",
      amount: formatter.format(61000),
    },
    {
      name: "Q15",
      amount: formatter.format(62500),
    },
    {
      name: "Q16",
      amount: formatter.format(64000),
    },
  ],
  [
    // CD
    {
      name: "Q1",
      amount: formatter.format(2328),
    },
    {
      name: "Q2",
      amount: formatter.format(2336),
    },
    {
      name: "Q3",
      amount: formatter.format(2343),
    },
    {
      name: "Q4",
      amount: formatter.format(2351),
    },
    {
      name: "Q5",
      amount: formatter.format(2355),
    },
    {
      name: "Q6",
      amount: formatter.format(2360),
    },
    {
      name: "Q7",
      amount: formatter.format(2365),
    },
    {
      name: "Q8",
      amount: formatter.format(2370),
    },
    {
      name: "Q9",
      amount: formatter.format(2374),
    },
    {
      name: "Q10",
      amount: formatter.format(2377),
    },
    {
      name: "Q11",
      amount: formatter.format(2381),
    },
    {
      name: "Q12",
      amount: formatter.format(2385),
    },
    {
      name: "Q13",
      amount: formatter.format(2387),
    },
    {
      name: "Q14",
      amount: formatter.format(2390),
    },
    {
      name: "Q15",
      amount: formatter.format(2393),
    },
    {
      name: "Q16",
      amount: formatter.format(2395),
    },
  ],
  [
    // invesgoo
    {
      name: "Q1",
      amount: formatter.format(1098),
    },
    {
      name: "Q2",
      amount: formatter.format(1010),
    },
    {
      name: "Q3",
      amount: formatter.format(974),
    },
    {
      name: "Q4",
      amount: formatter.format(1632),
    },
    {
      name: "Q5",
      amount: formatter.format(977),
    },
    {
      name: "Q6",
      amount: formatter.format(880),
    },
    {
      name: "Q7",
      amount: formatter.format(552),
    },
    {
      name: "Q8",
      amount: formatter.format(527),
    },
    {
      name: "Q9",
      amount: formatter.format(563),
    },
    {
      name: "Q10",
      amount: formatter.format(333),
    },
    {
      name: "Q11",
      amount: formatter.format(333),
    },
    {
      name: "Q12",
      amount: formatter.format(222),
    },
    {
      name: "Q13",
      amount: formatter.format(362),
    },
    {
      name: "Q14",
      amount: formatter.format(562),
    },
    {
      name: "Q15",
      amount: formatter.format(483),
    },
    {
      name: "Q16",
      amount: formatter.format(395),
    },
  ],
  [
    // Mutual fund
    {
      name: "Q1",
      amount: formatter.format(2053),
    },
    {
      name: "Q2",
      amount: formatter.format(2057),
    },
    {
      name: "Q3",
      amount: formatter.format(2041),
    },
    {
      name: "Q4",
      amount: formatter.format(2020),
    },
    {
      name: "Q5",
      amount: formatter.format(2045),
    },
    {
      name: "Q6",
      amount: formatter.format(2043),
    },
    {
      name: "Q7",
      amount: formatter.format(2062),
    },
    {
      name: "Q8",
      amount: formatter.format(2070),
    },
    {
      name: "Q9",
      amount: formatter.format(2062),
    },
    {
      name: "Q10",
      amount: formatter.format(2049),
    },
    {
      name: "Q11",
      amount: formatter.format(2026),
    },
    {
      name: "Q12",
      amount: formatter.format(2045),
    },
    {
      name: "Q13",
      amount: formatter.format(2047),
    },
    {
      name: "Q14",
      amount: formatter.format(2049),
    },
    {
      name: "Q15",
      amount: formatter.format(2045),
    },
    {
      name: "Q16",
      amount: formatter.format(2041),
    },
  ],
];
