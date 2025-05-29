export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqData {
  heading: string;
  items: FaqItem[];
}

export const faqData: FaqData = {
  heading: "Veelgestelde vragen",
  items: [
    {
      question: "Wat is je KvK nummer?",
      answer: "U kunt een afspraak maken door te bellen naar 06-12345678 of via het contactformulier op deze website. Ik probeer binnen 24 uur te reageren op uw aanvraag."
    },
    {
      question: "Welke BIG registraties heb je en wat zijn de BIG-nummers?",
      answer: "De kosten voor een behandelsessie bedragen €90 per 50 minuten. Veel zorgverzekeringen vergoeden (een deel van) de kosten voor GZ-psycholoog behandeling. Neem contact op met uw verzekeraar voor specifieke informatie over uw dekking."
    },
    {
      question: "Bij welke verenigingen ben je lid/aangesloten?",
      answer: "De duur van een behandeling is afhankelijk van uw specifieke situatie en doelen. Gemiddeld duurt een behandeling tussen de 8-20 sessies. Dit bespreken we samen tijdens de eerste sessies."
    },
    {
      question: "Wat is Acceptance and Commitment Therapy (ACT)?",
      answer: "ACT is een evidencebased therapievorm die zich richt op het accepteren van moeilijke gedachten en gevoelens in plaats van ertegen te vechten. Het doel is om meer psychologische flexibiliteit te ontwikkelen en acties te ondernemen die aansluiten bij uw waarden."
    },
    {
      question: "Is de behandeling vertrouwelijk?",
      answer: "Ja, alles wat we bespreken valt onder het beroepsgeheim. Ik ben gebonden aan strikte vertrouwelijkheidsregels en deel geen informatie zonder uw expliciete toestemming, behalve in uitzonderlijke situaties zoals acute gevaar."
    },
    {
      question: "Wat moet ik meenemen naar de eerste afspraak?",
      answer: "Neem uw identiteitsbewijs en eventuele relevante medische informatie mee. Als u medicatie gebruikt of eerder in behandeling bent geweest, is het handig om deze informatie te delen tijdens het intakegesprek."
    },
    {
      question: "Kan ik ook online sessies volgen?",
      answer: "Ja, ik bied ook online sessies aan via een beveiligde videoverbinding. Dit kan handig zijn als u ver weg woont, mobiliteitsbeperking heeft, of in bepaalde omstandigheden zoals ziekte. We kunnen dit samen bespreken."
    },
    {
      question: "Wat gebeurt er als ik een afspraak moet afzeggen?",
      answer: "Als u een afspraak moet afzeggen, doe dit dan minimaal 24 uur van tevoren. Bij later afzeggen of niet verschijnen zonder bericht, worden de volledige kosten in rekening gebracht."
    }
  ]
}; 