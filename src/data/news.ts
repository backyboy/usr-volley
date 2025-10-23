export type NewsItem = {
  id: string
  title: string
  date: string // ISO YYYY-MM-DD
  excerpt: string
  body: string[]
  image: string
  imageAlt?: string
}

export const news: NewsItem[] = []
//   {
//     id: '2025-10-22-article-ufolep-792',
//     title: 'UFOLEP 37 — Début de la saison 2025-2026',
//     date: '2025-10-22',
//     excerpt: "Consultez l’article relayé par UFOLEP 37 sur leur site.",
//     body: [
//       'Retrouvez l’article complet sur le site UFOLEP 37.',
//       'Lien: https://volley37-ufolep-fsgt.fr/?p=792',
//     ],
//     image: '/icon.jpg',
//     imageAlt: "Lien vers l’article UFOLEP 37",
//   },
//   {
//     id: '2025-10-22-reseaux-sociaux',
//     title: 'Bientôt: comptes officiels sur les réseaux sociaux',
//     date: '2025-10-22',
//     excerpt: 'De nouveaux comptes pour suivre nos équipes arrivent prochainement.',
//     body: [
//       "Nous finalisons l’ouverture de comptes officiels afin de suivre les résultats, photos et infos des équipes.",
//       'Nous communiquerons très bientôt les liens pour vous abonner.',
//     ],
//     image: '/icon.jpg',
//     imageAlt: 'Annonces réseaux sociaux USR Volley',
//   },
//   {
//     id: '2025-10-20-sponsoring-banniere',
//     title: "Appel au sponsoring — bannière publicitaire au gymnase",
//     date: '2025-10-20',
//     excerpt:
//       "Le club lance une campagne de sponsoring pour afficher des bannières partenaires lors des matchs à domicile.",
//     body: [
//       "Afin de soutenir nos équipes et développer la vie du club, nous proposons aux entreprises locales de devenir partenaires via l'achat d'une bannière publicitaire installée dans le gymnase lors des rencontres.",
//       "Formats disponibles: 2m x 0,8m (bâche PVC). Impression et pose incluses. Visibilité assurée pendant toute la saison à domicile.",
//       "Contreparties: présence du logo sur nos supports, mention dans nos publications et possibilité d'actions locales communes.",
//       "Intéressé(e) ? Contactez le bureau pour recevoir le dossier de sponsoring: guillaume.noinville@wanadoo.fr",
//     ],
//     image: '/icon.jpg',
//     imageAlt: 'Illustration sponsoring USR Volley',
//   },
// ]
