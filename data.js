window.GLOBAL_CHALLENGES = [
  "Iedereen noemt 1 moment dat hij jou waardeert.",
  "Stuur een 10s voice note in de groepsapp: ‘Snel weer ___ doen.’",
  "Hot take: geef een onschuldige controversiële mening (eten/film/muziek).",
  "Laat iemand een woord kiezen; jij maakt er 10 sec rap van.",
  "Kies 1 foto op je telefoon en vertel het verhaal erachter (20 sec)."
];

// Challenges per stuk-type (maak deze lijsten gerust veel langer)
window.TYPE_CHALLENGES = {
  KING: [
    "Wholesome: geef iemand aan tafel een oprecht compliment.",
    "Vertel je favoriete herinnering met de groep (20 sec)."
  ],
  QUEEN: [
    "Chaos round: doe je beste imitatie van iemand uit de groep.",
    "Je mag 1 zet terugdraaien, maar alleen nadat je iemand een compliment geeft."
  ],
  ROOK: [
    "Maak een snelle teamfoto van het bord + gezichten.",
    "No-blink duel: 10 sec staren met je tegenstander."
  ],
  BISHOP: [
    "Vertel een verhaal in 10 sec met 3 woorden die iemand anders kiest.",
    "Kies één ‘underrated’ moment van de avond en verdedig waarom."
  ],
  KNIGHT: [
    "Inside-joke check: vertel een contextloze one-liner en laat anderen raden.",
    "Doe 10 sec ‘sportcommentator’ over de laatste zet."
  ],
  PAWN: [
    "Mini-challenge: noem 1 ding dat je vandaag goed ging.",
    "Leg de laatste zet uit alsof je een schaakcoach bent (10 sec)."
  ]
};

// 32 stukken: id -> title/type/photos
window.CHESS = {
  WK: { title: "Witte Koning", type: "KING", photos: "https://photos.app.goo.gl/zNq6DChUMwLpu6NM6" },
  WQ: { title: "Witte Koningin", type: "QUEEN", photos: "https://photos.app.goo.gl/LmXJr7FWbKZqMnwo8" },

  WR1:{ title: "Witte Toren 1", type:"ROOK", photos:"https://photos.app.goo.gl/XXXXX" },
  WR2:{ title: "Witte Toren 2", type:"ROOK", photos:"https://photos.app.goo.gl/XXXXX" },

  WB1:{ title: "Witte Loper 1", type:"BISHOP", photos:"https://photos.app.goo.gl/XXXXX" },
  WB2:{ title: "Witte Loper 2", type:"BISHOP", photos:"https://photos.app.goo.gl/XXXXX" },

  WN1:{ title: "Wit Paard 1", type:"KNIGHT", photos:"https://photos.app.goo.gl/XXXXX" },
  WN2:{ title: "Wit Paard 2", type:"KNIGHT", photos:"https://photos.app.goo.gl/XXXXX" },

  WP1:{ title: "Witte Pion 1", type:"PAWN", photos:"https://photos.app.goo.gl/XXXXX" },
  WP2:{ title: "Witte Pion 2", type:"PAWN", photos:"https://photos.app.goo.gl/XXXXX" },
  WP3:{ title: "Witte Pion 3", type:"PAWN", photos:"https://photos.app.goo.gl/XXXXX" },
  WP4:{ title: "Witte Pion 4", type:"PAWN", photos:"https://photos.app.goo.gl/XXXXX" },
  WP5:{ title: "Witte Pion 5", type:"PAWN", photos:"https://photos.app.goo.gl/XXXXX" },
  WP6:{ title: "Witte Pion 6", type:"PAWN", photos:"https://photos.app.goo.gl/XXXXX" },
  WP7:{ title: "Witte Pion 7", type:"PAWN", photos:"https://photos.app.goo.gl/XXXXX" },
  WP8:{ title: "Witte Pion 8", type:"PAWN", photos:"https://photos.app.goo.gl/XXXXX" },

  RK: { title: "Roze Koning", type:"KING", photos:"https://photos.app.goo.gl/XXXXX" },
  RQ: { title: "Roze Koningin", type:"QUEEN", photos:"https://photos.app.goo.gl/XXXXX" },

  RR1:{ title:"Roze Toren 1", type:"ROOK", photos:"https://photos.app.goo.gl/XXXXX" },
  RR2:{ title:"Roze Toren 2", type:"ROOK", photos:"https://photos.app.goo.gl/XXXXX" },

  RB1:{ title:"Roze Loper 1", type:"BISHOP", photos:"https://photos.app.goo.gl/XXXXX" },
  RB2:{ title:"Roze Loper 2", type:"BISHOP", photos:"https://photos.app.goo.gl/XXXXX" },

  RN1:{ title:"Roze Paard 1", type:"KNIGHT", photos:"https://photos.app.goo.gl/XXXXX" },
  RN2:{ title:"Roze Paard 2", type:"KNIGHT", photos:"https://photos.app.goo.gl/XXXXX" },

  RP1:{ title:"Roze Pion 1", type:"PAWN", photos:"https://photos.app.goo.gl/XXXXX" },
  RP2:{ title:"Roze Pion 2", type:"PAWN", photos:"https://photos.app.goo.gl/XXXXX" },
  RP3:{ title:"Roze Pion 3", type:"PAWN", photos:"https://photos.app.goo.gl/XXXXX" },
  RP4:{ title:"Roze Pion 4", type:"PAWN", photos:"https://photos.app.goo.gl/XXXXX" },
  RP5:{ title:"Roze Pion 5", type:"PAWN", photos:"https://photos.app.goo.gl/XXXXX" },
  RP6:{ title:"Roze Pion 6", type:"PAWN", photos:"https://photos.app.goo.gl/XXXXX" },
  RP7:{ title:"Roze Pion 7", type:"PAWN", photos:"https://photos.app.goo.gl/XXXXX" },
  RP8:{ title:"Roze Pion 8", type:"PAWN", photos:"https://photos.app.goo.gl/XXXXX" },
};
