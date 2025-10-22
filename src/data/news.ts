export type NewsItem = {
  id: string
  title: string
  date: string // ISO YYYY-MM-DD
  excerpt: string
  body: string[]
  image: string
  imageAlt?: string
}

export const news: NewsItem[] = [
  {
    id: '2025-10-20-sponsoring-banniere',
    title: "Appel au sponsoring — bannière publicitaire au gymnase",
    date: '2025-10-20',
    excerpt:
      "Le club lance une campagne de sponsoring pour afficher des bannières partenaires lors des matchs à domicile.",
    body: [
      "Afin de soutenir nos équipes et développer la vie du club, nous proposons aux entreprises locales de devenir partenaires via l'achat d'une bannière publicitaire installée dans le gymnase lors des rencontres.",
      "Formats disponibles: 2m x 0,8m (bâche PVC). Impression et pose incluses. Visibilité assurée pendant toute la saison à domicile.",
      "Contreparties: présence du logo sur nos supports, mention dans nos publications et possibilité d'actions locales communes.",
      "Intéressé(e) ? Contactez le bureau pour recevoir le dossier de sponsoring: guillaume.noinville@wanadoo.fr",
    ],
    image: '/icon.jpg',
    imageAlt: 'Illustration sponsoring USR Volley',
  },
]
