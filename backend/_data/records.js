const records = [
  {
    _id: "5f4b514b5d2c12c7449be200",
    zone: "5f2b514b5d2c12c7449be000", // Référence à la zone
    typeAction: "Comptage",
    agent: "5f1a514b5d2c12c7449be001", // Référence à l'agent
    codeBarre: "4006381333931", // Code-barres unique correspondant à l'action
    quantite: 15, // Quantité comptée
    dateAction: "2024-06-01T10:00:00.000Z", // Date de l'action
  },
  {
    _id: "5f4b514b5d2c12c7449be201",
    zone: "5f2b514b5d2c12c7449be001",
    typeAction: "Bipage",
    agent: "5f1a514b5d2c12c7449be002",
    codeBarre: "4006381333948",
    quantite: null, // Pas de quantité pour le Bipage
    dateAction: "2024-06-02T11:00:00.000Z",
  },
  {
    _id: "5f4b514b5d2c12c7449be202",
    zone: "5f2b514b5d2c12c7449be002",
    typeAction: "Contrôle",
    agent: "5f1a514b5d2c12c7449be003",
    codeBarre: "4006381333955",
    quantite: null,
    dateAction: "2024-06-03T12:00:00.000Z",
  },
  {
    _id: "5f4b514b5d2c12c7449be203",
    zone: "5f2b514b5d2c12c7449be003",
    typeAction: "Comptage",
    agent: "5f1a514b5d2c12c7449be004",
    codeBarre: "4006381333962",
    quantite: 25,
    dateAction: "2024-07-01T09:00:00.000Z",
  },
  {
    _id: "5f4b514b5d2c12c7449be204",
    zone: "5f2b514b5d2c12c7449be004",
    typeAction: "Bipage",
    agent: "5f1a514b5d2c12c7449be005",
    codeBarre: "4006381333979",
    quantite: null,
    dateAction: "2024-07-02T14:00:00.000Z",
  },
  {
    _id: "5f4b514b5d2c12c7449be205",
    zone: "5f2b514b5d2c12c7449be005",
    typeAction: "Contrôle",
    agent: "5f1a514b5d2c12c7449be006",
    codeBarre: "4006381333986",
    quantite: null,
    dateAction: "2024-07-03T15:00:00.000Z",
  },
];

export default records;