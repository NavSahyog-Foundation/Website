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

// Area Facilitators — Bengaluru cluster (full name + village pairing)
export const facilitatorsBengaluru: Facilitator[] = [
  { name: 'Sarvamangala', village: 'Medanahalli', photo: 'wp-content/uploads/2025/12/b1-150x150.png' },
  { name: 'Pavithra', village: 'Manchanayakanahalli', photo: 'wp-content/uploads/2025/12/b2-150x150.png' },
  { name: 'Hanumakka', village: 'Seshagirihalli Colony', photo: 'wp-content/uploads/2025/12/b3-150x150.png' },
  { name: 'Amrutha', village: 'Shanumangala', photo: 'wp-content/uploads/2025/12/b4-150x150.png' },
  { name: 'Rukmini', village: 'Bananduru', photo: 'wp-content/uploads/2025/12/b5-150x150.png' },
  { name: 'Shakuntala', village: 'Ningegowdanadoddi', photo: 'wp-content/uploads/2025/12/b6-150x150.png' },
  { name: 'Chandana', village: 'Ganakallu', photo: 'wp-content/uploads/2025/12/b7-150x150.png' },
  { name: 'Shree Vidya', village: 'Gollarapalya', photo: 'wp-content/uploads/2025/12/b9-150x150.png' },
  { name: 'Prema', village: 'Chikkakundanahalli', photo: 'wp-content/uploads/2025/12/b10-150x150.png' },
  { name: 'Rathnamma', village: 'Kodiyala Kerenahalli', photo: 'wp-content/uploads/2025/12/b11-150x150.png' },
  { name: 'Sushma', village: 'Abbanakuppe', photo: 'wp-content/uploads/2025/12/b13-150x150.png' },
  { name: 'Mangalamma', village: 'Chinnegowdanadoddi', photo: 'wp-content/uploads/2025/12/b14-150x150.png' },
  { name: 'Aruna', village: 'Kemapiyahnapalya', photo: 'wp-content/uploads/2025/12/b15-150x150.png' },
  { name: 'Shanthamani', village: 'Hakki Pikki Colony', photo: 'wp-content/uploads/2025/12/b16-150x150.png' },
  { name: 'Savithra', village: 'Billakempanahalli', photo: 'wp-content/uploads/2025/12/b17-150x150.png' },
];

// Area Facilitators — Nagaland / Dimapur
export const facilitatorsDimapur: Facilitator[] = [
  { name: 'Priya Urang', photo: 'wp-content/uploads/2025/12/d1-150x150.png' },
  { name: 'Ronjuli', photo: 'wp-content/uploads/2025/12/d2-150x150.png' },
  { name: 'Dimashree', photo: 'wp-content/uploads/2025/12/d3-150x150.png' },
  { name: 'Bridget Dungdung', photo: 'wp-content/uploads/2025/12/d4-150x150.png' },
  { name: 'Keneiletuo', photo: 'wp-content/uploads/2025/12/d5-150x150.png' },
  { name: 'Vekhrune', photo: 'wp-content/uploads/2025/12/d6-150x150.png' },
  { name: 'Kevesholu', photo: 'wp-content/uploads/2025/12/d7-150x150.png' },
  { name: 'T. Khailoi', photo: 'wp-content/uploads/2025/12/d8-150x150.png' },
  { name: 'Kangsila', photo: 'wp-content/uploads/2025/12/d9-150x150.png' },
  { name: 'Durga', photo: 'wp-content/uploads/2025/12/d10-150x150.png' },
];

// Area Facilitators — Hills cluster (H-prefix, likely Jawadhu Hills)
export const facilitatorsHills: Facilitator[] = [
  { name: 'Rabina Lafthai', photo: 'wp-content/uploads/2025/12/H0001-150x150.png' },
  { name: 'Indira', photo: 'wp-content/uploads/2025/12/H2-150x150.png' },
  { name: 'Pushringdi', photo: 'wp-content/uploads/2025/12/MM-150x150.jpeg' },
  { name: 'Ringli', photo: 'wp-content/uploads/2025/12/H4-150x150.png' },
  { name: 'Ringsringdi', photo: 'wp-content/uploads/2025/12/H5-150x150.png' },
  { name: 'Disaindi', photo: 'wp-content/uploads/2025/12/H6-150x150.png' },
  { name: 'Minika', photo: 'wp-content/uploads/2025/12/H7-150x150.png' },
  { name: 'Ringjali', photo: 'wp-content/uploads/2025/12/H8-150x150.png' },
  { name: 'Dirham', photo: 'wp-content/uploads/2025/12/H9-150x150.png' },
  { name: 'Mercy', photo: 'wp-content/uploads/2025/12/H10-150x150.png' },
];
