/***********************************************
FINAL Project: BEAT-BEAT
MGL


************************************************/

p5.disableFriendlyErrors = true;

let state = 'title'


let gamestart

let music


// let scorePerIcon = 0;
// let scorePerTube = 0;

// let iconScore = (scorePerIcon * currentMultiplier);
// let tubeScore = (scorePerTube * currentMultiplier);

// let score = (iconScore + tubeScore);

let score = 0;

let success = 0;

let currentMultiplier = 1;

//Multiplier threshold :
// X2 = 1 collected
// X3 = 4 collected
// X4 = 8 collected
// X5 = 16 collected
// X6 = 32 collected
// X7 = 64 collected
// X8 = 128 collected
// X9 = 256 collected

let tubeMusicData = [
  {
    cue: 8.20,
    startX: 556,
    startY: 171,
    endX: 787,
    endY: 171
  },

  {
    cue: 14.94,
    startX: 526,
    startY: 223,
    endX: 787,
    endY: 171
  },

  {
    cue: 18.29,
    startX: 119,
    startY: 117,
    endX: 93.4,
    endY: 430
  },

  {
    cue: 22.00,
    startX: 731,
    startY: 380,
    endX: 866,
    endY: 277
  },

  {
    cue: 39.4,
    startX: 800,
    startY: 500,
    endX: 800,
    endY: 170
  },


  {
    cue: 53.26,
    startX: 800,
    startY: 320,
    endX: 680,
    endY: 480
  },


  {
    cue: 63,
    startX: 525,
    startY: 450,
    endX: 400,
    endY: 390
  },

//part2


{
    cue: (5.1 + 64.04),
    startX: 450,
    startY: 515,
    endX: 320,
    endY: 485
  },
  {
    cue: (5.6 + 64.04),
    startX: 216,
    startY: 450,
    endX: 135,
    endY: 385
  },

  {
    cue: 12.2 + 64.04,
    startX: 560,
    startY: 270,
    endX: 560,
    endY: 510
  },

  {
    cue: 19.9 + 64.04,
    startX: 685,
    startY: 470,
    endX: 430,
    endY: 470
  },

  {
    cue: 26.6 + 64.04,
    startX: 268,
    startY: 269,
    endX: 480,
    endY: 300
  },

  //Part3

  {
    cue: (6.6 + 64.04 + 31.05),
    startX: 700,
    startY: 135,
    endX: 700,
    endY: 465
  },

  {
    cue: (13.19 + 64.04 + 31.05),
    startX: 825,
    startY: 190,
    endX: 595,
    endY: 317
  },


]


let musicData = [
  {
    cue: 5.21,
    x: 110,
    y: 131,
    size: 117
  },
  {
    cue: 5.8,
    x: 234,
    y: 131,
    size: 117
  },
  {
    cue: 6.16,
    x: 337,
    y: 185,
    size: 117
  },
  {
    cue: 7.04,
    x: 390,
    y: 245,
    size: 117
  },


  {
    cue: 7.12,
    x: 433,
    y: 284,
    size: 117
  },
  {
    cue: 7.20,
    x: 480,
    y: 321,
    size: 117
  },
  {
    cue: 8.02,
    x: 520,
    y: 263,
    size: 117
  },
  {
    cue: 9.90 ,
    x: 787,
    y: 297,
    size: 117
  },
  {
    cue: 10.37 ,
    x: 787,
    y: 396,
    size: 117

  },
  {
    cue: 10.56 ,
    x: 787,
    y: 513,
    size: 117
  },
  {
    cue: 10.73,
    x: 693,
    y: 513,
    size: 117
  },
  {
    cue: 11.26 ,
    x: 612,
    y: 513,
    size: 117
  },
  {
    cue: 11.39,
    x: 531,
    y: 513,
    size: 117
  },


  {
    cue: 13.08,
    x: 230,
    y: 420,
    size: 117
  },
  {
    cue: 13.96,
    x: 230,
    y: 300,
    size: 117
  },
  {
    cue: 14.04,
    x: 316,
    y: 300,
    size: 117
  },
  {
    cue: 14.12,
    x: 397,
    y: 300,
    size: 117
  },

  {
    cue: 16.25,
    x: 659,
    y: 90,
    size: 117
  },
  {
    cue: 17.16,
    x: 529,
    y: 117,
    size: 117
  },
  {
    cue: 17.36,
    x: 449,
    y: 117
  },
  {
    cue: 17.56,
    x: 389,
    y: 117,
    size: 117
  },
  {
    cue: 18.14,
    x: 259,
    y: 117,
    size: 117
  },

  {
    cue: 20.04,
    x: 179,
    y: 500,
    size: 117
  },
  {
    cue: 20.44,
    x: 341,
    y: 500,
    size: 117
  },
  {
    cue: 20.64,
    x: 421,
    y: 500,
    size: 117
  },
  {
    cue: 20.84,
    x: 501,
    y: 500,
    size: 117
  },
  {
    cue: 21.16,
    x: 639,
    y: 450,
    size: 117
  },

  {
    cue: 23.16,
    x: 866,
    y: 170,
    size: 117
  },
  {
    cue: 23.46,
    x: 722,
    y: 170,
    size: 117
  },
  {
    cue: 23.66,
    x: 646,
    y: 170,
    size: 117
  },
  {
    cue: 23.86,
    x: 566,
    y: 170,
    size: 117
  },
  {
    cue: 25.06,
    x: 436,
    y: 170,
    size: 117
  },
  {
    cue: 25.76,
    x: 326,
    y: 170,
    size: 117
  },

  {
    cue: 27.09,
    x: 126+40,
    y: 458,
    size: 180
  },
  {
    cue: 28.09,
    x: 722+90,
    y: 458,
    size: 180
  },
  {
    cue: 29.09,
    x: 126+40,
    y: 258,
    size: 180
  },
  {
    cue: 29.79,
    x: 722+90,
    y: 257,
    size: 180
  },
  {
    cue: 30.72,
    x: 126+40,
    y: 458,
    size: 180
  },
  {
    cue: 31.74,
    x: 722+90,
    y: 458,
    size: 180
  },
  {
    cue: 32.63,
    x: 126+40,
    y: 117,
    size: 180
  },
  {
    cue: 33.00,
    x: 722+90,
    y: 117,
    size: 180
  },

  {
    cue: 34,
    x: 660,
    y: 200,
    size: 140
  },
  {
    cue: 34.19,
    x: 565,
    y: 297,
    size: 128
  },
  {
    cue: 34.59,
    x: 500,
    y: 297,
    size: 128
  },
  {
    cue: 35.15,
    x: 494,
    y: 200,
    size: 117
  },
  {
    cue: 35.34,
    x: 381+30,
    y: 200,
    size: 117
  },
  {
    cue: 35.54,
    x: 297+30,
    y: 200,
    size: 117
  },
  {
    cue: 35.74,
    x: 217+30,
    y: 200,
    size: 117
  },
  {
    cue: 36.09,
    x: 127+40,
    y: 270,
    size: 117
  },

  {
    cue: 37.19,
    x: 360,
    y: 500,
    size: 140
  },
  {
    cue: 37.40,
    x: 480,
    y: 380,
    size: 128
  },
  {
    cue: 37.85,
    x: 560,
    y: 380,
    size: 120
  },
  {
    cue: 38.3,
    x: 640,
    y: 380,
    size: 117
  },
  {
    cue: 39,
    x: 640,
    y: 500,
    size: 117
  },
  {
    cue: 39.2,
    x: 720,
    y: 500,
    size: 117
  },


  {
    cue: 40.4,
    x: 700,
    y: 120,
    size: 117
  },
  {
    cue: 41.1,
    x: 620,
    y: 120,
    size: 117
  },
  {
    cue: 41.8,
    x: 520,
    y: 200,
    size: 117
  },
  {
    cue: 42.3,
    x: 450,
    y: 200,
    size: 117
  },
  {
    cue: 42.5,
    x: 380,
    y: 200,
    size: 117
  },
  {
    cue: 42.7,
    x: 310,
    y: 200,
    size: 117
  },
  {
    cue: 43.5,
    x: 310,
    y: 340,
    size: 117
  },
  {
    cue: 44.1,
    x: 450,
    y: 340,
    size: 117
  },
  {
    cue: 44.8,
    x: 520,
    y: 340,
    size: 117
  },
  {
    cue: 45.2,
    x: 590,
    y: 340,
    size: 117
  },
  {
    cue: 45.8,
    x: 660,
    y: 340,
    size: 117
  },
  {
    cue: 46.2,
    x: 730,
    y: 340,
    size: 117
  },
  {
    cue: 46.6,
    x: 800,
    y: 340,
    size: 117
  },

  {
    cue: 47.27,
    x: 680,
    y: 490,
    size: 117
  },
  {
    cue: 48.16,
    x: 570,
    y: 390,
    size: 117
  },
  {
    cue: 48.35,
    x: 460,
    y: 390,
    size: 117
  },
  {
    cue: 49.1,
    x: 390,
    y: 490,
    size: 117
  },
  {
    cue: 49.55,
    x: 320,
    y: 490,
    size: 117
  },
  {
    cue: 49.8,
    x: 250,
    y: 490-40,
    size: 117
  },

  {
    cue: 50.13,
    x: 400,
    y: 360-40,
    size: 117
  },
  {
    cue: 51,
    x: 550,
    y: 230-40,
    size: 117
  },
  {
    cue: 51.5,
    x: 660,
    y: 140-40,
    size: 117
  },
  {
    cue: 52.04,
    x: 730,
    y: 200-40,
    size: 117
  },
  {
    cue: 52.4,
    x: 730,
    y: 260-40,
    size: 117
  },
  {
    cue: 52.8,
    x: 800,
    y: 320-40,
    size: 117
  },
  {
    cue: 52.8,
    x: 800,
    y: 320-40,
    size: 117
  },

  {
    cue: 54.14,
    x: 570,
    y: 510,
    size: 117
  },
  {
    cue: 54.64,
    x: 490,
    y: 510,
    size: 117
  },
  {
    cue: 55.34,
    x: 400,
    y: 390,
    size: 117
  },
  {
    cue: 55.64,
    x: 340,
    y: 390,
    size: 117
  },
  {
    cue: 55.94,
    x: 280,
    y: 390,
    size: 117
  },
  {
    cue: 56.74,
    x: 170,
    y: 320,
    size: 117
  },
  {
    cue: 57.44,
    x: 160,
    y: 260,
    size: 117
  },
  {
    cue: 58,
    x: 170,
    y: 220,
    size: 117
  },

  {
    cue: 58.25,
    x: 285,
    y: 150,
    size: 117
  },
  {
    cue: 58.75,
    x: 366,
    y: 70,
    size: 117
  },
  {
    cue: 59.05,
    x: 446,
    y: 150,
    size: 117
  },
  {
    cue: 59.35,
    x: 535,
    y: 70,
    size: 117
  },
  {
    cue: 59.70,
    x: 625,
    y: 150,
    size: 117
  },
  {
    cue: 60,
    x: 713,
    y: 70,
    size: 117
  },
  {
    cue: 60.28,
    x: 799,
    y: 150,
    size: 117
  },

  {
    cue: 61.28,
    x: 799,
    y: 250,
    size: 117
  },
  {
    cue: 61.9,
    x: 799,
    y: 370,
    size: 117
  },
  {
    cue: 62.13,
    x: 799,
    y: 450,
    size: 117
  },
  {
    cue: 62.4,
    x: 615,
    y: 390,
    size: 117
  },

  {
    cue: 64.04,
    x: 480,
    y: 300,
    size: 180
  },


//part2


{
    cue: (1.41 + 64.04),
    x: 341,
    y: 207,
    size: 117
  },
  {
    cue: (1.9 + 64.04),
    x: 480,
    y: 126,
    size: 117
  },
  {
    cue: (2.15 + 64.04),
    x: 613,
    y: 207,
    size: 117
  },
  {
    cue: 2.9 + 64.04,
    x: 667,
    y: 264,
    size: 117
  },
  {
    cue: 3.1 + 64.04,
    x: 700,
    y: 341,
    size: 117
  },
  {
    cue: 3.75 + 64.04,
    x: 639,
    y: 423,
    size: 117
  },
  {
    cue: 4.5 + 64.04,
    x: 575,
    y: 490,
    size: 117
  },

  {
    cue: 7.5 + 64.04,
    x: 135,
    y: 265,
    size: 117
  },
  {
    cue: 8.2 + 64.04,
    x: 135,
    y: 190,
    size: 117
  },
  {
    cue: 8.4 + 64.04,
    x: 135,
    y: 90,
    size: 117
  },
  {
    cue: 8.8 + 64.04,
    x: 264,
    y: 90,
    size: 117
  },

  {
    cue: 9.1 + 64.04,
    x: 264,
    y: 190,
    size: 117
  },

  {
    cue: 9.38 + 64.04,
    x: 320,
    y: 300,
    size: 137
  },
  {
    cue: 9.68 + 64.04,
    x: 400,
    y: 430,
    size: 147
  },
  {
    cue: 9.85 + 64.04,
    x: 520,
    y: 490,
    size: 157
  },

  {
    cue: 10.95 + 64.04,
    x: 810,
    y: 90,
    size: 180
  },
  {
    cue: 11.3 + 64.04,
    x: 730,
    y: 125,
    size: 117
  },
  {
    cue: 11.7 + 64.04,
    x: 650,
    y: 180,
    size: 117
  },
  {
    cue: 12 + 64.04,
    x: 560,
    y: 220,
    size: 117
  },

  {
    cue: 15 + 64.04,
    x: 417,
    y: 487,
    size: 117
  },
  {
    cue: 15.3 + 64.04,
    x: 417,
    y: 387,
    size: 117
  },
  {
    cue: 15.6 + 64.04,
    x: 417,
    y: 267,
    size: 117
  },
  {
    cue: 15.8 + 64.04,
    x: 417,
    y: 207,
    size: 117
  },
  {
    cue: 16.17 + 64.04,
    x: 340,
    y: 155,
    size: 117
  },
  {
    cue: 16.55 + 64.04,
    x: 500,
    y: 155,
    size: 117
  },
  {
    cue: 16.9 + 64.04,
    x: 580,
    y: 155,
    size: 117
  },
  {
    cue: 17.15 + 64.04,
    x: 640,
    y: 155,
    size: 117
  },
  {
    cue: 17.43 + 64.04,
    x: 720,
    y: 155,
    size: 117
  },
  {
    cue: 17.83 + 64.04,
    x: 790,
    y: 195,
    size: 117
  },
  {
    cue: 18.27 + 64.04,
    x: 640,
    y: 255,
    size: 117
  },
  {
    cue: 18.67 + 64.04,
    x: 660,
    y: 330,
    size: 117
  },
  {
    cue: 19.07 + 64.04,
    x: 720,
    y: 400,
    size: 117
  },
  {
    cue: 19.47 + 64.04,
    x: 780,
    y: 470,
    size: 117
  },

  {
    cue: 21.4 + 64.04,
    x: 252,
    y: 390,
    size: 117
  },
  {
    cue: 22.06 + 64.04,
    x: 323,
    y: 324,
    size: 117
  },
  {
    cue: 22.76 + 64.04,
    x: 252,
    y: 232,
    size: 117
  },
  {
    cue: 23.17 + 64.04,
    x: 152,
    y: 232,
    size: 117
  },
  {
    cue: 23.55 + 64.04,
    x: 90,
    y: 210,
    size: 117
  },
  {
    cue: 23.95 + 64.04,
    x: 90,
    y: 130,
    size: 117
  },
  {
    cue: 24.35 + 64.04,
    x: 217,
    y: 75,
    size: 117
  },
  {
    cue: 25 + 64.04,
    x: 90,
    y: 130,
    size: 117
  },
  {
    cue: 25.5 + 64.04,
    x: 90,
    y: 210,
    size: 117
  },
  {
    cue: 26.1 + 64.04,
    x: 170,
    y: 232,
    size: 117
  },


//Part3

{
    cue: 0.09 + 64.04 + 31.05,
    x: 655,
    y: 230,
    size: 144
  },
  {
    cue: 0.27 + 64.04 + 31.05,
    x: 870,
    y: 120,
    size: 144
  },
  {
    cue: 1.14 + 64.04 + 31.05,
    x: 870,
    y: 480,
    size: 144
  },
  {
    cue: 2.08 + 64.04 + 31.05,
    x: 655,
    y: 370,
    size: 144
  },
  {
    cue: 3 + 64.04 + 31.05,
    x: 510,
    y: 311,
    size: 117
  },
  {
    cue: 3.15 + 64.04 + 31.05,
    x: 430,
    y: 311,
    size: 117
  },
  {
    cue: 3.35 + 64.04 + 31.05,
    x: 350,
    y: 311,
    size: 117
  },
  {
    cue: 3.8 + 64.04 + 31.05,
    x: 270,
    y: 311,
    size: 117
  },
  {
    cue: 4 + 64.04 + 31.05,
    x: 190,
    y: 245,
    size: 117
  },
  {
    cue: 4.17 + 64.04 + 31.05,
    x: 190,
    y: 380,
    size: 117
  },

  {
    cue: 4.63 + 64.04 + 31.05,
    x: 232,
    y: 311,
    size: 117
  },
  {
    cue: 4.95 + 64.04 + 31.05,
    x: 310,
    y: 245,
    size: 117
  },
  {
    cue: 5.3 + 64.04 + 31.05,
    x: 380,
    y: 380,
    size: 117
  },
  {
    cue: 5.5 + 64.04 + 31.05,
    x: 430,
    y: 311,
    size: 117
  },
  {
    cue: 5.85 + 64.04 + 31.05,
    x: 480,
    y: 240,
    size: 117
  },
  {
    cue: 6.15 + 64.04 + 31.05,
    x: 520,
    y: 170,
    size: 117
  },
  {
    cue: 6.3 + 64.04 + 31.05,
    x: 570,
    y: 100,
    size: 117
  },

  {
    cue: 8.05 + 64.04 + 31.05,
    x: 570+30,
    y: 4850,
    size: 127
  },
  {
    cue: 8.2 + 64.04 + 31.05,
    x: 520+30,
    y: 430,
    size: 127
  },
  {
    cue: 8.35 + 64.04 + 31.05,
    x: 480+30,
    y: 360,
    size: 127
  },
  {
    cue: 8.5 + 64.04 + 31.05,
    x: 430+30,
    y: 290,
    size: 135
  },
  {
    cue: 8.65 + 64.04 + 31.05,
    x: 380+30,
    y: 220,
    size: 135
  },
  {
    cue: 8.8 + 64.04 + 31.05,
    x: 330+30,
    y: 150,
    size: 135
  },
  {
    cue: 8.95 + 64.04 + 31.05,
    x: 260,
    y: 220,
    size: 155
  },
  {
    cue: 9.3 + 64.04 + 31.05,
    x: 160,
    y: 290,
    size: 155
  },
  {
    cue: 10.10 + 64.04 + 31.05,
    x: 160,
    y: 360,
    size: 125
  },
  {
    cue: 10.25 + 64.04 + 31.05,
    x: 160,
    y: 430,
    size: 117
  },
  {
    cue: 10.4  + 64.04 + 31.05,
    x: 160,
    y: 500,
    size: 117
  },
  {
    cue: 10.55  + 64.04 + 31.05,
    x: 220,
    y: 500,
    size: 117
  },
  {
    cue: 10.7  + 64.04 + 31.05,
    x: 280,
    y: 500,
    size: 117
  },

  {
    cue: 11.2  + 64.04 + 31.05,
    x: 600,
    y: 500,
    size: 117
  },
  {
    cue: 12  + 64.04 + 31.05,
    x: 740,
    y: 500,
    size: 117
  },
  {
    cue: 12.17  + 64.04 + 31.05,
    x: 825,
    y: 500,
    size: 117
  },
  {
    cue: 13.05  + 64.04 + 31.05,
    x: 825,
    y: 384,
    size: 117
  },
  {
    cue: 13.13  + 64.04 + 31.05,
    x: 825,
    y: 314,
    size: 117
  },

  {
    cue: 14.45  + 64.04 + 31.05,
    x: 200,
    y: 317,
    size: 160
  },
  {
    cue: 15.04  + 64.04 + 31.05,
    x: 320,
    y: 317,
    size: 117
  },
  {
    cue: 15.17  + 64.04 + 31.05,
    x: 380,
    y: 317,
    size: 117
  },
  {
    cue: 15.23  + 64.04 + 31.05,
    x: 480,
    y: 317,
    size: 117
  },
  {
    cue: 16.1  + 64.04 + 31.05,
    x: 540,
    y: 317,
    size: 117
  },
  {
    cue: 16.25  + 64.04 + 31.05,
    x: 640,
    y: 317,
    size: 117
  },
  {
    cue: 17.04  + 64.04 + 31.05,
    x: 700,
    y: 317,
    size: 117
  },

  {
    cue: 18.18  + 64.04 + 31.05,
    x: 800,
    y: 155,
    size: 117
  },

  {
    cue: 19  + 64.04 + 31.05,
    x: 800,
    y: 430,
    size: 117
  },

  {
    cue: 20  + 64.04 + 31.05,
    x: 675,
    y: 293,
    size: 117
  },
  {
    cue: 20.3  + 64.04 + 31.05,
    x: 540,
    y: 293,
    size: 117
  },
  {
    cue: 21.06  + 64.04 + 31.05,
    x: 450,
    y: 293,
    size: 117
  },
  {
    cue: 21.12  + 64.04 + 31.05,
    x: 350,
    y: 193,
    size: 132
  },
  {
    cue: 21.2  + 64.04 + 31.05,
    x: 350,
    y: 393,
    size: 132
  },

  {
    cue: 21.75  + 64.04 + 31.05,
    x: 568,
    y: 293,
    size: 117
  },
  {
    cue: 22.12  + 64.04 + 31.05,
    x: 700,
    y: 293,
    size: 117
  },
  {
    cue: 22.27  + 64.04 + 31.05,
    x: 822,
    y: 123,
    size: 140
  },
  {
    cue: 23.1  + 64.04 + 31.05,
    x: 822,
    y: 460,
    size: 140
  },

  {
    cue: 24  + 64.04 + 31.05,
    x: 620,
    y: 460,
    size: 140
  },
  {
    cue: 24.17 + 64.04 + 31.05,
    x: 450,
    y: 370,
    size: 140
  },
  {
    cue: 24.17 + 64.04 + 31.05,
    x: 320,
    y: 320,
    size: 140
  },
  {
    cue: 25 + 64.04 + 31.05,
    x: 220,
    y: 280,
    size: 140
  },
  {
    cue: 25.17 + 64.04 + 31.05,
    x: 320,
    y: 190,
    size: 140
  },
  {
    cue: 26 + 64.04 + 31.05,
    x: 385,
    y: 135,
    size: 140
  },
  {
    cue: 26.25 + 64.04 + 31.05,
    x: 460,
    y: 80,
    size: 140
  },

  {
    cue: 27 + 64.04 + 31.05,
    x: 700,
    y: 145,
    size: 140
  },
  {
    cue: 27.18 + 64.04 + 31.05,
    x: 425,
    y: 222,
    size: 210
  },
  {
    cue: 27.39 + 64.04 + 31.05,
    x: 600,
    y: 327,
    size: 210
  },
  {
    cue: 27.67 + 64.04 + 31.05,
    x: 453,
    y: 407,
    size: 210
  },
  {
    cue: 28 + 64.04 + 31.05,
    x: 550,
    y: 502,
    size: 140
  },







];


let icons = [];

let tubes = [];

let backdrop;

// point of reference for the mouse location
let mouseEllipse = {
  size: 20
}

//Preloads the assets

function preload() {
  music = loadSound("assets/sounds/GorillazFeelGoodInc.mp3");

  gamestart = loadImage("assets/images/gamestart.png");

  backdrop = loadImage("assets/images/TheDrop1.png");

}

function setup() {
  createCanvas(960, 600);

  for (let i = 0; i < musicData.length; i++) {
    let data = musicData[i];
    let icon = new Icon(data.x, data.y, data.size);
    music.addCue(data.cue, function () {
      icon.fadeDirection = 1;
    })
    icons.push(icon);
  }

  for (let i = 0; i < tubeMusicData.length; i++) {
    let data = tubeMusicData[i];
    let tube = new Tube(data.startX, data.startY, data.endX, data.endY);
    music.addCue(data.cue, function () {
      tube.fadeDirection = 1;
    })
    tubes.push(tube);
  }

}

// Indication of the state
function statemachine() {
  if (state === `title`) {
    title();
  } else if (state === `game`) {
    displayBackdrop();
    game();
    multiplierActivation();



    displayMouseEllipse();
  }
}

function title() {
  imageMode(CENTER);
  image(gamestart, 480, 300);
}

function displayBackdrop() {
  imageMode(CENTER);
  image(backdrop, 480, 300);
}

// Game state function
function game() {
  for (let i = 0; i < icons.length; i++) {
    icons[i].update();
  }
  for (let i = 0; i < tubes.length; i++) {
    tubes[i].update();
  }



  // Displays the current score
  // fill(255, 255, 255);
  text('Multiplier:  x', 10, 565);
  textSize(22.5);
  text(currentMultiplier, 135, 565);
  textSize(22.5);



  // Displays the current score
  text('SCORE:', 10, 590);
  textSize(22.5);
  text(score, 117, 590);
  textSize(22.5);

}


function draw() {

  frameRate(15);
  pixelDensity(0.495)

  background(211);



  statemachine();

}

function mousePressed() {
  //Click to transition to the next state
  if (state === "title") {
    state = 'game';
  }
  if (!music.isPlaying()) {
    music.loop();
  }

  if (state === "game") {
    for (let i = 0; i < icons.length; i++) {
      icons[i].mousePressed();
    }
    for (let i = 0; i < tubes.length; i++) {
      tubes[i].mousePressed();
    }

  }
}

function keyPressed() {
  if (state === "game") {
    for (let i = 0; i < icons.length; i++) {
      icons[i].keyPressed();
    }

  }
}

function mouseReleased() {
  if (state === "game") {
    for (let i = 0; i < tubes.length; i++) {
      tubes[i].mouseReleased();
    }
  }
}

// function which display a reference for the mouse location
  function displayMouseEllipse() {
  push();
  noStroke();
  fill(0, 255, 0);
  ellipse(mouseX, mouseY, mouseEllipse.size);
  pop();
}

function multiplierActivation() {
  currentMultiplier = 1 + success;
}
