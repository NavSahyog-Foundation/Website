export type TeamMember = {
  name: string;
  role: string;
  photo?: string;
};

export type Facilitator = {
  name: string;
  village?: string;
  photo: string;
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
  { name: 'Shekhar Nayudu', role: 'People & Process' },
  { name: 'Sunil Giridhar', role: 'Finance & Compliance' },
];

export const functionalLeaders: TeamMember[] = [
  { name: 'Ashok Kumar Sinha', role: 'Head — Internal Compliance' },
  { name: 'Ranjith Kumar Singh', role: 'Head of Program' },
  { name: 'Shekar Shastry', role: 'Regional Operations Head, Karnataka' },
];

export const programTeam: TeamMember[] = [
  { name: 'Padmavathi G', role: 'Senior Program Lead' },
  { name: 'Gomathi Palani', role: 'Senior Program Lead' },
];

export const facilitatorsBengaluru: Facilitator[] = [
  { name: 'Sarvamangala', village: 'Medanahalli', photo: '2025/12/b1-150x150.png' },
  { name: 'Pavithra', village: 'Manchanayakanahalli', photo: '2025/12/b2-150x150.png' },
  { name: 'Hanumakka', village: 'Seshagirihalli Colony', photo: '2025/12/b3-150x150.png' },
  { name: 'Amrutha', village: 'Shanumangala', photo: '2025/12/b4-150x150.png' },
  { name: 'Rukmini', village: 'Bananduru', photo: '2025/12/b5-150x150.png' },
  { name: 'Shakuntala', village: 'Ningegowdanadoddi', photo: '2025/12/b6-150x150.png' },
  { name: 'Chandana', village: 'Ganakallu', photo: '2025/12/b7-150x150.png' },
  { name: 'Shree Vidya', village: 'Gollarapalya', photo: '2025/12/b9-150x150.png' },
  { name: 'Prema', village: 'Chikkakundanahalli', photo: '2025/12/b10-150x150.png' },
  { name: 'Rathnamma', village: 'Kodiyala Kerenahalli', photo: '2025/12/b11-150x150.png' },
  { name: 'Sushma', village: 'Abbanakuppe', photo: '2025/12/b13-150x150.png' },
  { name: 'Mangalamma', village: 'Chinnegowdanadoddi', photo: '2025/12/b14-150x150.png' },
  { name: 'Aruna', village: 'Kemapiyahnapalya', photo: '2025/12/b15-150x150.png' },
  { name: 'Shanthamani', village: 'Hakki Pikki Colony', photo: '2025/12/b16-150x150.png' },
  { name: 'Savithra', village: 'Billakempanahalli', photo: '2025/12/b17-150x150.png' },
];

export const facilitatorsDimapur: Facilitator[] = [
  { name: 'Priya Urang', photo: '2025/12/d1-150x150.png' },
  { name: 'Ronjuli', photo: '2025/12/d2-150x150.png' },
  { name: 'Dimashree', photo: '2025/12/d3-150x150.png' },
  { name: 'Bridget Dungdung', photo: '2025/12/d4-150x150.png' },
  { name: 'Keneiletuo', photo: '2025/12/d5-150x150.png' },
  { name: 'Vekhrune', photo: '2025/12/d6-150x150.png' },
  { name: 'Kevesholu', photo: '2025/12/d7-150x150.png' },
  { name: 'T. Khailoi', photo: '2025/12/d8-150x150.png' },
  { name: 'Kangsila', photo: '2025/12/d9-150x150.png' },
  { name: 'Durga', photo: '2025/12/d10-150x150.png' },
];

export const facilitatorsHills: Facilitator[] = [
  { name: 'Rabina Lafthai', photo: '2025/12/H0001-150x150.png' },
  { name: 'Indira', photo: '2025/12/H2-150x150.png' },
  { name: 'Pushringdi', photo: '2025/12/MM-150x150.jpeg' },
  { name: 'Ringli', photo: '2025/12/H4-150x150.png' },
  { name: 'Ringsringdi', photo: '2025/12/H5-150x150.png' },
  { name: 'Disaindi', photo: '2025/12/H6-150x150.png' },
  { name: 'Minika', photo: '2025/12/H7-150x150.png' },
  { name: 'Ringjali', photo: '2025/12/H8-150x150.png' },
  { name: 'Dirham', photo: '2025/12/H9-150x150.png' },
  { name: 'Mercy', photo: '2025/12/H10-150x150.png' },
];

// Legacy roster (2022–2023 photos). Parsed from filenames for name + village.
export const facilitatorsLegacy: Facilitator[] = [
  { name: 'Arthi', village: 'Kalvasal', photo: '2022/10/Arthi-kalvasal-1-150x150.jpeg' },
  { name: 'Aswini K', village: 'Mallasandram', photo: '2022/10/Aswini-K.-Mallasandram-1-150x150.jpeg' },
  { name: 'Aishwarya', village: 'Ayyur', photo: '2022/10/Ayyur-Aishwarya-1-1-150x150.jpg' },
  { name: 'Chaitra', village: 'Ballapally', photo: '2022/10/Chaitra-Ballapally-VC-150x150.jpeg' },
  { name: 'Shanthi', village: 'Chinnatippanur', photo: '2022/10/Chinnatippanur-Shanthi-1-150x150.jpg' },
  { name: 'Roja', village: 'Chithlinkottai', photo: '2022/10/Chithlinkottai-Roja-1-150x150.jpeg' },
  { name: 'Deepa', village: 'Kakkadasam', photo: '2022/10/Deepa_Kakkadasam-150x150.jpeg' },
  { name: 'Deysini', village: 'Kannikapuram', photo: '2022/10/Deysini-kannikapuram-1-150x150.jpeg' },
  { name: 'Gayathri', village: 'Medumuthukottai', photo: '2022/10/Gayathri_Medumuthukottai-150x150.jpeg' },
  { name: 'Durga', village: 'Giriyanapalli', photo: '2022/10/Giriyanapalli-Durga-1-150x150.jpg' },
  { name: 'Ranjitha', village: 'Govindapalli', photo: '2022/10/Govindapalli-Ranjitha-1-150x150.jpeg' },
  { name: 'Manjula', village: 'Hanumanthapuram', photo: '2022/10/Hanumanthapuram-Manjula-1-150x150.jpeg' },
  { name: 'Janani', village: 'Kelur', photo: '2022/10/Janani_kelur-1-150x150.jpeg' },
  { name: 'Kalpanath', village: 'Kelur', photo: '2022/10/Kalpanath-kelur-adc-1-150x150.jpeg' },
  { name: 'Sivaranjani', village: 'Koochuvadi', photo: '2022/10/Koochuvadi-Sivaranjani-1-150x150.jpg' },
  { name: 'Maheshwari', village: 'Narayanamangalam', photo: '2022/10/Maheshwari_Narayanamangalam-1-150x150.jpeg' },
  { name: 'Manjula', village: 'Sarandapally', photo: '2022/10/Manjula_Sarandapally-150x150.jpeg' },
  { name: 'Chithra', village: 'Mellure', photo: '2022/10/Mellure-Chithra-1-150x150.jpg' },
  { name: 'Chandrakala', village: 'Namileri', photo: '2022/10/Namileri-Chandrakala-1-150x150.jpg' },
  { name: 'Anuratha', village: 'Nelukunthi', photo: '2022/10/Nelukunthi-Anuratha-1-150x150.jpeg' },
  { name: 'Padma', village: 'Agalakotta', photo: '2022/10/Padma_Agalakotta-150x150.jpeg' },
  { name: 'Prabhavathi', village: 'Kamakkurpalayam', photo: '2022/10/Prabhavathi_kamakkurpalayam-1-150x150.jpeg' },
  { name: 'R. Suganya', village: 'Kalvasal', photo: '2022/10/R.suganya-Kalvasal-1-150x150.jpeg' },
  { name: 'Rasi Priya', village: 'Ammapalayam', photo: '2022/10/Rasi-priya-Ammapalayam-1-150x150.jpeg' },
  { name: 'Revathi', village: 'Palaya Ekambara Nallur', photo: '2022/10/Revathi-palaya-ekambara-nallur-1-150x150.jpeg' },
  { name: 'Amaravathi', village: 'Samanthakottai', photo: '2022/10/Samanthakottai-Amaravathi-1-150x150.jpeg' },
  { name: 'Shabeena', village: 'Chinna Pushpagiri', photo: '2022/10/Shabeena_Chinna-Pushpagiri-1-150x150.jpg' },
  { name: 'Kasturi', village: 'Thadikal', photo: '2022/10/Thadikal-Kasturi-1-150x150.jpeg' },
  { name: 'Shoba', village: 'Thippasandiram', photo: '2022/10/Thippasandiram-Shoba-1-150x150.jpeg' },
  { name: 'Pavithra', village: 'Thottikuppam', photo: '2022/10/Thottikuppam-Pavithra-1-150x150.jpeg' },
  { name: 'Manjula', village: 'Unjetti', photo: '2022/10/Unjetti-Manjula-1-150x150.jpeg' },
  { name: 'Venku-bai', village: 'J. Setiipalli', photo: '2022/10/Venku-bai_J-setiipalli-150x150.jpeg' },
  { name: 'Vinitha', village: 'Kamakkurpalayam', photo: '2022/10/Vinitha_kamakkurpalayam-1-150x150.jpeg' },
];

// Additional roster photos (names not captured in filenames)
export const teamArchivePhotos: string[] = [
  '2022/10/IMG_20220904_132101-1-150x150.jpg',
  '2022/10/WhatsApp-Image-2022-09-04-at-6.56.56-PM-150x150.jpeg',
  '2022/10/WhatsApp-Image-2022-09-04-at-6.57.37-PM-1-150x150.jpeg',
  '2022/10/WhatsApp-Image-2022-09-04-at-8.50.30-PM-150x150.jpeg',
  '2022/10/WhatsApp-Image-2022-09-07-at-2.53.00-PM-150x150.jpeg',
  '2022/10/WhatsApp-Image-2022-10-10-at-10.03.12-AM-1-150x150.jpeg',
  '2022/10/WhatsApp-Image-2022-10-10-at-10.03.12-AM-150x150.jpeg',
  '2022/10/WhatsApp-Image-2022-10-11-at-1.11.39-PM-1-150x150.jpeg',
  '2022/10/WhatsApp-Image-2022-10-11-at-1.11.39-PM-150x150.jpeg',
  '2022/10/WhatsApp-Image-2022-10-11-at-1.16.23-PM-150x150.jpeg',
  '2022/10/WhatsApp-Image-2022-10-12-at-10.20.29-AM-1-150x150.jpeg',
  '2022/10/WhatsApp-Image-2022-10-12-at-10.20.29-AM-150x150.jpeg',
  '2022/10/WhatsApp-Image-2022-10-12-at-10.20.29-AM-2-150x150.jpeg',
  '2022/10/WhatsApp-Image-2022-10-12-at-10.20.30-AM-1-150x150.jpeg',
  '2022/10/WhatsApp-Image-2022-10-12-at-10.20.30-AM-150x150.jpeg',
  '2022/10/WhatsApp-Image-2022-10-12-at-10.38.57-AM-150x150.jpeg',
  '2022/10/WhatsApp-Image-2022-10-12-at-11.11.45-AM-150x150.jpeg',
  '2022/10/WhatsApp-Image-2022-10-12-at-11.31.10-AM-150x150.jpeg',
  '2022/10/WhatsApp-Image-2022-10-12-at-11.31.11-AM-1-150x150.jpeg',
  '2022/10/WhatsApp-Image-2022-10-12-at-11.31.11-AM-150x150.jpeg',
  '2022/10/WhatsApp-Image-2022-10-12-at-11.38.22-AM-1-150x150.jpeg',
  '2022/10/WhatsApp-Image-2022-10-12-at-11.38.22-AM-150x150.jpeg',
  '2022/10/WhatsApp-Image-2022-10-12-at-11.38.23-AM-1-150x150.jpeg',
  '2022/10/WhatsApp-Image-2022-10-12-at-11.38.23-AM-150x150.jpeg',
  '2022/10/WhatsApp-Image-2022-10-12-at-11.43.49-AM-150x150.jpeg',
  '2023/08/WhatsApp-Image-2023-08-24-at-8.05.05-PM-1-150x150.jpeg',
  '2023/08/WhatsApp-Image-2023-08-24-at-8.05.06-PM-1-1-150x150.jpeg',
  '2023/08/WhatsApp-Image-2023-08-24-at-8.05.06-PM-2-150x150.jpeg',
  '2023/08/WhatsApp-Image-2023-08-24-at-8.05.07-PM-1-150x150.jpeg',
  '2023/08/WhatsApp-Image-2023-08-24-at-8.05.08-PM-1-150x150.jpeg',
  '2023/08/WhatsApp-Image-2023-08-24-at-8.05.09-PM-1-1-150x150.jpeg',
  '2023/08/WhatsApp-Image-2023-08-24-at-8.05.09-PM-2-150x150.jpeg',
  '2023/08/WhatsApp-Image-2023-08-24-at-8.05.10-PM-1-150x150.jpeg',
  '2023/08/WhatsApp-Image-2023-08-24-at-8.05.11-PM-1-150x150.jpeg',
  '2023/08/WhatsApp-Image-2023-08-24-at-8.05.11-PM-150x150.jpeg',
  '2023/08/WhatsApp-Image-2023-08-25-at-8.18.46-PM-150x150.jpeg',
  '2023/08/WhatsApp-Image-2023-08-25-at-8.18.47-PM-150x150.jpeg',
  '2023/08/WhatsApp-Image-2023-08-25-at-8.18.48-PM-150x150.jpeg',
  '2023/08/WhatsApp-Image-2023-08-25-at-8.18.49-PM-150x150.jpeg',
  '2023/08/WhatsApp-Image-2023-08-25-at-8.18.50-PM-150x150.jpeg',
  '2023/08/WhatsApp-Image-2023-08-25-at-8.18.51-PM-150x150.jpeg',
  '2023/08/WhatsApp-Image-2023-08-25-at-8.18.52-PM-150x150.jpeg',
  '2023/08/WhatsApp-Image-2023-08-25-at-8.18.53-PM-150x150.jpeg',
];
