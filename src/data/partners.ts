// Full partner list to be populated from the NGO; placeholder categories below.
export type Partner = { name: string; url?: string };

export const partnerCategories: { heading: string; partners: Partner[] }[] = [
  {
    heading: 'Funding Partners',
    partners: [
      { name: 'Social Venture Partners India', url: 'https://svpindia.org/' },
      { name: 'Give.do', url: 'https://give.do/ngos/navsahyog-foundation' },
      { name: 'Danamojo', url: 'https://navsahyog-foundation.danamojo.org/' },
    ],
  },
  {
    heading: 'Programme Partners',
    partners: [
      { name: 'CBD-RSETI, Haliyal', url: undefined },
    ],
  },
];
