import "./style.css";

const indiziCalciatore = document.getElementById("indizi-container");
const calciatoreContainer = document.getElementById("calciatore-container");
const rispostaCalciatore = document.getElementById("risposta-calciatore");
const punteggioContainer = document.getElementById("punteggio-container");
const messaggioContainer = document.getElementById("messaggio-container");
const tentativiRimasti = document.getElementById("tentativi-rimasti");
const btnSend = document.getElementById("invia-risposta");
const btnNextCard = document.getElementById("next-card");

const calciatori = [
  {
    nome: "Lionel Messi",
    squadra: "Inter Miami",
    nazionalità: "Argentina",
    ruolo: "Attaccante",
    immagine: "/img/messi.jpg",
    indizi: [
      "Ha vinto più Palloni d'Oro di chiunque altro.",
      "Ha giocato per il Barcellona per quasi tutta la carriera.",
      "È argentino e ha vinto il Mondiale 2022.",
    ],
  },
  {
    nome: "Cristiano Ronaldo",
    squadra: "Al-Nassr",
    nazionalità: "Portogallo",
    ruolo: "Attaccante",
    immagine: "/img/ronaldo.jpg",
    indizi: [
      "Ha giocato nella juventus",
      "Ha vinto 5 Palloni d'Oro e giocato in Premier League, La Liga e Serie A.",
      "È l'unico giocatore ad aver vinto la Champions League con due club diversi e a segnare in 5 edizioni consecutive del Mondiale.",
    ],
  },
  {
    nome: "Kylian Mbappé",
    squadra: "Paris Saint-Germain",
    nazionalità: "Francia",
    ruolo: "Attaccante",
    immagine: "/img/mbappe.jpg",
    indizi: [
      "Ha vinto un Mondiale nel 2018",
      "È noto per la sua velocità pazzesca (oltre 36 km/h) e per aver segnato una tripletta in una finale di Mondiale.",
      "Ha esordito in Champions League a 16 anni.",
    ],
  },
  {
    nome: "Erling Haaland",
    squadra: "Manchester City",
    nazionalità: "Norvegia",
    ruolo: "Attaccante",
    immagine: "/img/haaland.jpg",
    indizi: [
      "soprannominato 'Cyborg' per la sua forza fisica.",
      "È figlio di un ex calciatore del Leeds.",
      "Adora celebrare i gol mimando la meditazione.",
    ],
  },
  {
    nome: "Kevin De Bruyne",
    squadra: "Manchester City",
    nazionalità: "Belgio",
    ruolo: "Centrocampista",
    immagine: "/img/debruyne.jpg",
    indizi: [
      "ha vinto 5 Premier League",
      "Detiene il record di assist in una stagione di Premier League (20)",
      "Gioca con il numero 17.",
    ],
  },
  {
    nome: "Luka Modrić",
    squadra: "Real Madrid",
    nazionalità: "Croazia",
    ruolo: "Centrocampista",
    immagine: "/img/modric.jpg",
    indizi: [
      " vincitore del Pallone d'Oro 2018",
      "È l'unico giocatore a vincere il Pallone d'Oro spezzando il dominio di Messi e Ronaldo",
      "Soprannominato 'Il Professore'.",
    ],
  },
  {
    nome: "Robert Lewandowski",
    squadra: "Barcellona",
    nazionalità: "Polonia",
    ruolo: "Attaccante",
    immagine: "/img/lewandowski.jpg",
    indizi: [
      "Ha segnato 5 gol in 9 minuti in Bundesliga.",
      "Detiene il record di gol in una stagione di Bundesliga (41).",
      "Nel 2020 ha vinto il premio FIFA The Best, ma non il Pallone d'Oro",
    ],
  },
  {
    nome: "Harry Kane",
    squadra: "Bayern Monaco",
    nazionalità: "Inghilterra",
    ruolo: "Attaccante",
    immagine: "/img/kane.jpg",
    indizi: [
      "miglior marcatore della storia dei Three Lions",
      "Ha segnato 30+ gol in 6 stagioni di Premier League con il Tottenham",
      "Tifa l’Arsenal ma ha giocato solo per il Tottenham.",
    ],
  },
  {
    nome: "Vinícius Júnior",
    squadra: "Real Madrid",
    nazionalità: "Brasile",
    ruolo: "Attaccante",
    immagine: "/img/vinicius.jpg",
    indizi: [
      "Noto per la sua velocità e dribbling. Ha vinto la Champions League a 22 anni.",
      "Nel 2022 ha segnato il gol decisivo in finale di Champions League",
      "Celebra ballando il 'Vini Dance'.",
      ,
    ],
  },
  {
    nome: "Neymar",
    squadra: "Al Hilal",
    nazionalità: "Brasile",
    ruolo: "Attaccante",
    immagine: "/img/neymar.jpg",
    indizi: [
      "il trasferimento più costoso della storia",
      "Giocava nel PSG ed è famoso per i suoi dribbling.",
      "Nel 2023 si è trasferito in Arabia Saudita.",
      ,
    ],
  },
  {
    nome: "Pedri",
    squadra: "Barcellona",
    nazionalità: "Spagna",
    ruolo: "Centrocampista",
    immagine: "/img/pedri.jpg",
    indizi: [
      "Considerato l'erede di Iniesta",
      "A 18 anni ha giocato 73 partite in una stagione tra club e nazionale",
      "Gioca con il numero 8",
      ,
    ],
  },
  {
    nome: "Jude Bellingham",
    squadra: "Real Madrid",
    nazionalità: "Inghilterra",
    ruolo: "Centrocampista",
    immagine: "/img/bellingham.jpg",
    indizi: [
      "È il più giovane capitano della storia del Borussia Dortmund.",
      "Nel 2023 ha segnato gol in 4 partite consecutive di Champions League",
      "Celebra i gol aprendo le braccia come un supereroe",
      ,
    ],
  },
  {
    nome: "Sandro Tonali",
    squadra: "Newcastle",
    nazionalità: "Italia",
    ruolo: "Centrocampista",
    immagine: "/img/tonali.jpg",
    indizi: [
      "Soprannominato 'Il nuovo Pirlo' per il suo stile di gioco.",
      "Ha vinto lo Scudetto col Milan dopo 11 anni.",
      "Tifoso del Brescia ma ha giocato per Milan e Newcastle",
      ,
    ],
  },
  {
    nome: "Victor Osimhen",
    squadra: "Napoli",
    nazionalità: "Nigeria",
    ruolo: "Attaccante",
    immagine: "/img/osimhen.jpg",
    indizi: [
      "Capocannoniere nel 2023 e noto per la sua esplosività",
      "Ha segnato 31 gol in una stagione col Napoli, vincendo lo Scudetto dopo 33 anni",
      "Indossa sempre una maschera protettiva dopo un infortunio.",
    ],
  },
  {
    nome: "Gianluigi Donnarumma",
    squadra: "Paris Saint-Germain",
    nazionalità: "Italia",
    ruolo: "Portiere",
    immagine: "/img/donnarumma.jpg",
    indizi: [
      "Ha vinto gli Europei 2020",
      "A 16 anni ha esordito in Serie A.",
      "Nel 2023 ha parato 3 rigori in una finale di coppa",
      ,
    ],
  },
];

