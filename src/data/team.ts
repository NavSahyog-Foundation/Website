export type TeamMember = {
  name: string;
  role: string;
  photo?: string;
};

export type TeamGroup = {
  heading: string;
  description?: string;
  members: TeamMember[];
};

export const advisors: TeamMember[] = [
  { name: 'K Y Venkatesh', role: 'Advisor' },
  { name: 'Sudhakar Varanasi', role: 'Advisor' },
  { name: 'Subrata Mitra', role: 'Advisor' },
  { name: 'N Sivasailam', role: 'Advisor' },
  { name: 'Smt. Shoba Narayan', role: 'Advisor' },
];

export const founders: TeamMember[] = [
  { name: 'Mary Dolly', role: 'Chief Executive Officer' },
  { name: 'Paritosh Segal', role: 'Strategy & Growth' },
];

export const functionalLeaders: TeamMember[] = [
  { name: 'Shekhar Nayadu', role: 'People & Process' },
  { name: 'Sunil Giridhar', role: 'Finance & Compliance' },
  { name: 'Ashok Kumar Sinha', role: 'Head — Internal Compliance' },
  { name: 'Ranjith Kumar Singh', role: 'Head of Program' },
  { name: 'Shekar Shastry', role: 'Regional Operations Head, Karnataka' },
];

export const programTeam: TeamMember[] = [
  { name: 'Padmavathi G', role: 'Senior Program Lead' },
  { name: 'Gomathi Palani', role: 'Senior Program Lead' },
];

// Sample of real Area Facilitator photo thumbnails from the WP mirror.
// The full collection (150+) lives in public/wp-content/uploads/2022/10/ and 2025/12/.
export const areaFacilitatorPhotos: string[] = [
  'wp-content/uploads/2022/10/Arthi-kalvasal-1-150x150.jpeg',
  'wp-content/uploads/2022/10/Aswini-K.-Mallasandram-1-150x150.jpeg',
  'wp-content/uploads/2022/10/Ayyur-Aishwarya-1-1-150x150.jpg',
  'wp-content/uploads/2022/10/Chaitra-Ballapally-VC-150x150.jpeg',
  'wp-content/uploads/2022/10/Chinnatippanur-Shanthi-1-150x150.jpg',
  'wp-content/uploads/2022/10/Chithlinkottai-Roja-1-150x150.jpeg',
  'wp-content/uploads/2022/10/Deepa_Kakkadasam-150x150.jpeg',
  'wp-content/uploads/2022/10/Deysini-kannikapuram-1-150x150.jpeg',
  'wp-content/uploads/2022/10/Gayathri_Medumuthukottai-150x150.jpeg',
  'wp-content/uploads/2022/10/Giriyanapalli-Durga-1-150x150.jpg',
  'wp-content/uploads/2022/10/Govindapalli-Ranjitha-1-150x150.jpeg',
  'wp-content/uploads/2022/10/Hanumanthapuram-Manjula-1-150x150.jpeg',
  'wp-content/uploads/2022/10/Janani_kelur-1-150x150.jpeg',
  'wp-content/uploads/2022/10/Kalpanath-kelur-adc-1-150x150.jpeg',
  'wp-content/uploads/2022/10/Koochuvadi-Sivaranjani-1-150x150.jpg',
  'wp-content/uploads/2022/10/Maheshwari_Narayanamangalam-1-150x150.jpeg',
  'wp-content/uploads/2022/10/Manjula_Sarandapally-150x150.jpeg',
  'wp-content/uploads/2022/10/Mellure-Chithra-1-150x150.jpg',
  'wp-content/uploads/2022/10/Namileri-Chandrakala-1-150x150.jpg',
  'wp-content/uploads/2022/10/Nelukunthi-Anuratha-1-150x150.jpeg',
  'wp-content/uploads/2022/10/Padma_Agalakotta-150x150.jpeg',
  'wp-content/uploads/2022/10/Prabhavathi_kamakkurpalayam-1-150x150.jpeg',
  'wp-content/uploads/2022/10/R.suganya-Kalvasal-1-150x150.jpeg',
  'wp-content/uploads/2022/10/Rasi-priya-Ammapalayam-1-150x150.jpeg',
  'wp-content/uploads/2022/10/Revathi-palaya-ekambara-nallur-1-150x150.jpeg',
  'wp-content/uploads/2022/10/Samanthakottai-Amaravathi-1-150x150.jpeg',
  'wp-content/uploads/2022/10/Shabeena_Chinna-Pushpagiri-1-150x150.jpg',
  'wp-content/uploads/2022/10/Thadikal-Kasturi-1-150x150.jpeg',
  'wp-content/uploads/2022/10/Thippasandiram-Shoba-1-150x150.jpeg',
  'wp-content/uploads/2022/10/Thottikuppam-Pavithra-1-150x150.jpeg',
  'wp-content/uploads/2022/10/Unjetti-Manjula-1-150x150.jpeg',
  'wp-content/uploads/2022/10/Venku-bai_J-setiipalli-150x150.jpeg',
  'wp-content/uploads/2022/10/Vinitha_kamakkurpalayam-1-150x150.jpeg',
];
