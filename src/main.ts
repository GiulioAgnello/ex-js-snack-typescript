// Sanck 1

let value: unknown;

if (typeof value === "string") {
  console.log(value.toUpperCase());
} else if (typeof value === "number") {
  console.log(value * 2);
} else if (typeof value === "boolean") {
  console.log(value ? "si" : "no");
} else if (value === null) {
  console.log("il dato è vuoto");
} else if (Array.isArray(value)) {
  console.log(value.length);
} else if (value instanceof Promise) {
  value.then((mess) => console.log(mess));
} else {
  console.log("Tipo non supportato");
}

// Sanck 2

type Dipendente = {
  nome: string;
  cognome: string;
  annoNascita: number;
  sesso: "m" | "F";
  anniDiServizio: number[];
  readonly emailAziendale: string;
  contratto: "indeterminato" | "determinato" | "freelance";
};

// Snack 3

type Developer = Dipendente & {
  livelloEsperienza: "junior" | "mid" | "senior";
  linguaggi?: string[];
  certificazioni: string[];
};

type ProjectManager = Dipendente & {
  teamSize: number | null;
  budgetGestito?: number;
  stakeholderPrincipali: string[];
};

type Team = {
  nome: string;
  progettoattuale: string | null;
  budget: number;
  membri: [ProjectManager, Developer, ...Developer[]];
};
