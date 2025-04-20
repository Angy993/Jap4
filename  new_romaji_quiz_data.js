const data = [
  {
    "italiano": "Mangiare",
    "romaji": "taberu",
    "frase": "Watashi wa sushi o taberu.",
    "traduzione": "Mangio sushi.",
    "spiegazioni": {
      "wa": {
        "descrizione": "Particella del tema.",
        "uso": "Indica l’argomento principale della frase.",
        "esempio": "Watashi wa gakusei desu.",
        "nota": "Si scrive は ma si legge 'wa'.",
        "perche": "Perché \"Watashi\" è il tema della frase, cioè chi o cosa stiamo descrivendo o di cui parliamo."
      },
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'.",
        "perche": "Perché \"sushi\" è l'oggetto diretto, cioè ciò che subisce l'azione del verbo."
      }
    }
  },
  {
    "italiano": "Bere",
    "romaji": "nomu",
    "frase": "Watashi wa mizu o nomu.",
    "traduzione": "Bevo acqua.",
    "spiegazioni": {
      "wa": {
        "descrizione": "Particella del tema.",
        "uso": "Indica l’argomento principale della frase.",
        "esempio": "Watashi wa gakusei desu.",
        "nota": "Si scrive は ma si legge 'wa'.",
        "perche": "Perché \"Watashi\" è il tema della frase, cioè chi o cosa stiamo descrivendo o di cui parliamo."
      },
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'.",
        "perche": "Perché \"mizu\" è l'oggetto diretto, cioè ciò che subisce l'azione del verbo."
      }
    }
  },
  {
    "italiano": "Guardare",
    "romaji": "miru",
    "frase": "Anime o miru.",
    "traduzione": "Guardo anime.",
    "spiegazioni": {
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'.",
        "perche": "Perché \"Anime\" è l'oggetto diretto, cioè ciò che subisce l'azione del verbo."
      },
      "ni": {
        "descrizione": "Particella di direzione/oggetto indiretto.",
        "uso": "Indica direzione o ricevente indiretto.",
        "esempio": "Tomodachi ni aimasu.",
        "nota": "Si scrive に ma si legge 'ni'.",
        "perche": "Perché indica la destinazione o il punto di arrivo dell'azione."
      }
    }
  },
  {
    "italiano": "Anime",
    "romaji": "anime",
    "frase": "Anime wa tanoshii.",
    "traduzione": "Gli anime sono divertenti.",
    "spiegazioni": {
      "wa": {
        "descrizione": "Particella del tema.",
        "uso": "Indica l’argomento principale della frase.",
        "esempio": "Watashi wa gakusei desu.",
        "nota": "Si scrive は ma si legge 'wa'.",
        "perche": "Perché \"Anime\" è il tema della frase, cioè chi o cosa stiamo descrivendo o di cui parliamo."
      },
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'.",
        "perche": "Perché marca l'oggetto diretto, che riceve l'azione del verbo."
      },
      "ni": {
        "descrizione": "Particella di direzione/oggetto indiretto.",
        "uso": "Indica direzione o ricevente indiretto.",
        "esempio": "Tomodachi ni aimasu.",
        "nota": "Si scrive に ma si legge 'ni'.",
        "perche": "Perché indica la destinazione o il punto di arrivo dell'azione."
      }
    }
  },
  {
    "italiano": "Acqua",
    "romaji": "mizu",
    "frase": "Mizu wa tsumetai.",
    "traduzione": "L'acqua è fredda.",
    "spiegazioni": {
      "wa": {
        "descrizione": "Particella del tema.",
        "uso": "Indica l’argomento principale della frase.",
        "esempio": "Watashi wa gakusei desu.",
        "nota": "Si scrive は ma si legge 'wa'.",
        "perche": "Perché \"Mizu\" è il tema della frase, cioè chi o cosa stiamo descrivendo o di cui parliamo."
      }
    }
  },
  {
    "italiano": "Andare",
    "romaji": "iku",
    "frase": "Watashi wa gakkou ni iku.",
    "traduzione": "Vado a scuola.",
    "spiegazioni": {
      "wa": {
        "descrizione": "Particella del tema.",
        "uso": "Indica l’argomento principale della frase.",
        "esempio": "Watashi wa gakusei desu.",
        "nota": "Si scrive は ma si legge 'wa'.",
        "perche": "Perché \"Watashi\" è il tema della frase, cioè chi o cosa stiamo descrivendo o di cui parliamo."
      },
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'.",
        "perche": "Perché marca l'oggetto diretto, che riceve l'azione del verbo."
      },
      "ni": {
        "descrizione": "Particella di direzione/oggetto indiretto.",
        "uso": "Indica direzione o ricevente indiretto.",
        "esempio": "Tomodachi ni aimasu.",
        "nota": "Si scrive に ma si legge 'ni'.",
        "perche": "Perché indica la destinazione o il punto di arrivo dell'azione."
      },
      "ga": {
        "descrizione": "Particella del soggetto.",
        "uso": "Indica il soggetto della frase.",
        "esempio": "Kare ga kuru.",
        "nota": "Si scrive が e si legge 'ga'.",
        "perche": "Perché identifica il soggetto principale o qualcosa di nuovo rilevante nella frase."
      }
    }
  },
  {
    "italiano": "Scuola",
    "romaji": "gakkou",
    "frase": "Gakkou wa ookii.",
    "traduzione": "La scuola è grande.",
    "spiegazioni": {
      "wa": {
        "descrizione": "Particella del tema.",
        "uso": "Indica l’argomento principale della frase.",
        "esempio": "Watashi wa gakusei desu.",
        "nota": "Si scrive は ma si legge 'wa'.",
        "perche": "Perché \"Gakkou\" è il tema della frase, cioè chi o cosa stiamo descrivendo o di cui parliamo."
      },
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'.",
        "perche": "Perché marca l'oggetto diretto, che riceve l'azione del verbo."
      }
    }
  },
  {
    "italiano": "Amico",
    "romaji": "tomodachi",
    "frase": "Tomodachi wa yasashii.",
    "traduzione": "L'amico è gentile.",
    "spiegazioni": {
      "wa": {
        "descrizione": "Particella del tema.",
        "uso": "Indica l’argomento principale della frase.",
        "esempio": "Watashi wa gakusei desu.",
        "nota": "Si scrive は ma si legge 'wa'.",
        "perche": "Perché \"Tomodachi\" è il tema della frase, cioè chi o cosa stiamo descrivendo o di cui parliamo."
      },
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'.",
        "perche": "Perché marca l'oggetto diretto, che riceve l'azione del verbo."
      }
    }
  },
  {
    "italiano": "Giocare",
    "romaji": "asobu",
    "frase": "Kodomo wa asobu.",
    "traduzione": "I bambini giocano.",
    "spiegazioni": {
      "wa": {
        "descrizione": "Particella del tema.",
        "uso": "Indica l’argomento principale della frase.",
        "esempio": "Watashi wa gakusei desu.",
        "nota": "Si scrive は ma si legge 'wa'.",
        "perche": "Perché \"Kodomo\" è il tema della frase, cioè chi o cosa stiamo descrivendo o di cui parliamo."
      },
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'.",
        "perche": "Perché marca l'oggetto diretto, che riceve l'azione del verbo."
      }
    }
  },
  {
    "italiano": "Divertente",
    "romaji": "tanoshii",
    "frase": "Asobi wa tanoshii.",
    "traduzione": "Giocare è divertente.",
    "spiegazioni": {
      "wa": {
        "descrizione": "Particella del tema.",
        "uso": "Indica l’argomento principale della frase.",
        "esempio": "Watashi wa gakusei desu.",
        "nota": "Si scrive は ma si legge 'wa'.",
        "perche": "Perché \"Asobi\" è il tema della frase, cioè chi o cosa stiamo descrivendo o di cui parliamo."
      },
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'.",
        "perche": "Perché marca l'oggetto diretto, che riceve l'azione del verbo."
      }
    }
  },
  {
    "italiano": "Parlare",
    "romaji": "hanasu",
    "frase": "Watashi wa sensei to hanasu.",
    "traduzione": "Parlo con l'insegnante.",
    "spiegazioni": {
      "wa": {
        "descrizione": "Particella del tema.",
        "uso": "Indica l’argomento principale della frase.",
        "esempio": "Watashi wa gakusei desu.",
        "nota": "Si scrive は ma si legge 'wa'.",
        "perche": "Perché \"Watashi\" è il tema della frase, cioè chi o cosa stiamo descrivendo o di cui parliamo."
      },
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'.",
        "perche": "Perché marca l'oggetto diretto, che riceve l'azione del verbo."
      },
      "to": {
        "descrizione": "Particella di accompagnamento.",
        "uso": "Indica con chi si fa qualcosa.",
        "esempio": "Tomodachi to hanasu.",
        "nota": "Si scrive と e si legge 'to'.",
        "perche": "Perché indica la compagnia, con chi si compie l’azione."
      }
    }
  },
  {
    "italiano": "Ascoltare",
    "romaji": "kiku",
    "frase": "Watashi wa ongaku o kiku.",
    "traduzione": "Ascolto musica.",
    "spiegazioni": {
      "wa": {
        "descrizione": "Particella del tema.",
        "uso": "Indica l’argomento principale della frase.",
        "esempio": "Watashi wa gakusei desu.",
        "nota": "Si scrive は ma si legge 'wa'.",
        "perche": "Perché \"Watashi\" è il tema della frase, cioè chi o cosa stiamo descrivendo o di cui parliamo."
      },
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'.",
        "perche": "Perché \"ongaku\" è l'oggetto diretto, cioè ciò che subisce l'azione del verbo."
      },
      "ga": {
        "descrizione": "Particella del soggetto.",
        "uso": "Indica il soggetto della frase.",
        "esempio": "Kare ga kuru.",
        "nota": "Si scrive が e si legge 'ga'.",
        "perche": "Perché identifica il soggetto principale o qualcosa di nuovo rilevante nella frase."
      }
    }
  },
  {
    "italiano": "Insegnante",
    "romaji": "sensei",
    "frase": "Sensei wa shinsetsu desu.",
    "traduzione": "L'insegnante è gentile.",
    "spiegazioni": {
      "wa": {
        "descrizione": "Particella del tema.",
        "uso": "Indica l’argomento principale della frase.",
        "esempio": "Watashi wa gakusei desu.",
        "nota": "Si scrive は ma si legge 'wa'.",
        "perche": "Perché \"Sensei\" è il tema della frase, cioè chi o cosa stiamo descrivendo o di cui parliamo."
      }
    }
  },
  {
    "italiano": "Oggi",
    "romaji": "kyou",
    "frase": "Kyou wa benkyou suru.",
    "traduzione": "Oggi studio.",
    "spiegazioni": {
      "wa": {
        "descrizione": "Particella del tema.",
        "uso": "Indica l’argomento principale della frase.",
        "esempio": "Watashi wa gakusei desu.",
        "nota": "Si scrive は ma si legge 'wa'.",
        "perche": "Perché \"Kyou\" è il tema della frase, cioè chi o cosa stiamo descrivendo o di cui parliamo."
      },
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'.",
        "perche": "Perché marca l'oggetto diretto, che riceve l'azione del verbo."
      }
    }
  },
  {
    "italiano": "Musica",
    "romaji": "ongaku",
    "frase": "Ongaku wa suki desu.",
    "traduzione": "Mi piace la musica.",
    "spiegazioni": {
      "wa": {
        "descrizione": "Particella del tema.",
        "uso": "Indica l’argomento principale della frase.",
        "esempio": "Watashi wa gakusei desu.",
        "nota": "Si scrive は ma si legge 'wa'.",
        "perche": "Perché \"Ongaku\" è il tema della frase, cioè chi o cosa stiamo descrivendo o di cui parliamo."
      },
      "ga": {
        "descrizione": "Particella del soggetto.",
        "uso": "Indica il soggetto della frase.",
        "esempio": "Kare ga kuru.",
        "nota": "Si scrive が e si legge 'ga'.",
        "perche": "Perché identifica il soggetto principale o qualcosa di nuovo rilevante nella frase."
      }
    }
  },
  {
    "italiano": "Studiare",
    "romaji": "benkyou",
    "frase": "Watashi wa nihongo o benkyou suru.",
    "traduzione": "Studio giapponese.",
    "spiegazioni": {
      "wa": {
        "descrizione": "Particella del tema.",
        "uso": "Indica l’argomento principale della frase.",
        "esempio": "Watashi wa gakusei desu.",
        "nota": "Si scrive は ma si legge 'wa'.",
        "perche": "Perché \"Watashi\" è il tema della frase, cioè chi o cosa stiamo descrivendo o di cui parliamo."
      },
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'.",
        "perche": "Perché \"nihongo\" è l'oggetto diretto, cioè ciò che subisce l'azione del verbo."
      },
      "ni": {
        "descrizione": "Particella di direzione/oggetto indiretto.",
        "uso": "Indica direzione o ricevente indiretto.",
        "esempio": "Tomodachi ni aimasu.",
        "nota": "Si scrive に ma si legge 'ni'.",
        "perche": "Perché indica la destinazione o il punto di arrivo dell'azione."
      }
    }
  },
  {
    "italiano": "Orologio",
    "romaji": "tokei",
    "frase": "Tokei ga arimasu.",
    "traduzione": "C'è un orologio.",
    "spiegazioni": {
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'.",
        "perche": "Perché marca l'oggetto diretto, che riceve l'azione del verbo."
      },
      "ga": {
        "descrizione": "Particella del soggetto.",
        "uso": "Indica il soggetto della frase.",
        "esempio": "Kare ga kuru.",
        "nota": "Si scrive が e si legge 'ga'.",
        "perche": "Perché identifica il soggetto principale o qualcosa di nuovo rilevante nella frase."
      }
    }
  },
  {
    "italiano": "Casa",
    "romaji": "ie",
    "frase": "Watashi wa ie ni kaeru.",
    "traduzione": "Torno a casa.",
    "spiegazioni": {
      "wa": {
        "descrizione": "Particella del tema.",
        "uso": "Indica l’argomento principale della frase.",
        "esempio": "Watashi wa gakusei desu.",
        "nota": "Si scrive は ma si legge 'wa'.",
        "perche": "Perché \"Watashi\" è il tema della frase, cioè chi o cosa stiamo descrivendo o di cui parliamo."
      },
      "ni": {
        "descrizione": "Particella di direzione/oggetto indiretto.",
        "uso": "Indica direzione o ricevente indiretto.",
        "esempio": "Tomodachi ni aimasu.",
        "nota": "Si scrive に ma si legge 'ni'.",
        "perche": "Perché indica la destinazione o il punto di arrivo dell'azione."
      }
    }
  },
  {
    "italiano": "Treno",
    "romaji": "densha",
    "frase": "Densha de iku.",
    "traduzione": "Vado in treno.",
    "spiegazioni": {}
  },
  {
    "italiano": "Con un amico",
    "romaji": "tomodachi to",
    "frase": "Tomodachi to asobu.",
    "traduzione": "Gioco con un amico.",
    "spiegazioni": {
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'.",
        "perche": "Perché marca l'oggetto diretto, che riceve l'azione del verbo."
      },
      "to": {
        "descrizione": "Particella di accompagnamento.",
        "uso": "Indica con chi si fa qualcosa.",
        "esempio": "Tomodachi to hanasu.",
        "nota": "Si scrive と e si legge 'to'.",
        "perche": "Perché indica la compagnia, con chi si compie l’azione."
      }
    }
  },
  {
    "italiano": "Cucinare",
    "romaji": "ryouri",
    "frase": "Watashi wa ryouri o suru.",
    "traduzione": "Cucino.",
    "spiegazioni": {
      "wa": {
        "descrizione": "Particella del tema.",
        "uso": "Indica l’argomento principale della frase.",
        "esempio": "Watashi wa gakusei desu.",
        "nota": "Si scrive は ma si legge 'wa'.",
        "perche": "Perché \"Watashi\" è il tema della frase, cioè chi o cosa stiamo descrivendo o di cui parliamo."
      },
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'.",
        "perche": "Perché \"ryouri\" è l'oggetto diretto, cioè ciò che subisce l'azione del verbo."
      }
    }
  },
  {
    "italiano": "Fare spese",
    "romaji": "kaimono",
    "frase": "Kaimono o suru.",
    "traduzione": "Faccio spese.",
    "spiegazioni": {
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'.",
        "perche": "Perché \"Kaimono\" è l'oggetto diretto, cioè ciò che subisce l'azione del verbo."
      }
    }
  },
  {
    "italiano": "Dormire",
    "romaji": "neru",
    "frase": "Yoru wa neru.",
    "traduzione": "La notte dormo.",
    "spiegazioni": {
      "wa": {
        "descrizione": "Particella del tema.",
        "uso": "Indica l’argomento principale della frase.",
        "esempio": "Watashi wa gakusei desu.",
        "nota": "Si scrive は ma si legge 'wa'.",
        "perche": "Perché \"Yoru\" è il tema della frase, cioè chi o cosa stiamo descrivendo o di cui parliamo."
      },
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'.",
        "perche": "Perché marca l'oggetto diretto, che riceve l'azione del verbo."
      }
    }
  },
  {
    "italiano": "Svegliarsi",
    "romaji": "okiru",
    "frase": "Watashi wa rokuji ni okiru.",
    "traduzione": "Mi sveglio alle sei.",
    "spiegazioni": {
      "wa": {
        "descrizione": "Particella del tema.",
        "uso": "Indica l’argomento principale della frase.",
        "esempio": "Watashi wa gakusei desu.",
        "nota": "Si scrive は ma si legge 'wa'.",
        "perche": "Perché \"Watashi\" è il tema della frase, cioè chi o cosa stiamo descrivendo o di cui parliamo."
      },
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'.",
        "perche": "Perché marca l'oggetto diretto, che riceve l'azione del verbo."
      },
      "ni": {
        "descrizione": "Particella di direzione/oggetto indiretto.",
        "uso": "Indica direzione o ricevente indiretto.",
        "esempio": "Tomodachi ni aimasu.",
        "nota": "Si scrive に ma si legge 'ni'.",
        "perche": "Perché indica la destinazione o il punto di arrivo dell'azione."
      }
    }
  },
  {
    "italiano": "Pranzo",
    "romaji": "hirugohan",
    "frase": "Hirugohan o taberu.",
    "traduzione": "Mangio il pranzo.",
    "spiegazioni": {
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'.",
        "perche": "Perché \"Hirugohan\" è l'oggetto diretto, cioè ciò che subisce l'azione del verbo."
      }
    }
  },
  {
    "italiano": "Aprire",
    "romaji": "akeru",
    "frase": "Mado o akeru.",
    "traduzione": "Apro la finestra.",
    "spiegazioni": {
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'.",
        "perche": "Perché \"Mado\" è l'oggetto diretto, cioè ciò che subisce l'azione del verbo."
      }
    }
  },
  {
    "italiano": "Chiudere",
    "romaji": "shimeru",
    "frase": "Doa o shimeru.",
    "traduzione": "Chiudo la porta.",
    "spiegazioni": {
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'.",
        "perche": "Perché \"Doa\" è l'oggetto diretto, cioè ciò che subisce l'azione del verbo."
      }
    }
  },
  {
    "italiano": "Prestare",
    "romaji": "kasu",
    "frase": "Watashi wa hon o kasu.",
    "traduzione": "Presto un libro.",
    "spiegazioni": {
      "wa": {
        "descrizione": "Particella del tema.",
        "uso": "Indica l’argomento principale della frase.",
        "esempio": "Watashi wa gakusei desu.",
        "nota": "Si scrive は ma si legge 'wa'.",
        "perche": "Perché \"Watashi\" è il tema della frase, cioè chi o cosa stiamo descrivendo o di cui parliamo."
      },
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'.",
        "perche": "Perché \"hon\" è l'oggetto diretto, cioè ciò che subisce l'azione del verbo."
      }
    }
  },
  {
    "italiano": "Prendere in prestito",
    "romaji": "kariru",
    "frase": "Hon o kariru.",
    "traduzione": "Prendo in prestito un libro.",
    "spiegazioni": {
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'.",
        "perche": "Perché \"Hon\" è l'oggetto diretto, cioè ciò che subisce l'azione del verbo."
      }
    }
  },
  {
    "italiano": "Comodo",
    "romaji": "benri",
    "frase": "Konpyuutaa wa benri da.",
    "traduzione": "Il computer è comodo.",
    "spiegazioni": {
      "wa": {
        "descrizione": "Particella del tema.",
        "uso": "Indica l’argomento principale della frase.",
        "esempio": "Watashi wa gakusei desu.",
        "nota": "Si scrive は ma si legge 'wa'.",
        "perche": "Perché \"Konpyuutaa\" è il tema della frase, cioè chi o cosa stiamo descrivendo o di cui parliamo."
      },
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'.",
        "perche": "Perché marca l'oggetto diretto, che riceve l'azione del verbo."
      }
    }
  }
];