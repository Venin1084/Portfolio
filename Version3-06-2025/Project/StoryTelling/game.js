/* DI COSA HO BISOGNO
tel testo princpiale perche cambia a seconda della scelta 
delle opzioni perche devo collegarle a una scelta 
lo faccio prenendo id dato  */
const textElement = document.getElementById('text');
const optionBtn = document.getElementById('option-btn');
const titleSection = document.getElementById('sectionTitle')


/* Poi mi servono delle variabili interne al javascript*/
let state = {}//qui accumularemo i dati che l'uttente a scelto 


/* per far iniziare il gioco abbiamo bisogno di un pezzo di codice che permetta di farlo la migliore opzione sembra essere una funzione */
function startGame() {
  state = {}
  showTextNode(-1);
}

/* per il titolo */
function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text;
  titleSection.innerText = textNode.title || ""; // <- imposta il titolo, se esiste

  /* toglie i bottoni */
  while (optionBtn.firstChild) {
    optionBtn.removeChild(optionBtn.firstChild)
  }

  textNode.options.forEach(option => {
    /* Creazione di un bottone da javascript */
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionBtn.appendChild(button);
    }
  })
}


function showOption(option) {
  return option.requaierdState == null || option.requaierdState(state)
}
/* DObbiamo verificare quale delle opzioni e stata selezionata  */
function selectOption(option) {

  const nextTextNodeId = option.nextText
  /* CI permette di avere un restart */
  if (nextTextNodeId < -1) {
    return startGame();
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)

}
/* HO bisogno di una chiave e valore percio un array di jason */
const textNodes = [
  {
    id: -1,
    title: "Prologo",
    text: "Tu sei Kael Rennar, un giovane archivista cresciuto nella biblioteca di Virelthorn, una cittadella neutrale che raccoglie i saperi del mondo. Un giorno, tra testi dimenticati, scopri l’esistenza di un “Nucleo del Patto”, un artefatto nascosto che è il cuore del legame tra umani e draghi. Non è stato distrutto: è corrotto. E peggio, qualcuno sta cercando di distruggere ciò che resta del patto per soggiogare le creature draconiche e sfruttarle come armi viventi.",
    options: [
      /* PRIMA OPZIONE */
      {
        text: "Avanti",
        nextText: 0,
      },
    ]
  },


  {
    id: 0,
    title: "Scoperta Antica",
    text: "Scopri il Nucleo del Patto nella biblioteca. I draghi stanno morendo, qualcuno sta corrompendo il Patto per controllarli.",
    options: [
      /* PRIMA OPZIONE */
      {
        text: "Parti alla ricerca dei Frammenti del Patto",

        nextText: 1,
      },
      /* SECONDA OPZIONEs */
      {
        text: "Studia ancora, forse ci sono più risposte",
        nextText: 2,
      },
      /* terza opzione */
      {

        text: "Ignora la scoperta e vivi la tua vita",

        nextText: 99,
      },

    ]
  },
  {
    id: 1,
    title: "Viaggio verso la Montagna dei Custodi",
    text: "Ti incammini verso una terra dove si dice esista un frammento del Patto. Lì incontrerai il drago cieco, Aurik-Zen.",
    options: [
      /* PRIMA OPZIONE */
      {
        text: "Avvicinati pacificamente",
        setState: { empatia: true },
        nextText: 3
      },
      /* SECONDA OPZIONEs */
      {
        text: "Preparati a combattere",
        setState: { ostilita: true },
        nextText: 3
      },
    ]
  },

  {
    id: 2,
    title: "Studio Arcano",
    text: "T Scopri antichi rituali per interagire con il Nucleo e i draghi.",
    options: [
      /* PRIMA OPZIONE */
      {
        text: "Impari l'Evocazione Draconica ",
        setState: { evocazione: true },
        nextText: 3
      },
      /* SECONDA OPZIONEs */
      {
        text: "Scopri il nome vero del Nucleo",
        setState: { nomeNucleo: true },
        nextText: 3
      },

    ]
  },
  {
    id: 3,
    title: "Visione del Passato",
    text: "Il drago cieco ti permette di vedere il momento in cui il Patto fu creato. Scopri che un altro Veydran è vivo… ed è corrotto",
    options: [
      /* PRIMA OPZIONE */
      {
        text: "Indaga su questo Veydran mascherato",
        nextText: 4,
      },
      {
        text: "Ascolta ancora Aurik-Zen, c'è altro",
        nextText: 5,
      }
    ]
  },
  {
    id: 4,
    title: "Incontro con l’Innalzatore ",
    text: "Il Veydran sopravvissuto vuole riscrivere il Patto per soggiogare i draghi",
    options: [
      /* PRIMA OPZIONE */
      {
        text: "Opponiti subito",
        nextText: 6
      },
      /* SECONDA OPZIONEs */
      {
        text: "Fingi di allearti per carpire informazioni",
        setState: { doppioGiochista: true },
        nextText: 7
      },
    ]
  },

  {
    id: 5,
    title: "Studio Arcano",
    text: "Ricordi frammentati di Kael rivelano che è l’erede legittimo del Patto. Solo lui può purificarlo",
    options: [
      /* PRIMA OPZIONE */
      {
        text: "Accetta il tuo destino ",
        setState: { prescelto: true }, nextText: 4
      },
      /* SECONDA OPZIONEs */
      {
        text: "Fuggi dalla responsabilità",
        setState: { nomeNucleo: true },
        nextText: 99
      },

    ]
  },
  {

    id: 6,
    title: "Battaglia per il Nucleo",
    text: "Affronti l’Innalzatore. Il risultato dipende dalle scelte fatte: empatia, evocazione, arma, doppioGiochista...",
    options: [
      // 🌿 Finale 1: Equilibrio Ripristinato
      {
        text: "Ripristina l’equilibrio grazie all’empatia",
        requaierdState: (state) => state.prescelto && state.empatia,
        nextText: 100
      },

      // 🦴 Finale 2: Draghi Liberi, Caos
      {
        text: "Evoca i draghi, ignora il Nucleo",
        requaierdState: (state) => state.evoca && !state.nomeNucleo,
        nextText: 101
      },

      // 👑 Finale 3: Dominio Umano
      {
        text: "Usa l’arma e tradisci: domini sui draghi",
        requaierdState: (state) => state.arma && state.doppioGiochista,
        nextText: 102
      },

      // 🔚 Finale 4: Fallimento
      {
        text: "Il potere ti sfugge, l’oscurità vince",
        requaierdState: (state) => !(
          (state.prescelto && state.empatia) ||
          (state.evoca && !state.nomeNucleo) ||
          (state.arma && state.doppioGiochista)
        ),
        nextText: 103
      }
    ]
  }


  ,

  /* FINALI */
  {
    id: 99,
    title: "Finale: L'Oscurità Avanza",
    text: "Hai voltato le spalle al destino. Forse qualcun altro cercherà la verità. O forse è troppo tardi.",
    options: [
      /* PRIMA OPZIONE */
      {
        text: "Restart ",
        nextText: -2,
      },
    ]
  },
  {
    id: 100,
    title: "Finale:Nuovo Patto",
    text: "Kael purifica il Nucleo, i draghi sopravvivono, l’equilibrio è fragile ma stabile. Le magie si indeboliscono, ma torna la pace.",
    options: [
      /* PRIMA OPZIONE */
      {
        text: "Restart ",
        nextText: -2,
      },
    ]

  },
  {
    id: 101,
    title: "Finale: Furia Antica",
    text: "I draghi vengono liberati, ma senza guida. Alcuni regni crollano. Il mondo entra in una nuova era, primitiva e selvaggia..",
    options: [
      /* PRIMA OPZIONE */
      {
        text: "Restart ",
        nextText: -2,
      },
    ]
  },
  {
    id: 102,
    title: "Finale: L’Impero di Kael",
    text: "Kael usa il Patto per controllare i draghi. L’umanità entra in un’era dorata… al costo della libertà altrui.",
    options: [
      /* PRIMA OPZIONE */
      {
        text: "Restart ",
        nextText: -2,
      },
    ]
  },
  {
    id: 103,
    title: "Finale: Tutto è Perduto",
    text: "Il Patto si spezza, il Nucleo esplode in frammenti. Il mondo precipita nel caos. Draghi e uomini si sterminano a vicenda.",
    options: [
      /* PRIMA OPZIONE */
      {
        text: "Restart ",
        nextText: -2,
      },
    ]
  },
]

startGame();//la richiamiamo subito
