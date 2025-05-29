export interface TherapistData {
  name: string;
  title: string;
  bio: string;
  image?: string;
  specialties: string[];
}

export const therapistData: TherapistData = {
  name: "Marit Krouwels de Boer",
  title: "GZ Psycholoog",
  bio: "Sinds 2010 werk ik met veel plezier in de psychologie, eerst binnen ziekenhuizen en grote GGZ-instellingen. Uiteindelijk groeide de wens om op mijn eigen manier zorg te kunnen bieden — persoonlijker, transparanter en met ruimte voor échte aandacht. In mijn praktijk wil ik een plek creëren waar mensen zich veilig en begrepen voelen. Zo ontstaat de beste basis voor therapie. Mijn aanpak wordt vaak omschreven als warm en betrokken, maar ook scherp en doelgericht. Ik sluit aan bij jouw hulpvraag en fase van verandering, met een open en eerlijke stijl. Ik werk veel vanuit de principes van Acceptance and Commitment Therapy (ACT): het leven wordt niet per se leuker, maar wél leefbaarder wanneer je leert omgaan met lastige gedachten en gevoelens in plaats van ertegen te vechten.",
  image: "/img/marit.jpg",
  specialties: [
    "Anxiety & Depression",
    "Trauma Recovery", 
    "Relationship Issues",
    "Work-Life Balance",
    "Stress Management",
    "Personal Growth"
  ]
}; 