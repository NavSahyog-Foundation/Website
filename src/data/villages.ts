export type VillageCluster = {
  slug: string;
  name: string;
  region: 'Karnataka' | 'Tamil Nadu' | 'Nagaland';
  villages?: string[];
  summary?: string;
};

export const villageClusters: VillageCluster[] = [
  {
    slug: 'tumkur-01',
    name: 'Tumkur 01',
    region: 'Karnataka',
    summary: 'Our first cluster in Tumkur district, anchored in the villages around Tiptur.',
  },
  { slug: 'tumkur-02', name: 'Tumkur 02', region: 'Karnataka' },
  { slug: 'tumkur-03', name: 'Tumkur 03', region: 'Karnataka' },
  { slug: 'tumkur-04', name: 'Tumkur 04', region: 'Karnataka' },
  {
    slug: 'haliyal',
    name: 'Haliyal',
    region: 'Karnataka',
    summary: 'Home to our Jal Vriddhi groundwater recharge programme and Yuva Samriddhi skilling.',
  },
  {
    slug: 'denkanikottai-01',
    name: 'Denkanikottai 01',
    region: 'Tamil Nadu',
    villages: ['Andevanapally', 'Arasakuppam', 'Bensapally'],
  },
  { slug: 'denkanikottai-02', name: 'Denkanikottai 02', region: 'Tamil Nadu' },
  {
    slug: 'madurai-01',
    name: 'Madurai 01',
    region: 'Tamil Nadu',
    villages: ['Alankottaram', 'Kadupatti', 'Kattakulam'],
  },
  { slug: 'madurai-02', name: 'Madurai 02', region: 'Tamil Nadu' },
  { slug: 'hosur-01', name: 'Hosur 01', region: 'Tamil Nadu' },
  { slug: 'hosur-02', name: 'Hosur 02', region: 'Tamil Nadu' },
  { slug: 'jawadhu', name: 'Jawadhu', region: 'Tamil Nadu' },
  { slug: 'padavedu-01', name: 'Padavedu 01', region: 'Tamil Nadu' },
  { slug: 'dimapur-01', name: 'Dimapur 01', region: 'Nagaland' },
  { slug: 'dimapur-02', name: 'Dimapur 02', region: 'Nagaland' },
];
