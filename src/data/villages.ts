export type VillageCluster = {
  slug: string;
  name: string;
  region: 'Karnataka' | 'Tamil Nadu' | 'Nagaland';
  district: string;
  hasPage: boolean;
};

export const clustersByRegion: Record<string, VillageCluster[]> = {
  Karnataka: [
    { slug: 'tumkur-01', name: 'Tumkur 01 Cluster', region: 'Karnataka', district: 'Tumkuru District', hasPage: true },
    { slug: 'tumkur-02', name: 'Tumkur 02 Cluster', region: 'Karnataka', district: 'Tumkuru District', hasPage: true },
    { slug: 'tumkur-03', name: 'Tumkur 03 Cluster', region: 'Karnataka', district: 'Tumkur District', hasPage: true },
    { slug: 'tumkur-04', name: 'Tumkur 04 Cluster', region: 'Karnataka', district: 'Tumkur District', hasPage: true },
    { slug: 'haliyal', name: 'Haliyal 01 Cluster', region: 'Karnataka', district: 'Haliyal District', hasPage: true },
    { slug: 'anekal-02', name: 'Anekal 02 Cluster', region: 'Karnataka', district: 'Anekal District', hasPage: false },
    { slug: 'bidadi-01', name: 'Bidadi 01 Cluster', region: 'Karnataka', district: 'Ramanagar District', hasPage: false },
    { slug: 'tiptur-01', name: 'Tiptur 01 Cluster', region: 'Karnataka', district: 'Tumkur District', hasPage: false },
  ],
  'Tamil Nadu': [
    { slug: 'hosur-01', name: 'Hosur 01 Cluster', region: 'Tamil Nadu', district: 'Krishnagiri District', hasPage: false },
    { slug: 'hosur-02', name: 'Hosur 02 Cluster', region: 'Tamil Nadu', district: 'Krishnagiri District', hasPage: false },
    { slug: 'denkanikottai-01', name: 'Denkanikottai 01 Cluster', region: 'Tamil Nadu', district: 'Krishnagiri District', hasPage: true },
    { slug: 'denkanikottai-02', name: 'Denkanikottai 02 Cluster', region: 'Tamil Nadu', district: 'Krishnagiri District', hasPage: true },
    { slug: 'madurai-01', name: 'Vadipatti 01 Cluster', region: 'Tamil Nadu', district: 'Madurai District', hasPage: true },
    { slug: 'madurai-02', name: 'Vadipatti 02 Cluster', region: 'Tamil Nadu', district: 'Madurai District', hasPage: true },
    { slug: 'padavedu-01', name: 'Padavedu 01 Cluster', region: 'Tamil Nadu', district: 'Tiruvannamalai District', hasPage: false },
    { slug: 'jawadhu', name: 'Jawadhu Hills Cluster', region: 'Tamil Nadu', district: 'Thirupathur District', hasPage: false },
  ],
  Nagaland: [
    { slug: 'dimapur-01', name: 'Dimapur 01', region: 'Nagaland', district: '', hasPage: false },
    { slug: 'dimapur-02', name: 'Dimapur 02', region: 'Nagaland', district: '', hasPage: false },
  ],
};
