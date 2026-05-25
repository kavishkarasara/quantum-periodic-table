// Generated enriched data
export const CATEGORIES = {
  "alkali-metal":       { label: "Alkali Metal",        color: "#ff4d6d", glow: "rgba(255,77,109,0.6)" },
  "alkaline-earth":     { label: "Alkaline Earth",       color: "#ff9f1c", glow: "rgba(255,159,28,0.6)" },
  "transition-metal":   { label: "Transition Metal",     color: "#4cc9f0", glow: "rgba(76,201,240,0.6)" },
  "post-transition":    { label: "Post-Transition Metal", color: "#90e0ef", glow: "rgba(144,224,239,0.5)" },
  "metalloid":          { label: "Metalloid",            color: "#a8dadc", glow: "rgba(168,218,220,0.5)" },
  "nonmetal":           { label: "Nonmetal",             color: "#b7e4c7", glow: "rgba(183,228,199,0.6)" },
  "halogen":            { label: "Halogen",              color: "#c77dff", glow: "rgba(199,125,255,0.6)" },
  "noble-gas":          { label: "Noble Gas",            color: "#f72585", glow: "rgba(247,37,133,0.65)" },
  "lanthanide":         { label: "Lanthanide",           color: "#ffd60a", glow: "rgba(255,214,10,0.6)" },
  "actinide":           { label: "Actinide",             color: "#f77f00", glow: "rgba(247,127,0,0.6)" },
};

export const ELEMENTS = [
  {
    "n": 1,
    "sym": "H",
    "name": "Hydrogen",
    "mass": "1.008",
    "cat": "nonmetal",
    "period": 1,
    "group": 1,
    "iso": [
      {
        "name": "¹H (Protium)",
        "mass": "1.00783",
        "abundance": "99.98%",
        "stable": true
      },
      {
        "name": "²H (Deuterium)",
        "mass": "2.01410",
        "abundance": "0.015%",
        "stable": true
      },
      {
        "name": "³H (Tritium)",
        "mass": "3.01605",
        "abundance": "trace",
        "stable": false,
        "halfLife": "12.32 yr"
      }
    ],
    "melt": 14,
    "boil": 20,
    "electronegativity": 2.2,
    "atomicRadius": 53,
    "electronConfiguration": "1s1"
  },
  {
    "n": 2,
    "sym": "He",
    "name": "Helium",
    "mass": "4.0026",
    "cat": "noble-gas",
    "period": 1,
    "group": 18,
    "iso": [
      {
        "name": "³He",
        "mass": "3.01603",
        "abundance": "0.0002%",
        "stable": true
      },
      {
        "name": "⁴He",
        "mass": "4.00260",
        "abundance": "99.9999%",
        "stable": true
      }
    ],
    "melt": 4,
    "boil": 5,
    "electronegativity": null,
    "atomicRadius": 52,
    "electronConfiguration": "[Core] ns2 np6"
  },
  {
    "n": 3,
    "sym": "Li",
    "name": "Lithium",
    "mass": "6.941",
    "cat": "alkali-metal",
    "period": 2,
    "group": 1,
    "iso": [
      {
        "name": "⁶Li",
        "mass": "6.01512",
        "abundance": "7.59%",
        "stable": true
      },
      {
        "name": "⁷Li",
        "mass": "7.01600",
        "abundance": "92.41%",
        "stable": true
      }
    ],
    "melt": 397,
    "boil": 994,
    "electronegativity": 0.9,
    "atomicRadius": 183,
    "electronConfiguration": "[Core] ns1"
  },
  {
    "n": 4,
    "sym": "Be",
    "name": "Beryllium",
    "mass": "9.0122",
    "cat": "alkaline-earth",
    "period": 2,
    "group": 2,
    "iso": [
      {
        "name": "⁹Be",
        "mass": "9.01218",
        "abundance": "100%",
        "stable": true
      },
      {
        "name": "¹⁰Be",
        "mass": "10.01354",
        "abundance": "trace",
        "stable": false,
        "halfLife": "1.39 Myr"
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d2"
  },
  {
    "n": 5,
    "sym": "B",
    "name": "Boron",
    "mass": "10.811",
    "cat": "metalloid",
    "period": 2,
    "group": 13,
    "iso": [
      {
        "name": "¹⁰B",
        "mass": "10.01294",
        "abundance": "19.9%",
        "stable": true
      },
      {
        "name": "¹¹B",
        "mass": "11.00931",
        "abundance": "80.1%",
        "stable": true
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d13"
  },
  {
    "n": 6,
    "sym": "C",
    "name": "Carbon",
    "mass": "12.011",
    "cat": "nonmetal",
    "period": 2,
    "group": 14,
    "iso": [
      {
        "name": "¹²C",
        "mass": "12.00000",
        "abundance": "98.89%",
        "stable": true
      },
      {
        "name": "¹³C",
        "mass": "13.00335",
        "abundance": "1.11%",
        "stable": true
      },
      {
        "name": "¹⁴C",
        "mass": "14.00324",
        "abundance": "trace",
        "stable": false,
        "halfLife": "5730 yr"
      }
    ],
    "melt": 3823,
    "boil": 4300,
    "electronegativity": 2.55,
    "atomicRadius": 67,
    "electronConfiguration": "[He] 2s2 2p2"
  },
  {
    "n": 7,
    "sym": "N",
    "name": "Nitrogen",
    "mass": "14.007",
    "cat": "nonmetal",
    "period": 2,
    "group": 15,
    "iso": [
      {
        "name": "¹⁴N",
        "mass": "14.00307",
        "abundance": "99.63%",
        "stable": true
      },
      {
        "name": "¹⁵N",
        "mass": "15.00011",
        "abundance": "0.37%",
        "stable": true
      }
    ],
    "melt": 320,
    "boil": 421,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d15"
  },
  {
    "n": 8,
    "sym": "O",
    "name": "Oxygen",
    "mass": "15.999",
    "cat": "nonmetal",
    "period": 2,
    "group": 16,
    "iso": [
      {
        "name": "¹⁶O",
        "mass": "15.99491",
        "abundance": "99.76%",
        "stable": true
      },
      {
        "name": "¹⁷O",
        "mass": "16.99913",
        "abundance": "0.04%",
        "stable": true
      },
      {
        "name": "¹⁸O",
        "mass": "17.99916",
        "abundance": "0.20%",
        "stable": true
      }
    ],
    "melt": 54,
    "boil": 90,
    "electronegativity": 3.44,
    "atomicRadius": 48,
    "electronConfiguration": "[He] 2s2 2p4"
  },
  {
    "n": 9,
    "sym": "F",
    "name": "Fluorine",
    "mass": "18.998",
    "cat": "halogen",
    "period": 2,
    "group": 17,
    "iso": [
      {
        "name": "¹⁹F",
        "mass": "18.99840",
        "abundance": "100%",
        "stable": true
      },
      {
        "name": "¹⁸F",
        "mass": "17.99902",
        "abundance": "synth",
        "stable": false,
        "halfLife": "109.77 min"
      }
    ],
    "melt": 45,
    "boil": 54,
    "electronegativity": 3.41,
    "atomicRadius": 69,
    "electronConfiguration": "[Rn] 7s2 5f14 6d17"
  },
  {
    "n": 10,
    "sym": "Ne",
    "name": "Neon",
    "mass": "20.180",
    "cat": "noble-gas",
    "period": 2,
    "group": 18,
    "iso": [
      {
        "name": "²⁰Ne",
        "mass": "19.99244",
        "abundance": "90.48%",
        "stable": true
      },
      {
        "name": "²¹Ne",
        "mass": "20.99385",
        "abundance": "0.27%",
        "stable": true
      },
      {
        "name": "²²Ne",
        "mass": "21.99139",
        "abundance": "9.25%",
        "stable": true
      }
    ],
    "melt": 20,
    "boil": 25,
    "electronegativity": null,
    "atomicRadius": 60,
    "electronConfiguration": "[Core] ns2 np6"
  },
  {
    "n": 11,
    "sym": "Na",
    "name": "Sodium",
    "mass": "22.990",
    "cat": "alkali-metal",
    "period": 3,
    "group": 1,
    "iso": [
      {
        "name": "²³Na",
        "mass": "22.98977",
        "abundance": "100%",
        "stable": true
      },
      {
        "name": "²²Na",
        "mass": "21.99444",
        "abundance": "synth",
        "stable": false,
        "halfLife": "2.60 yr"
      }
    ],
    "melt": 389,
    "boil": 978,
    "electronegativity": 0.9,
    "atomicRadius": 191,
    "electronConfiguration": "[Core] ns1"
  },
  {
    "n": 12,
    "sym": "Mg",
    "name": "Magnesium",
    "mass": "24.305",
    "cat": "alkaline-earth",
    "period": 3,
    "group": 2,
    "iso": [
      {
        "name": "²⁴Mg",
        "mass": "23.98504",
        "abundance": "78.99%",
        "stable": true
      },
      {
        "name": "²⁵Mg",
        "mass": "24.98584",
        "abundance": "10.00%",
        "stable": true
      },
      {
        "name": "²⁶Mg",
        "mass": "25.98259",
        "abundance": "11.01%",
        "stable": true
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d2"
  },
  {
    "n": 13,
    "sym": "Al",
    "name": "Aluminium",
    "mass": "26.982",
    "cat": "post-transition",
    "period": 3,
    "group": 13,
    "iso": [
      {
        "name": "²⁷Al",
        "mass": "26.98154",
        "abundance": "100%",
        "stable": true
      },
      {
        "name": "²⁶Al",
        "mass": "25.98689",
        "abundance": "trace",
        "stable": false,
        "halfLife": "717 kyr"
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d13"
  },
  {
    "n": 14,
    "sym": "Si",
    "name": "Silicon",
    "mass": "28.086",
    "cat": "metalloid",
    "period": 3,
    "group": 14,
    "iso": [
      {
        "name": "²⁸Si",
        "mass": "27.97693",
        "abundance": "92.23%",
        "stable": true
      },
      {
        "name": "²⁹Si",
        "mass": "28.97649",
        "abundance": "4.67%",
        "stable": true
      },
      {
        "name": "³⁰Si",
        "mass": "29.97377",
        "abundance": "3.10%",
        "stable": true
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d14"
  },
  {
    "n": 15,
    "sym": "P",
    "name": "Phosphorus",
    "mass": "30.974",
    "cat": "nonmetal",
    "period": 3,
    "group": 15,
    "iso": [
      {
        "name": "³¹P",
        "mass": "30.97376",
        "abundance": "100%",
        "stable": true
      },
      {
        "name": "³²P",
        "mass": "31.97391",
        "abundance": "synth",
        "stable": false,
        "halfLife": "14.26 d"
      }
    ],
    "melt": 370,
    "boil": 314,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d15"
  },
  {
    "n": 16,
    "sym": "S",
    "name": "Sulfur",
    "mass": "32.065",
    "cat": "nonmetal",
    "period": 3,
    "group": 16,
    "iso": [
      {
        "name": "³²S",
        "mass": "31.97207",
        "abundance": "94.99%",
        "stable": true
      },
      {
        "name": "³³S",
        "mass": "32.97146",
        "abundance": "0.75%",
        "stable": true
      },
      {
        "name": "³⁴S",
        "mass": "33.96787",
        "abundance": "4.25%",
        "stable": true
      },
      {
        "name": "³⁶S",
        "mass": "35.96708",
        "abundance": "0.01%",
        "stable": true
      }
    ],
    "melt": 373,
    "boil": 361,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d16"
  },
  {
    "n": 17,
    "sym": "Cl",
    "name": "Chlorine",
    "mass": "35.453",
    "cat": "halogen",
    "period": 3,
    "group": 17,
    "iso": [
      {
        "name": "³⁵Cl",
        "mass": "34.96885",
        "abundance": "75.77%",
        "stable": true
      },
      {
        "name": "³⁷Cl",
        "mass": "36.96590",
        "abundance": "24.23%",
        "stable": true
      }
    ],
    "melt": 85,
    "boil": 102,
    "electronegativity": 3.33,
    "atomicRadius": 77,
    "electronConfiguration": "[Rn] 7s2 5f14 6d17"
  },
  {
    "n": 18,
    "sym": "Ar",
    "name": "Argon",
    "mass": "39.948",
    "cat": "noble-gas",
    "period": 3,
    "group": 18,
    "iso": [
      {
        "name": "³⁶Ar",
        "mass": "35.96755",
        "abundance": "0.34%",
        "stable": true
      },
      {
        "name": "³⁸Ar",
        "mass": "37.96273",
        "abundance": "0.06%",
        "stable": true
      },
      {
        "name": "⁴⁰Ar",
        "mass": "39.96238",
        "abundance": "99.60%",
        "stable": true
      }
    ],
    "melt": 36,
    "boil": 45,
    "electronegativity": null,
    "atomicRadius": 68,
    "electronConfiguration": "[Core] ns2 np6"
  },
  {
    "n": 19,
    "sym": "K",
    "name": "Potassium",
    "mass": "39.098",
    "cat": "alkali-metal",
    "period": 4,
    "group": 1,
    "iso": [
      {
        "name": "³⁹K",
        "mass": "38.96371",
        "abundance": "93.26%",
        "stable": true
      },
      {
        "name": "⁴⁰K",
        "mass": "39.96400",
        "abundance": "0.01%",
        "stable": false,
        "halfLife": "1.25 Gyr"
      },
      {
        "name": "⁴¹K",
        "mass": "40.96183",
        "abundance": "6.73%",
        "stable": true
      }
    ],
    "melt": 381,
    "boil": 962,
    "electronegativity": 0.9,
    "atomicRadius": 199,
    "electronConfiguration": "[Core] ns1"
  },
  {
    "n": 20,
    "sym": "Ca",
    "name": "Calcium",
    "mass": "40.078",
    "cat": "alkaline-earth",
    "period": 4,
    "group": 2,
    "iso": [
      {
        "name": "⁴⁰Ca",
        "mass": "39.96259",
        "abundance": "96.94%",
        "stable": true
      },
      {
        "name": "⁴²Ca",
        "mass": "41.95862",
        "abundance": "0.65%",
        "stable": true
      },
      {
        "name": "⁴⁴Ca",
        "mass": "43.95548",
        "abundance": "2.09%",
        "stable": true
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d2"
  },
  {
    "n": 21,
    "sym": "Sc",
    "name": "Scandium",
    "mass": "44.956",
    "cat": "transition-metal",
    "period": 4,
    "group": 3,
    "iso": [
      {
        "name": "⁴⁵Sc",
        "mass": "44.95591",
        "abundance": "100%",
        "stable": true
      },
      {
        "name": "⁴⁶Sc",
        "mass": "45.95517",
        "abundance": "synth",
        "stable": false,
        "halfLife": "83.79 d"
      }
    ],
    "melt": 1562,
    "boil": 3393,
    "electronegativity": 1.81,
    "atomicRadius": 140,
    "electronConfiguration": "[Core] ndX ns2"
  },
  {
    "n": 22,
    "sym": "Ti",
    "name": "Titanium",
    "mass": "47.867",
    "cat": "transition-metal",
    "period": 4,
    "group": 4,
    "iso": [
      {
        "name": "⁴⁶Ti",
        "mass": "45.95263",
        "abundance": "8.25%",
        "stable": true
      },
      {
        "name": "⁴⁸Ti",
        "mass": "47.94795",
        "abundance": "73.72%",
        "stable": true
      },
      {
        "name": "⁵⁰Ti",
        "mass": "49.94479",
        "abundance": "5.18%",
        "stable": true
      }
    ],
    "melt": 1698,
    "boil": 3004,
    "electronegativity": 2.05,
    "atomicRadius": 140,
    "electronConfiguration": "[Core] ndX ns2"
  },
  {
    "n": 23,
    "sym": "V",
    "name": "Vanadium",
    "mass": "50.942",
    "cat": "transition-metal",
    "period": 4,
    "group": 5,
    "iso": [
      {
        "name": "⁵⁰V",
        "mass": "49.94716",
        "abundance": "0.25%",
        "stable": false,
        "halfLife": "≳150 Eyr"
      },
      {
        "name": "⁵¹V",
        "mass": "50.94396",
        "abundance": "99.75%",
        "stable": true
      }
    ],
    "melt": 1732,
    "boil": 3071,
    "electronegativity": 2.07,
    "atomicRadius": 140,
    "electronConfiguration": "[Core] ndX ns2"
  },
  {
    "n": 24,
    "sym": "Cr",
    "name": "Chromium",
    "mass": "51.996",
    "cat": "transition-metal",
    "period": 4,
    "group": 6,
    "iso": [
      {
        "name": "⁵⁰Cr",
        "mass": "49.94604",
        "abundance": "4.35%",
        "stable": true
      },
      {
        "name": "⁵²Cr",
        "mass": "51.94051",
        "abundance": "83.79%",
        "stable": true
      },
      {
        "name": "⁵³Cr",
        "mass": "52.94065",
        "abundance": "9.50%",
        "stable": true
      },
      {
        "name": "⁵⁴Cr",
        "mass": "53.93888",
        "abundance": "2.36%",
        "stable": true
      }
    ],
    "melt": 1554,
    "boil": 3382,
    "electronegativity": 1.77,
    "atomicRadius": 140,
    "electronConfiguration": "[Core] ndX ns2"
  },
  {
    "n": 25,
    "sym": "Mn",
    "name": "Manganese",
    "mass": "54.938",
    "cat": "transition-metal",
    "period": 4,
    "group": 7,
    "iso": [
      {
        "name": "⁵⁵Mn",
        "mass": "54.93805",
        "abundance": "100%",
        "stable": true
      },
      {
        "name": "⁵⁴Mn",
        "mass": "53.94036",
        "abundance": "synth",
        "stable": false,
        "halfLife": "312.2 d"
      }
    ],
    "melt": 2191,
    "boil": 3732,
    "electronegativity": 1.51,
    "atomicRadius": 140,
    "electronConfiguration": "[Core] ndX ns2"
  },
  {
    "n": 26,
    "sym": "Fe",
    "name": "Iron",
    "mass": "55.845",
    "cat": "transition-metal",
    "period": 4,
    "group": 8,
    "iso": [
      {
        "name": "⁵⁴Fe",
        "mass": "53.93961",
        "abundance": "5.85%",
        "stable": true
      },
      {
        "name": "⁵⁶Fe",
        "mass": "55.93494",
        "abundance": "91.75%",
        "stable": true
      },
      {
        "name": "⁵⁷Fe",
        "mass": "56.93540",
        "abundance": "2.12%",
        "stable": true
      },
      {
        "name": "⁵⁸Fe",
        "mass": "57.93328",
        "abundance": "0.28%",
        "stable": true
      }
    ],
    "melt": 1811,
    "boil": 3134,
    "electronegativity": 1.83,
    "atomicRadius": 156,
    "electronConfiguration": "[Ar] 3d6 4s2"
  },
  {
    "n": 27,
    "sym": "Co",
    "name": "Cobalt",
    "mass": "58.933",
    "cat": "transition-metal",
    "period": 4,
    "group": 9,
    "iso": [
      {
        "name": "⁵⁹Co",
        "mass": "58.93320",
        "abundance": "100%",
        "stable": true
      },
      {
        "name": "⁶⁰Co",
        "mass": "59.93382",
        "abundance": "synth",
        "stable": false,
        "halfLife": "5.27 yr"
      }
    ],
    "melt": 1785,
    "boil": 3015,
    "electronegativity": 1.52,
    "atomicRadius": 140,
    "electronConfiguration": "[Core] ndX ns2"
  },
  {
    "n": 28,
    "sym": "Ni",
    "name": "Nickel",
    "mass": "58.693",
    "cat": "transition-metal",
    "period": 4,
    "group": 10,
    "iso": [
      {
        "name": "⁵⁸Ni",
        "mass": "57.93535",
        "abundance": "68.08%",
        "stable": true
      },
      {
        "name": "⁶⁰Ni",
        "mass": "59.93079",
        "abundance": "26.22%",
        "stable": true
      },
      {
        "name": "⁶²Ni",
        "mass": "61.92835",
        "abundance": "3.63%",
        "stable": true
      }
    ],
    "melt": 2377,
    "boil": 3290,
    "electronegativity": 2.4,
    "atomicRadius": 140,
    "electronConfiguration": "[Core] ndX ns2"
  },
  {
    "n": 29,
    "sym": "Cu",
    "name": "Copper",
    "mass": "63.546",
    "cat": "transition-metal",
    "period": 4,
    "group": 11,
    "iso": [
      {
        "name": "⁶³Cu",
        "mass": "62.92960",
        "abundance": "69.17%",
        "stable": true
      },
      {
        "name": "⁶⁵Cu",
        "mass": "64.92779",
        "abundance": "30.83%",
        "stable": true
      }
    ],
    "melt": 2469,
    "boil": 3575,
    "electronegativity": 1.79,
    "atomicRadius": 140,
    "electronConfiguration": "[Core] ndX ns2"
  },
  {
    "n": 30,
    "sym": "Zn",
    "name": "Zinc",
    "mass": "65.38",
    "cat": "transition-metal",
    "period": 4,
    "group": 12,
    "iso": [
      {
        "name": "⁶⁴Zn",
        "mass": "63.92914",
        "abundance": "48.6%",
        "stable": true
      },
      {
        "name": "⁶⁶Zn",
        "mass": "65.92603",
        "abundance": "27.9%",
        "stable": true
      },
      {
        "name": "⁶⁸Zn",
        "mass": "67.92484",
        "abundance": "18.8%",
        "stable": true
      }
    ],
    "melt": 1879,
    "boil": 3657,
    "electronegativity": 1.75,
    "atomicRadius": 140,
    "electronConfiguration": "[Core] ndX ns2"
  },
  {
    "n": 31,
    "sym": "Ga",
    "name": "Gallium",
    "mass": "69.723",
    "cat": "post-transition",
    "period": 4,
    "group": 13,
    "iso": [
      {
        "name": "⁶⁹Ga",
        "mass": "68.92558",
        "abundance": "60.11%",
        "stable": true
      },
      {
        "name": "⁷¹Ga",
        "mass": "70.92470",
        "abundance": "39.89%",
        "stable": true
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d13"
  },
  {
    "n": 32,
    "sym": "Ge",
    "name": "Germanium",
    "mass": "72.630",
    "cat": "metalloid",
    "period": 4,
    "group": 14,
    "iso": [
      {
        "name": "⁷⁰Ge",
        "mass": "69.92425",
        "abundance": "21.23%",
        "stable": true
      },
      {
        "name": "⁷²Ge",
        "mass": "71.92208",
        "abundance": "27.66%",
        "stable": true
      },
      {
        "name": "⁷⁴Ge",
        "mass": "73.92118",
        "abundance": "36.73%",
        "stable": true
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d14"
  },
  {
    "n": 33,
    "sym": "As",
    "name": "Arsenic",
    "mass": "74.922",
    "cat": "metalloid",
    "period": 4,
    "group": 15,
    "iso": [
      {
        "name": "⁷⁵As",
        "mass": "74.92160",
        "abundance": "100%",
        "stable": true
      },
      {
        "name": "⁷³As",
        "mass": "72.92238",
        "abundance": "synth",
        "stable": false,
        "halfLife": "80.30 d"
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d15"
  },
  {
    "n": 34,
    "sym": "Se",
    "name": "Selenium",
    "mass": "78.971",
    "cat": "nonmetal",
    "period": 4,
    "group": 16,
    "iso": [
      {
        "name": "⁷⁴Se",
        "mass": "73.92248",
        "abundance": "0.89%",
        "stable": true
      },
      {
        "name": "⁷⁶Se",
        "mass": "75.91921",
        "abundance": "9.37%",
        "stable": true
      },
      {
        "name": "⁸⁰Se",
        "mass": "79.91652",
        "abundance": "49.61%",
        "stable": true
      }
    ],
    "melt": 333,
    "boil": 325,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d16"
  },
  {
    "n": 35,
    "sym": "Br",
    "name": "Bromine",
    "mass": "79.904",
    "cat": "halogen",
    "period": 4,
    "group": 17,
    "iso": [
      {
        "name": "⁷⁹Br",
        "mass": "78.91834",
        "abundance": "50.69%",
        "stable": true
      },
      {
        "name": "⁸¹Br",
        "mass": "80.91629",
        "abundance": "49.31%",
        "stable": true
      }
    ],
    "melt": 175,
    "boil": 210,
    "electronegativity": 3.15,
    "atomicRadius": 95,
    "electronConfiguration": "[Rn] 7s2 5f14 6d17"
  },
  {
    "n": 36,
    "sym": "Kr",
    "name": "Krypton",
    "mass": "83.798",
    "cat": "noble-gas",
    "period": 4,
    "group": 18,
    "iso": [
      {
        "name": "⁷⁸Kr",
        "mass": "77.92036",
        "abundance": "0.36%",
        "stable": true
      },
      {
        "name": "⁸⁴Kr",
        "mass": "83.91151",
        "abundance": "56.99%",
        "stable": true
      },
      {
        "name": "⁸⁶Kr",
        "mass": "85.91061",
        "abundance": "17.28%",
        "stable": true
      }
    ],
    "melt": 72,
    "boil": 90,
    "electronegativity": null,
    "atomicRadius": 86,
    "electronConfiguration": "[Core] ns2 np6"
  },
  {
    "n": 37,
    "sym": "Rb",
    "name": "Rubidium",
    "mass": "85.468",
    "cat": "alkali-metal",
    "period": 5,
    "group": 1,
    "iso": [
      {
        "name": "⁸⁵Rb",
        "mass": "84.91179",
        "abundance": "72.17%",
        "stable": true
      },
      {
        "name": "⁸⁷Rb",
        "mass": "86.90918",
        "abundance": "27.83%",
        "stable": false,
        "halfLife": "49.23 Gyr"
      }
    ],
    "melt": 363,
    "boil": 926,
    "electronegativity": 0.9,
    "atomicRadius": 217,
    "electronConfiguration": "[Core] ns1"
  },
  {
    "n": 38,
    "sym": "Sr",
    "name": "Strontium",
    "mass": "87.62",
    "cat": "alkaline-earth",
    "period": 5,
    "group": 2,
    "iso": [
      {
        "name": "⁸⁴Sr",
        "mass": "83.91342",
        "abundance": "0.56%",
        "stable": true
      },
      {
        "name": "⁸⁶Sr",
        "mass": "85.90927",
        "abundance": "9.86%",
        "stable": true
      },
      {
        "name": "⁸⁸Sr",
        "mass": "87.90561",
        "abundance": "82.58%",
        "stable": true
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d2"
  },
  {
    "n": 39,
    "sym": "Y",
    "name": "Yttrium",
    "mass": "88.906",
    "cat": "transition-metal",
    "period": 5,
    "group": 3,
    "iso": [
      {
        "name": "⁸⁹Y",
        "mass": "88.90584",
        "abundance": "100%",
        "stable": true
      },
      {
        "name": "⁹⁰Y",
        "mass": "89.90715",
        "abundance": "synth",
        "stable": false,
        "halfLife": "64.0 h"
      }
    ],
    "melt": 2448,
    "boil": 3021,
    "electronegativity": 2.04,
    "atomicRadius": 140,
    "electronConfiguration": "[Core] ndX ns2"
  },
  {
    "n": 40,
    "sym": "Zr",
    "name": "Zirconium",
    "mass": "91.224",
    "cat": "transition-metal",
    "period": 5,
    "group": 4,
    "iso": [
      {
        "name": "⁹⁰Zr",
        "mass": "89.90470",
        "abundance": "51.45%",
        "stable": true
      },
      {
        "name": "⁹²Zr",
        "mass": "91.90503",
        "abundance": "17.15%",
        "stable": true
      },
      {
        "name": "⁹⁴Zr",
        "mass": "93.90632",
        "abundance": "17.38%",
        "stable": true
      }
    ],
    "melt": 2253,
    "boil": 3851,
    "electronegativity": 2.35,
    "atomicRadius": 140,
    "electronConfiguration": "[Core] ndX ns2"
  },
  {
    "n": 41,
    "sym": "Nb",
    "name": "Niobium",
    "mass": "92.906",
    "cat": "transition-metal",
    "period": 5,
    "group": 5,
    "iso": [
      {
        "name": "⁹³Nb",
        "mass": "92.90637",
        "abundance": "100%",
        "stable": true
      },
      {
        "name": "⁹⁴Nb",
        "mass": "93.90728",
        "abundance": "synth",
        "stable": false,
        "halfLife": "20300 yr"
      }
    ],
    "melt": 2347,
    "boil": 3377,
    "electronegativity": 1.66,
    "atomicRadius": 140,
    "electronConfiguration": "[Core] ndX ns2"
  },
  {
    "n": 42,
    "sym": "Mo",
    "name": "Molybdenum",
    "mass": "95.96",
    "cat": "transition-metal",
    "period": 5,
    "group": 6,
    "iso": [
      {
        "name": "⁹²Mo",
        "mass": "91.90681",
        "abundance": "14.53%",
        "stable": true
      },
      {
        "name": "⁹⁶Mo",
        "mass": "95.90468",
        "abundance": "16.67%",
        "stable": true
      },
      {
        "name": "⁹⁸Mo",
        "mass": "97.90541",
        "abundance": "24.39%",
        "stable": true
      }
    ],
    "melt": 2324,
    "boil": 3885,
    "electronegativity": 2.33,
    "atomicRadius": 140,
    "electronConfiguration": "[Core] ndX ns2"
  },
  {
    "n": 43,
    "sym": "Tc",
    "name": "Technetium",
    "mass": "[98]",
    "cat": "transition-metal",
    "period": 5,
    "group": 7,
    "iso": [
      {
        "name": "⁹⁸Tc",
        "mass": "97.90721",
        "abundance": "synth",
        "stable": false,
        "halfLife": "4.2 Myr"
      },
      {
        "name": "⁹⁹Tc",
        "mass": "98.90625",
        "abundance": "synth",
        "stable": false,
        "halfLife": "211100 yr"
      }
    ],
    "melt": 1684,
    "boil": 3495,
    "electronegativity": 1.54,
    "atomicRadius": 140,
    "electronConfiguration": "[Core] ndX ns2"
  },
  {
    "n": 44,
    "sym": "Ru",
    "name": "Ruthenium",
    "mass": "101.07",
    "cat": "transition-metal",
    "period": 5,
    "group": 8,
    "iso": [
      {
        "name": "¹⁰²Ru",
        "mass": "101.90435",
        "abundance": "31.55%",
        "stable": true
      },
      {
        "name": "¹⁰⁴Ru",
        "mass": "103.90543",
        "abundance": "18.62%",
        "stable": true
      }
    ],
    "melt": 2324,
    "boil": 3857,
    "electronegativity": 1.77,
    "atomicRadius": 140,
    "electronConfiguration": "[Core] ndX ns2"
  },
  {
    "n": 45,
    "sym": "Rh",
    "name": "Rhodium",
    "mass": "102.91",
    "cat": "transition-metal",
    "period": 5,
    "group": 9,
    "iso": [
      {
        "name": "¹⁰³Rh",
        "mass": "102.90550",
        "abundance": "100%",
        "stable": true
      },
      {
        "name": "¹⁰²Rh",
        "mass": "101.90683",
        "abundance": "synth",
        "stable": false,
        "halfLife": "207 d"
      }
    ],
    "melt": 2396,
    "boil": 3494,
    "electronegativity": 1.78,
    "atomicRadius": 140,
    "electronConfiguration": "[Core] ndX ns2"
  },
  {
    "n": 46,
    "sym": "Pd",
    "name": "Palladium",
    "mass": "106.42",
    "cat": "transition-metal",
    "period": 5,
    "group": 10,
    "iso": [
      {
        "name": "¹⁰⁶Pd",
        "mass": "105.90348",
        "abundance": "27.33%",
        "stable": true
      },
      {
        "name": "¹⁰⁸Pd",
        "mass": "107.90389",
        "abundance": "26.46%",
        "stable": true
      }
    ],
    "melt": 1555,
    "boil": 3745,
    "electronegativity": 1.54,
    "atomicRadius": 140,
    "electronConfiguration": "[Core] ndX ns2"
  },
  {
    "n": 47,
    "sym": "Ag",
    "name": "Silver",
    "mass": "107.87",
    "cat": "transition-metal",
    "period": 5,
    "group": 11,
    "iso": [
      {
        "name": "¹⁰⁷Ag",
        "mass": "106.90509",
        "abundance": "51.84%",
        "stable": true
      },
      {
        "name": "¹⁰⁹Ag",
        "mass": "108.90475",
        "abundance": "48.16%",
        "stable": true
      }
    ],
    "melt": 2122,
    "boil": 3004,
    "electronegativity": 2.31,
    "atomicRadius": 140,
    "electronConfiguration": "[Core] ndX ns2"
  },
  {
    "n": 48,
    "sym": "Cd",
    "name": "Cadmium",
    "mass": "112.41",
    "cat": "transition-metal",
    "period": 5,
    "group": 12,
    "iso": [
      {
        "name": "¹¹²Cd",
        "mass": "111.90276",
        "abundance": "24.13%",
        "stable": true
      },
      {
        "name": "¹¹⁴Cd",
        "mass": "113.90336",
        "abundance": "28.73%",
        "stable": true
      }
    ],
    "melt": 1505,
    "boil": 3185,
    "electronegativity": 1.98,
    "atomicRadius": 140,
    "electronConfiguration": "[Core] ndX ns2"
  },
  {
    "n": 49,
    "sym": "In",
    "name": "Indium",
    "mass": "114.82",
    "cat": "post-transition",
    "period": 5,
    "group": 13,
    "iso": [
      {
        "name": "¹¹³In",
        "mass": "112.90406",
        "abundance": "4.29%",
        "stable": true
      },
      {
        "name": "¹¹⁵In",
        "mass": "114.90387",
        "abundance": "95.71%",
        "stable": false,
        "halfLife": "441 Eyr"
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d13"
  },
  {
    "n": 50,
    "sym": "Sn",
    "name": "Tin",
    "mass": "118.71",
    "cat": "post-transition",
    "period": 5,
    "group": 14,
    "iso": [
      {
        "name": "¹¹⁶Sn",
        "mass": "115.90174",
        "abundance": "14.54%",
        "stable": true
      },
      {
        "name": "¹¹⁸Sn",
        "mass": "117.90160",
        "abundance": "24.22%",
        "stable": true
      },
      {
        "name": "¹²⁰Sn",
        "mass": "119.90220",
        "abundance": "32.58%",
        "stable": true
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d14"
  },
  {
    "n": 51,
    "sym": "Sb",
    "name": "Antimony",
    "mass": "121.76",
    "cat": "metalloid",
    "period": 5,
    "group": 15,
    "iso": [
      {
        "name": "¹²¹Sb",
        "mass": "120.90381",
        "abundance": "57.21%",
        "stable": true
      },
      {
        "name": "¹²³Sb",
        "mass": "122.90422",
        "abundance": "42.79%",
        "stable": true
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d15"
  },
  {
    "n": 52,
    "sym": "Te",
    "name": "Tellurium",
    "mass": "127.60",
    "cat": "metalloid",
    "period": 5,
    "group": 16,
    "iso": [
      {
        "name": "¹²⁸Te",
        "mass": "127.90446",
        "abundance": "31.74%",
        "stable": true
      },
      {
        "name": "¹³⁰Te",
        "mass": "129.90622",
        "abundance": "34.08%",
        "stable": false,
        "halfLife": "2.2×10²¹ yr"
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d16"
  },
  {
    "n": 53,
    "sym": "I",
    "name": "Iodine",
    "mass": "126.90",
    "cat": "halogen",
    "period": 5,
    "group": 17,
    "iso": [
      {
        "name": "¹²⁷I",
        "mass": "126.90447",
        "abundance": "100%",
        "stable": true
      },
      {
        "name": "¹³¹I",
        "mass": "130.90612",
        "abundance": "synth",
        "stable": false,
        "halfLife": "8.02 d"
      }
    ],
    "melt": 265,
    "boil": 318,
    "electronegativity": 2.97,
    "atomicRadius": 113,
    "electronConfiguration": "[Rn] 7s2 5f14 6d17"
  },
  {
    "n": 54,
    "sym": "Xe",
    "name": "Xenon",
    "mass": "131.29",
    "cat": "noble-gas",
    "period": 5,
    "group": 18,
    "iso": [
      {
        "name": "¹²⁸Xe",
        "mass": "127.90353",
        "abundance": "1.92%",
        "stable": true
      },
      {
        "name": "¹³²Xe",
        "mass": "131.90416",
        "abundance": "26.89%",
        "stable": true
      },
      {
        "name": "¹³⁶Xe",
        "mass": "135.90722",
        "abundance": "8.86%",
        "stable": true
      }
    ],
    "melt": 108,
    "boil": 135,
    "electronegativity": null,
    "atomicRadius": 104,
    "electronConfiguration": "[Core] ns2 np6"
  },
  {
    "n": 55,
    "sym": "Cs",
    "name": "Caesium",
    "mass": "132.91",
    "cat": "alkali-metal",
    "period": 6,
    "group": 1,
    "iso": [
      {
        "name": "¹³³Cs",
        "mass": "132.90545",
        "abundance": "100%",
        "stable": true
      },
      {
        "name": "¹³⁷Cs",
        "mass": "136.90708",
        "abundance": "synth",
        "stable": false,
        "halfLife": "30.17 yr"
      }
    ],
    "melt": 345,
    "boil": 890,
    "electronegativity": 0.9,
    "atomicRadius": 235,
    "electronConfiguration": "[Core] ns1"
  },
  {
    "n": 56,
    "sym": "Ba",
    "name": "Barium",
    "mass": "137.33",
    "cat": "alkaline-earth",
    "period": 6,
    "group": 2,
    "iso": [
      {
        "name": "¹³⁶Ba",
        "mass": "135.90457",
        "abundance": "7.85%",
        "stable": true
      },
      {
        "name": "¹³⁸Ba",
        "mass": "137.90524",
        "abundance": "71.70%",
        "stable": true
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d2"
  },
  {
    "n": 57,
    "sym": "La",
    "name": "Lanthanum",
    "mass": "138.91",
    "cat": "lanthanide",
    "period": 6,
    "group": null,
    "iso": [
      {
        "name": "¹³⁹La",
        "mass": "138.90635",
        "abundance": "99.91%",
        "stable": true
      },
      {
        "name": "¹³⁸La",
        "mass": "137.90712",
        "abundance": "0.09%",
        "stable": false,
        "halfLife": "102 Gyr"
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d1"
  },
  {
    "n": 72,
    "sym": "Hf",
    "name": "Hafnium",
    "mass": "178.49",
    "cat": "transition-metal",
    "period": 6,
    "group": 4,
    "iso": [
      {
        "name": "¹⁷⁶Hf",
        "mass": "175.94141",
        "abundance": "5.26%",
        "stable": true
      },
      {
        "name": "¹⁸⁰Hf",
        "mass": "179.94655",
        "abundance": "35.08%",
        "stable": true
      }
    ],
    "melt": 2350,
    "boil": 3463,
    "electronegativity": 2.08,
    "atomicRadius": 140,
    "electronConfiguration": "[Core] ndX ns2"
  },
  {
    "n": 73,
    "sym": "Ta",
    "name": "Tantalum",
    "mass": "180.95",
    "cat": "transition-metal",
    "period": 6,
    "group": 5,
    "iso": [
      {
        "name": "¹⁸¹Ta",
        "mass": "180.94800",
        "abundance": "99.99%",
        "stable": true
      },
      {
        "name": "¹⁸⁰Ta",
        "mass": "179.94747",
        "abundance": "0.01%",
        "stable": false,
        "halfLife": ">1.2×10¹⁵ yr"
      }
    ],
    "melt": 1752,
    "boil": 3424,
    "electronegativity": 1.67,
    "atomicRadius": 140,
    "electronConfiguration": "[Core] ndX ns2"
  },
  {
    "n": 74,
    "sym": "W",
    "name": "Tungsten",
    "mass": "183.84",
    "cat": "transition-metal",
    "period": 6,
    "group": 6,
    "iso": [
      {
        "name": "¹⁸²W",
        "mass": "181.94820",
        "abundance": "26.50%",
        "stable": true
      },
      {
        "name": "¹⁸⁴W",
        "mass": "183.95093",
        "abundance": "30.64%",
        "stable": true
      },
      {
        "name": "¹⁸⁶W",
        "mass": "185.95436",
        "abundance": "28.43%",
        "stable": true
      }
    ],
    "melt": 1994,
    "boil": 3512,
    "electronegativity": 2.19,
    "atomicRadius": 140,
    "electronConfiguration": "[Core] ndX ns2"
  },
  {
    "n": 75,
    "sym": "Re",
    "name": "Rhenium",
    "mass": "186.21",
    "cat": "transition-metal",
    "period": 6,
    "group": 7,
    "iso": [
      {
        "name": "¹⁸⁵Re",
        "mass": "184.95297",
        "abundance": "37.40%",
        "stable": true
      },
      {
        "name": "¹⁸⁷Re",
        "mass": "186.95575",
        "abundance": "62.60%",
        "stable": false,
        "halfLife": "41.2 Gyr"
      }
    ],
    "melt": 1704,
    "boil": 3631,
    "electronegativity": 1.81,
    "atomicRadius": 140,
    "electronConfiguration": "[Core] ndX ns2"
  },
  {
    "n": 76,
    "sym": "Os",
    "name": "Osmium",
    "mass": "190.23",
    "cat": "transition-metal",
    "period": 6,
    "group": 8,
    "iso": [
      {
        "name": "¹⁸⁸Os",
        "mass": "187.95583",
        "abundance": "13.24%",
        "stable": true
      },
      {
        "name": "¹⁹²Os",
        "mass": "191.96148",
        "abundance": "40.93%",
        "stable": true
      }
    ],
    "melt": 1516,
    "boil": 3979,
    "electronegativity": 2.37,
    "atomicRadius": 140,
    "electronConfiguration": "[Core] ndX ns2"
  },
  {
    "n": 77,
    "sym": "Ir",
    "name": "Iridium",
    "mass": "192.22",
    "cat": "transition-metal",
    "period": 6,
    "group": 9,
    "iso": [
      {
        "name": "¹⁹¹Ir",
        "mass": "190.96059",
        "abundance": "37.30%",
        "stable": true
      },
      {
        "name": "¹⁹³Ir",
        "mass": "192.96292",
        "abundance": "62.70%",
        "stable": true
      }
    ],
    "melt": 2334,
    "boil": 3032,
    "electronegativity": 1.66,
    "atomicRadius": 140,
    "electronConfiguration": "[Core] ndX ns2"
  },
  {
    "n": 78,
    "sym": "Pt",
    "name": "Platinum",
    "mass": "195.08",
    "cat": "transition-metal",
    "period": 6,
    "group": 10,
    "iso": [
      {
        "name": "¹⁹⁴Pt",
        "mass": "193.96268",
        "abundance": "32.97%",
        "stable": true
      },
      {
        "name": "¹⁹⁵Pt",
        "mass": "194.96479",
        "abundance": "33.83%",
        "stable": true
      },
      {
        "name": "¹⁹⁶Pt",
        "mass": "195.96495",
        "abundance": "25.24%",
        "stable": true
      }
    ],
    "melt": 1931,
    "boil": 3820,
    "electronegativity": 1.73,
    "atomicRadius": 140,
    "electronConfiguration": "[Core] ndX ns2"
  },
  {
    "n": 79,
    "sym": "Au",
    "name": "Gold",
    "mass": "196.97",
    "cat": "transition-metal",
    "period": 6,
    "group": 11,
    "iso": [
      {
        "name": "¹⁹⁷Au",
        "mass": "196.96656",
        "abundance": "100%",
        "stable": true
      },
      {
        "name": "¹⁹⁸Au",
        "mass": "197.96824",
        "abundance": "synth",
        "stable": false,
        "halfLife": "2.69 d"
      }
    ],
    "melt": 1337,
    "boil": 3129,
    "electronegativity": 2.54,
    "atomicRadius": 174,
    "electronConfiguration": "[Xe] 4f14 5d10 6s1"
  },
  {
    "n": 80,
    "sym": "Hg",
    "name": "Mercury",
    "mass": "200.59",
    "cat": "transition-metal",
    "period": 6,
    "group": 12,
    "iso": [
      {
        "name": "¹⁹⁸Hg",
        "mass": "197.96676",
        "abundance": "10.02%",
        "stable": true
      },
      {
        "name": "²⁰²Hg",
        "mass": "201.97063",
        "abundance": "29.86%",
        "stable": true
      }
    ],
    "melt": 234,
    "boil": 630,
    "electronegativity": 2,
    "atomicRadius": 171,
    "electronConfiguration": "[Xe] 4f14 5d10 6s2"
  },
  {
    "n": 81,
    "sym": "Tl",
    "name": "Thallium",
    "mass": "204.38",
    "cat": "post-transition",
    "period": 6,
    "group": 13,
    "iso": [
      {
        "name": "²⁰³Tl",
        "mass": "202.97234",
        "abundance": "29.52%",
        "stable": true
      },
      {
        "name": "²⁰⁵Tl",
        "mass": "204.97441",
        "abundance": "70.48%",
        "stable": true
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d13"
  },
  {
    "n": 82,
    "sym": "Pb",
    "name": "Lead",
    "mass": "207.2",
    "cat": "post-transition",
    "period": 6,
    "group": 14,
    "iso": [
      {
        "name": "²⁰⁴Pb",
        "mass": "203.97304",
        "abundance": "1.40%",
        "stable": true
      },
      {
        "name": "²⁰⁶Pb",
        "mass": "205.97446",
        "abundance": "24.10%",
        "stable": true
      },
      {
        "name": "²⁰⁸Pb",
        "mass": "207.97666",
        "abundance": "52.40%",
        "stable": true
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d14"
  },
  {
    "n": 83,
    "sym": "Bi",
    "name": "Bismuth",
    "mass": "208.98",
    "cat": "post-transition",
    "period": 6,
    "group": 15,
    "iso": [
      {
        "name": "²⁰⁹Bi",
        "mass": "208.98040",
        "abundance": "100%",
        "stable": false,
        "halfLife": "1.9×10¹⁹ yr"
      },
      {
        "name": "²¹⁰Bi",
        "mass": "209.98412",
        "abundance": "trace",
        "stable": false,
        "halfLife": "5.01 d"
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d15"
  },
  {
    "n": 84,
    "sym": "Po",
    "name": "Polonium",
    "mass": "[209]",
    "cat": "metalloid",
    "period": 6,
    "group": 16,
    "iso": [
      {
        "name": "²⁰⁹Po",
        "mass": "208.98243",
        "abundance": "synth",
        "stable": false,
        "halfLife": "125.2 yr"
      },
      {
        "name": "²¹⁰Po",
        "mass": "209.98287",
        "abundance": "trace",
        "stable": false,
        "halfLife": "138.4 d"
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d16"
  },
  {
    "n": 85,
    "sym": "At",
    "name": "Astatine",
    "mass": "[210]",
    "cat": "halogen",
    "period": 6,
    "group": 17,
    "iso": [
      {
        "name": "²¹⁰At",
        "mass": "209.98715",
        "abundance": "synth",
        "stable": false,
        "halfLife": "8.1 h"
      },
      {
        "name": "²¹¹At",
        "mass": "210.98750",
        "abundance": "synth",
        "stable": false,
        "halfLife": "7.21 h"
      }
    ],
    "melt": 425,
    "boil": 510,
    "electronegativity": 2.65,
    "atomicRadius": 145,
    "electronConfiguration": "[Rn] 7s2 5f14 6d17"
  },
  {
    "n": 86,
    "sym": "Rn",
    "name": "Radon",
    "mass": "[222]",
    "cat": "noble-gas",
    "period": 6,
    "group": 18,
    "iso": [
      {
        "name": "²²²Rn",
        "mass": "222.01758",
        "abundance": "trace",
        "stable": false,
        "halfLife": "3.82 d"
      },
      {
        "name": "²²⁰Rn",
        "mass": "220.01139",
        "abundance": "trace",
        "stable": false,
        "halfLife": "55.6 s"
      }
    ],
    "melt": 172,
    "boil": 215,
    "electronegativity": null,
    "atomicRadius": 136,
    "electronConfiguration": "[Core] ns2 np6"
  },
  {
    "n": 87,
    "sym": "Fr",
    "name": "Francium",
    "mass": "[223]",
    "cat": "alkali-metal",
    "period": 7,
    "group": 1,
    "iso": [
      {
        "name": "²²³Fr",
        "mass": "223.01974",
        "abundance": "trace",
        "stable": false,
        "halfLife": "22.0 min"
      },
      {
        "name": "²²¹Fr",
        "mass": "221.01426",
        "abundance": "trace",
        "stable": false,
        "halfLife": "4.9 min"
      }
    ],
    "melt": 313,
    "boil": 826,
    "electronegativity": 0.9,
    "atomicRadius": 267,
    "electronConfiguration": "[Core] ns1"
  },
  {
    "n": 88,
    "sym": "Ra",
    "name": "Radium",
    "mass": "[226]",
    "cat": "alkaline-earth",
    "period": 7,
    "group": 2,
    "iso": [
      {
        "name": "²²⁶Ra",
        "mass": "226.02541",
        "abundance": "trace",
        "stable": false,
        "halfLife": "1600 yr"
      },
      {
        "name": "²²⁸Ra",
        "mass": "228.03107",
        "abundance": "trace",
        "stable": false,
        "halfLife": "5.75 yr"
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d2"
  },
  {
    "n": 89,
    "sym": "Ac",
    "name": "Actinium",
    "mass": "[227]",
    "cat": "actinide",
    "period": 7,
    "group": null,
    "iso": [
      {
        "name": "²²⁷Ac",
        "mass": "227.02775",
        "abundance": "trace",
        "stable": false,
        "halfLife": "21.77 yr"
      },
      {
        "name": "²²⁸Ac",
        "mass": "228.03102",
        "abundance": "trace",
        "stable": false,
        "halfLife": "6.15 h"
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d1"
  },
  {
    "n": 104,
    "sym": "Rf",
    "name": "Rutherfordium",
    "mass": "[267]",
    "cat": "transition-metal",
    "period": 7,
    "group": 4,
    "iso": [
      {
        "name": "²⁶⁷Rf",
        "mass": "267.12",
        "abundance": "synth",
        "stable": false,
        "halfLife": "~1.3 h"
      },
      {
        "name": "²⁶³Rf",
        "mass": "263.11",
        "abundance": "synth",
        "stable": false,
        "halfLife": "15 min"
      }
    ],
    "melt": 2407,
    "boil": 3617,
    "electronegativity": 1.9,
    "atomicRadius": 140,
    "electronConfiguration": "[Core] ndX ns2"
  },
  {
    "n": 105,
    "sym": "Db",
    "name": "Dubnium",
    "mass": "[268]",
    "cat": "transition-metal",
    "period": 7,
    "group": 5,
    "iso": [
      {
        "name": "²⁶⁸Db",
        "mass": "268.13",
        "abundance": "synth",
        "stable": false,
        "halfLife": "~16 h"
      },
      {
        "name": "²⁶²Db",
        "mass": "262.11",
        "abundance": "synth",
        "stable": false,
        "halfLife": "34 s"
      }
    ],
    "melt": 2286,
    "boil": 3642,
    "electronegativity": 2.15,
    "atomicRadius": 140,
    "electronConfiguration": "[Core] ndX ns2"
  },
  {
    "n": 106,
    "sym": "Sg",
    "name": "Seaborgium",
    "mass": "[271]",
    "cat": "transition-metal",
    "period": 7,
    "group": 6,
    "iso": [
      {
        "name": "²⁷¹Sg",
        "mass": "271.13",
        "abundance": "synth",
        "stable": false,
        "halfLife": "~2 min"
      },
      {
        "name": "²⁶⁹Sg",
        "mass": "269.13",
        "abundance": "synth",
        "stable": false,
        "halfLife": "~3 min"
      }
    ],
    "melt": 2412,
    "boil": 3199,
    "electronegativity": 1.6,
    "atomicRadius": 140,
    "electronConfiguration": "[Core] ndX ns2"
  },
  {
    "n": 107,
    "sym": "Bh",
    "name": "Bohrium",
    "mass": "[272]",
    "cat": "transition-metal",
    "period": 7,
    "group": 7,
    "iso": [
      {
        "name": "²⁷²Bh",
        "mass": "272.14",
        "abundance": "synth",
        "stable": false,
        "halfLife": "~10 s"
      },
      {
        "name": "²⁷⁰Bh",
        "mass": "270.13",
        "abundance": "synth",
        "stable": false,
        "halfLife": "~61 s"
      }
    ],
    "melt": 1575,
    "boil": 3299,
    "electronegativity": 2,
    "atomicRadius": 140,
    "electronConfiguration": "[Core] ndX ns2"
  },
  {
    "n": 108,
    "sym": "Hs",
    "name": "Hassium",
    "mass": "[270]",
    "cat": "transition-metal",
    "period": 7,
    "group": 8,
    "iso": [
      {
        "name": "²⁷⁰Hs",
        "mass": "270.13",
        "abundance": "synth",
        "stable": false,
        "halfLife": "~4 s"
      },
      {
        "name": "²⁶⁹Hs",
        "mass": "269.13",
        "abundance": "synth",
        "stable": false,
        "halfLife": "~9.7 s"
      }
    ],
    "melt": 1688,
    "boil": 3788,
    "electronegativity": 1.71,
    "atomicRadius": 140,
    "electronConfiguration": "[Core] ndX ns2"
  },
  {
    "n": 109,
    "sym": "Mt",
    "name": "Meitnerium",
    "mass": "[276]",
    "cat": "transition-metal",
    "period": 7,
    "group": 9,
    "iso": [
      {
        "name": "²⁷⁶Mt",
        "mass": "276.15",
        "abundance": "synth",
        "stable": false,
        "halfLife": "~0.72 s"
      },
      {
        "name": "²⁷⁸Mt",
        "mass": "278.16",
        "abundance": "synth",
        "stable": false,
        "halfLife": "~7.6 s"
      }
    ],
    "melt": 1573,
    "boil": 3503,
    "electronegativity": 2.12,
    "atomicRadius": 140,
    "electronConfiguration": "[Core] ndX ns2"
  },
  {
    "n": 110,
    "sym": "Ds",
    "name": "Darmstadtium",
    "mass": "[281]",
    "cat": "transition-metal",
    "period": 7,
    "group": 10,
    "iso": [
      {
        "name": "²⁸¹Ds",
        "mass": "281.16",
        "abundance": "synth",
        "stable": false,
        "halfLife": "~11 s"
      },
      {
        "name": "²⁷⁹Ds",
        "mass": "279.15",
        "abundance": "synth",
        "stable": false,
        "halfLife": "~0.18 s"
      }
    ],
    "melt": 1632,
    "boil": 3176,
    "electronegativity": 2.22,
    "atomicRadius": 140,
    "electronConfiguration": "[Core] ndX ns2"
  },
  {
    "n": 111,
    "sym": "Rg",
    "name": "Roentgenium",
    "mass": "[280]",
    "cat": "transition-metal",
    "period": 7,
    "group": 11,
    "iso": [
      {
        "name": "²⁸⁰Rg",
        "mass": "280.16",
        "abundance": "synth",
        "stable": false,
        "halfLife": "~3.6 s"
      },
      {
        "name": "²⁸²Rg",
        "mass": "282.17",
        "abundance": "synth",
        "stable": false,
        "halfLife": "~2.1 min"
      }
    ],
    "melt": 2399,
    "boil": 3457,
    "electronegativity": 1.82,
    "atomicRadius": 140,
    "electronConfiguration": "[Core] ndX ns2"
  },
  {
    "n": 112,
    "sym": "Cn",
    "name": "Copernicium",
    "mass": "[285]",
    "cat": "transition-metal",
    "period": 7,
    "group": 12,
    "iso": [
      {
        "name": "²⁸⁵Cn",
        "mass": "285.18",
        "abundance": "synth",
        "stable": false,
        "halfLife": "~29 s"
      },
      {
        "name": "²⁸³Cn",
        "mass": "283.18",
        "abundance": "synth",
        "stable": false,
        "halfLife": "~4 s"
      }
    ],
    "melt": 1660,
    "boil": 3832,
    "electronegativity": 1.75,
    "atomicRadius": 140,
    "electronConfiguration": "[Core] ndX ns2"
  },
  {
    "n": 113,
    "sym": "Nh",
    "name": "Nihonium",
    "mass": "[286]",
    "cat": "post-transition",
    "period": 7,
    "group": 13,
    "iso": [
      {
        "name": "²⁸⁶Nh",
        "mass": "286.18",
        "abundance": "synth",
        "stable": false,
        "halfLife": "~20 s"
      },
      {
        "name": "²⁸⁴Nh",
        "mass": "284.18",
        "abundance": "synth",
        "stable": false,
        "halfLife": "~0.91 s"
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d13"
  },
  {
    "n": 114,
    "sym": "Fl",
    "name": "Flerovium",
    "mass": "[289]",
    "cat": "post-transition",
    "period": 7,
    "group": 14,
    "iso": [
      {
        "name": "²⁸⁹Fl",
        "mass": "289.19",
        "abundance": "synth",
        "stable": false,
        "halfLife": "~2.6 s"
      },
      {
        "name": "²⁸⁷Fl",
        "mass": "287.19",
        "abundance": "synth",
        "stable": false,
        "halfLife": "~0.51 s"
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d14"
  },
  {
    "n": 115,
    "sym": "Mc",
    "name": "Moscovium",
    "mass": "[290]",
    "cat": "post-transition",
    "period": 7,
    "group": 15,
    "iso": [
      {
        "name": "²⁹⁰Mc",
        "mass": "290.20",
        "abundance": "synth",
        "stable": false,
        "halfLife": "~0.65 s"
      },
      {
        "name": "²⁸⁸Mc",
        "mass": "288.19",
        "abundance": "synth",
        "stable": false,
        "halfLife": "~87 ms"
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d15"
  },
  {
    "n": 116,
    "sym": "Lv",
    "name": "Livermorium",
    "mass": "[293]",
    "cat": "post-transition",
    "period": 7,
    "group": 16,
    "iso": [
      {
        "name": "²⁹³Lv",
        "mass": "293.21",
        "abundance": "synth",
        "stable": false,
        "halfLife": "~57 ms"
      },
      {
        "name": "²⁹¹Lv",
        "mass": "291.21",
        "abundance": "synth",
        "stable": false,
        "halfLife": "~18 ms"
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d16"
  },
  {
    "n": 117,
    "sym": "Ts",
    "name": "Tennessine",
    "mass": "[294]",
    "cat": "halogen",
    "period": 7,
    "group": 17,
    "iso": [
      {
        "name": "²⁹⁴Ts",
        "mass": "294.21",
        "abundance": "synth",
        "stable": false,
        "halfLife": "~51 ms"
      },
      {
        "name": "²⁹³Ts",
        "mass": "293.21",
        "abundance": "synth",
        "stable": false,
        "halfLife": "~22 ms"
      }
    ],
    "melt": 585,
    "boil": 702,
    "electronegativity": 2.33,
    "atomicRadius": 177,
    "electronConfiguration": "[Rn] 7s2 5f14 6d17"
  },
  {
    "n": 118,
    "sym": "Og",
    "name": "Oganesson",
    "mass": "[294]",
    "cat": "noble-gas",
    "period": 7,
    "group": 18,
    "iso": [
      {
        "name": "²⁹⁴Og",
        "mass": "294.21",
        "abundance": "synth",
        "stable": false,
        "halfLife": "~0.7 ms"
      },
      {
        "name": "²⁹⁵Og",
        "mass": "295.22",
        "abundance": "synth",
        "stable": false,
        "halfLife": "~2 ms"
      }
    ],
    "melt": 236,
    "boil": 295,
    "electronegativity": null,
    "atomicRadius": 168,
    "electronConfiguration": "[Core] ns2 np6"
  },
  {
    "n": 58,
    "sym": "Ce",
    "name": "Cerium",
    "mass": "140.12",
    "cat": "lanthanide",
    "period": 6,
    "group": null,
    "iso": [
      {
        "name": "¹⁴⁰Ce",
        "mass": "139.90543",
        "abundance": "88.45%",
        "stable": true
      },
      {
        "name": "¹⁴²Ce",
        "mass": "141.90924",
        "abundance": "11.11%",
        "stable": true
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d1"
  },
  {
    "n": 59,
    "sym": "Pr",
    "name": "Praseodymium",
    "mass": "140.91",
    "cat": "lanthanide",
    "period": 6,
    "group": null,
    "iso": [
      {
        "name": "¹⁴¹Pr",
        "mass": "140.90766",
        "abundance": "100%",
        "stable": true
      },
      {
        "name": "¹⁴²Pr",
        "mass": "141.91005",
        "abundance": "synth",
        "stable": false,
        "halfLife": "19.12 h"
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d1"
  },
  {
    "n": 60,
    "sym": "Nd",
    "name": "Neodymium",
    "mass": "144.24",
    "cat": "lanthanide",
    "period": 6,
    "group": null,
    "iso": [
      {
        "name": "¹⁴²Nd",
        "mass": "141.90772",
        "abundance": "27.2%",
        "stable": true
      },
      {
        "name": "¹⁴⁴Nd",
        "mass": "143.91009",
        "abundance": "23.8%",
        "stable": false,
        "halfLife": "2.29×10¹⁵ yr"
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d1"
  },
  {
    "n": 61,
    "sym": "Pm",
    "name": "Promethium",
    "mass": "[145]",
    "cat": "lanthanide",
    "period": 6,
    "group": null,
    "iso": [
      {
        "name": "¹⁴⁵Pm",
        "mass": "144.91275",
        "abundance": "synth",
        "stable": false,
        "halfLife": "17.7 yr"
      },
      {
        "name": "¹⁴⁷Pm",
        "mass": "146.91515",
        "abundance": "synth",
        "stable": false,
        "halfLife": "2.62 yr"
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d1"
  },
  {
    "n": 62,
    "sym": "Sm",
    "name": "Samarium",
    "mass": "150.36",
    "cat": "lanthanide",
    "period": 6,
    "group": null,
    "iso": [
      {
        "name": "¹⁵²Sm",
        "mass": "151.91973",
        "abundance": "26.75%",
        "stable": true
      },
      {
        "name": "¹⁵⁴Sm",
        "mass": "153.92221",
        "abundance": "22.75%",
        "stable": true
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d1"
  },
  {
    "n": 63,
    "sym": "Eu",
    "name": "Europium",
    "mass": "151.96",
    "cat": "lanthanide",
    "period": 6,
    "group": null,
    "iso": [
      {
        "name": "¹⁵¹Eu",
        "mass": "150.91985",
        "abundance": "47.81%",
        "stable": true
      },
      {
        "name": "¹⁵³Eu",
        "mass": "152.92124",
        "abundance": "52.19%",
        "stable": true
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d1"
  },
  {
    "n": 64,
    "sym": "Gd",
    "name": "Gadolinium",
    "mass": "157.25",
    "cat": "lanthanide",
    "period": 6,
    "group": null,
    "iso": [
      {
        "name": "¹⁵⁶Gd",
        "mass": "155.92213",
        "abundance": "20.47%",
        "stable": true
      },
      {
        "name": "¹⁵⁸Gd",
        "mass": "157.92411",
        "abundance": "24.84%",
        "stable": true
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d1"
  },
  {
    "n": 65,
    "sym": "Tb",
    "name": "Terbium",
    "mass": "158.93",
    "cat": "lanthanide",
    "period": 6,
    "group": null,
    "iso": [
      {
        "name": "¹⁵⁹Tb",
        "mass": "158.92535",
        "abundance": "100%",
        "stable": true
      },
      {
        "name": "¹⁶⁰Tb",
        "mass": "159.92735",
        "abundance": "synth",
        "stable": false,
        "halfLife": "72.3 d"
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d1"
  },
  {
    "n": 66,
    "sym": "Dy",
    "name": "Dysprosium",
    "mass": "162.50",
    "cat": "lanthanide",
    "period": 6,
    "group": null,
    "iso": [
      {
        "name": "¹⁶⁴Dy",
        "mass": "163.92918",
        "abundance": "28.18%",
        "stable": true
      },
      {
        "name": "¹⁶²Dy",
        "mass": "161.92680",
        "abundance": "25.51%",
        "stable": true
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d1"
  },
  {
    "n": 67,
    "sym": "Ho",
    "name": "Holmium",
    "mass": "164.93",
    "cat": "lanthanide",
    "period": 6,
    "group": null,
    "iso": [
      {
        "name": "¹⁶⁵Ho",
        "mass": "164.93033",
        "abundance": "100%",
        "stable": true
      },
      {
        "name": "¹⁶⁶Ho",
        "mass": "165.93228",
        "abundance": "synth",
        "stable": false,
        "halfLife": "26.83 h"
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d1"
  },
  {
    "n": 68,
    "sym": "Er",
    "name": "Erbium",
    "mass": "167.26",
    "cat": "lanthanide",
    "period": 6,
    "group": null,
    "iso": [
      {
        "name": "¹⁶⁸Er",
        "mass": "167.93238",
        "abundance": "26.78%",
        "stable": true
      },
      {
        "name": "¹⁶⁶Er",
        "mass": "165.93030",
        "abundance": "33.61%",
        "stable": true
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d1"
  },
  {
    "n": 69,
    "sym": "Tm",
    "name": "Thulium",
    "mass": "168.93",
    "cat": "lanthanide",
    "period": 6,
    "group": null,
    "iso": [
      {
        "name": "¹⁶⁹Tm",
        "mass": "168.93422",
        "abundance": "100%",
        "stable": true
      },
      {
        "name": "¹⁷⁰Tm",
        "mass": "169.93581",
        "abundance": "synth",
        "stable": false,
        "halfLife": "128.6 d"
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d1"
  },
  {
    "n": 70,
    "sym": "Yb",
    "name": "Ytterbium",
    "mass": "173.04",
    "cat": "lanthanide",
    "period": 6,
    "group": null,
    "iso": [
      {
        "name": "¹⁷⁴Yb",
        "mass": "173.93887",
        "abundance": "31.83%",
        "stable": true
      },
      {
        "name": "¹⁷²Yb",
        "mass": "171.93639",
        "abundance": "21.83%",
        "stable": true
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d1"
  },
  {
    "n": 71,
    "sym": "Lu",
    "name": "Lutetium",
    "mass": "174.97",
    "cat": "lanthanide",
    "period": 6,
    "group": null,
    "iso": [
      {
        "name": "¹⁷⁵Lu",
        "mass": "174.94078",
        "abundance": "97.40%",
        "stable": true
      },
      {
        "name": "¹⁷⁶Lu",
        "mass": "175.94269",
        "abundance": "2.60%",
        "stable": false,
        "halfLife": "37.59 Gyr"
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d1"
  },
  {
    "n": 90,
    "sym": "Th",
    "name": "Thorium",
    "mass": "232.04",
    "cat": "actinide",
    "period": 7,
    "group": null,
    "iso": [
      {
        "name": "²³²Th",
        "mass": "232.03806",
        "abundance": "99.98%",
        "stable": false,
        "halfLife": "14.05 Gyr"
      },
      {
        "name": "²³⁰Th",
        "mass": "230.03313",
        "abundance": "trace",
        "stable": false,
        "halfLife": "75400 yr"
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d1"
  },
  {
    "n": 91,
    "sym": "Pa",
    "name": "Protactinium",
    "mass": "231.04",
    "cat": "actinide",
    "period": 7,
    "group": null,
    "iso": [
      {
        "name": "²³¹Pa",
        "mass": "231.03588",
        "abundance": "trace",
        "stable": false,
        "halfLife": "32760 yr"
      },
      {
        "name": "²³³Pa",
        "mass": "233.04025",
        "abundance": "synth",
        "stable": false,
        "halfLife": "26.97 d"
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d1"
  },
  {
    "n": 92,
    "sym": "U",
    "name": "Uranium",
    "mass": "238.03",
    "cat": "actinide",
    "period": 7,
    "group": null,
    "iso": [
      {
        "name": "²³⁵U",
        "mass": "235.04393",
        "abundance": "0.72%",
        "stable": false,
        "halfLife": "703.8 Myr"
      },
      {
        "name": "²³⁸U",
        "mass": "238.05079",
        "abundance": "99.27%",
        "stable": false,
        "halfLife": "4.47 Gyr"
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d1"
  },
  {
    "n": 93,
    "sym": "Np",
    "name": "Neptunium",
    "mass": "[237]",
    "cat": "actinide",
    "period": 7,
    "group": null,
    "iso": [
      {
        "name": "²³⁷Np",
        "mass": "237.04817",
        "abundance": "trace",
        "stable": false,
        "halfLife": "2.14 Myr"
      },
      {
        "name": "²³⁹Np",
        "mass": "239.05294",
        "abundance": "synth",
        "stable": false,
        "halfLife": "2.36 d"
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d1"
  },
  {
    "n": 94,
    "sym": "Pu",
    "name": "Plutonium",
    "mass": "[244]",
    "cat": "actinide",
    "period": 7,
    "group": null,
    "iso": [
      {
        "name": "²³⁹Pu",
        "mass": "239.05216",
        "abundance": "trace",
        "stable": false,
        "halfLife": "24110 yr"
      },
      {
        "name": "²⁴⁴Pu",
        "mass": "244.06420",
        "abundance": "trace",
        "stable": false,
        "halfLife": "80.8 Myr"
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d1"
  },
  {
    "n": 95,
    "sym": "Am",
    "name": "Americium",
    "mass": "[243]",
    "cat": "actinide",
    "period": 7,
    "group": null,
    "iso": [
      {
        "name": "²⁴¹Am",
        "mass": "241.05683",
        "abundance": "synth",
        "stable": false,
        "halfLife": "432.2 yr"
      },
      {
        "name": "²⁴³Am",
        "mass": "243.06138",
        "abundance": "synth",
        "stable": false,
        "halfLife": "7370 yr"
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d1"
  },
  {
    "n": 96,
    "sym": "Cm",
    "name": "Curium",
    "mass": "[247]",
    "cat": "actinide",
    "period": 7,
    "group": null,
    "iso": [
      {
        "name": "²⁴⁷Cm",
        "mass": "247.07035",
        "abundance": "synth",
        "stable": false,
        "halfLife": "15.6 Myr"
      },
      {
        "name": "²⁴⁸Cm",
        "mass": "248.07235",
        "abundance": "synth",
        "stable": false,
        "halfLife": "340000 yr"
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d1"
  },
  {
    "n": 97,
    "sym": "Bk",
    "name": "Berkelium",
    "mass": "[247]",
    "cat": "actinide",
    "period": 7,
    "group": null,
    "iso": [
      {
        "name": "²⁴⁷Bk",
        "mass": "247.07031",
        "abundance": "synth",
        "stable": false,
        "halfLife": "1380 yr"
      },
      {
        "name": "²⁴⁹Bk",
        "mass": "249.07500",
        "abundance": "synth",
        "stable": false,
        "halfLife": "330 d"
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d1"
  },
  {
    "n": 98,
    "sym": "Cf",
    "name": "Californium",
    "mass": "[251]",
    "cat": "actinide",
    "period": 7,
    "group": null,
    "iso": [
      {
        "name": "²⁵¹Cf",
        "mass": "251.07959",
        "abundance": "synth",
        "stable": false,
        "halfLife": "900 yr"
      },
      {
        "name": "²⁵²Cf",
        "mass": "252.08163",
        "abundance": "synth",
        "stable": false,
        "halfLife": "2.65 yr"
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d1"
  },
  {
    "n": 99,
    "sym": "Es",
    "name": "Einsteinium",
    "mass": "[252]",
    "cat": "actinide",
    "period": 7,
    "group": null,
    "iso": [
      {
        "name": "²⁵²Es",
        "mass": "252.08298",
        "abundance": "synth",
        "stable": false,
        "halfLife": "471.7 d"
      },
      {
        "name": "²⁵³Es",
        "mass": "253.08483",
        "abundance": "synth",
        "stable": false,
        "halfLife": "20.47 d"
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d1"
  },
  {
    "n": 100,
    "sym": "Fm",
    "name": "Fermium",
    "mass": "[257]",
    "cat": "actinide",
    "period": 7,
    "group": null,
    "iso": [
      {
        "name": "²⁵⁷Fm",
        "mass": "257.09511",
        "abundance": "synth",
        "stable": false,
        "halfLife": "100.5 d"
      },
      {
        "name": "²⁵²Fm",
        "mass": "252.08248",
        "abundance": "synth",
        "stable": false,
        "halfLife": "25.39 h"
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d1"
  },
  {
    "n": 101,
    "sym": "Md",
    "name": "Mendelevium",
    "mass": "[258]",
    "cat": "actinide",
    "period": 7,
    "group": null,
    "iso": [
      {
        "name": "²⁵⁸Md",
        "mass": "258.09843",
        "abundance": "synth",
        "stable": false,
        "halfLife": "51.5 d"
      },
      {
        "name": "²⁵⁶Md",
        "mass": "256.09389",
        "abundance": "synth",
        "stable": false,
        "halfLife": "77.7 min"
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d1"
  },
  {
    "n": 102,
    "sym": "No",
    "name": "Nobelium",
    "mass": "[259]",
    "cat": "actinide",
    "period": 7,
    "group": null,
    "iso": [
      {
        "name": "²⁵⁹No",
        "mass": "259.10103",
        "abundance": "synth",
        "stable": false,
        "halfLife": "58 min"
      },
      {
        "name": "²⁵⁵No",
        "mass": "255.09324",
        "abundance": "synth",
        "stable": false,
        "halfLife": "3.1 min"
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d1"
  },
  {
    "n": 103,
    "sym": "Lr",
    "name": "Lawrencium",
    "mass": "[262]",
    "cat": "actinide",
    "period": 7,
    "group": null,
    "iso": [
      {
        "name": "²⁶²Lr",
        "mass": "262.10963",
        "abundance": "synth",
        "stable": false,
        "halfLife": "3.6 h"
      },
      {
        "name": "²⁶⁰Lr",
        "mass": "260.10551",
        "abundance": "synth",
        "stable": false,
        "halfLife": "2.7 min"
      }
    ],
    "melt": 1000,
    "boil": 2000,
    "electronegativity": 2,
    "atomicRadius": 120,
    "electronConfiguration": "[Rn] 7s2 5f14 6d1"
  }
];
