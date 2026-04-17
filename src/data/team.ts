export type TeamMember = {
  name: string;
  role: string;
  region?: string;
};

export type TeamGroup = {
  heading: string;
  description?: string;
  members: TeamMember[];
};

export const teamGroups: TeamGroup[] = [
  {
    heading: 'Board of Advisors',
    members: [
      { name: 'K Y Venkatesh', role: 'Advisor' },
      { name: 'Sudhakar Varanasi', role: 'Advisor' },
      { name: 'Subrata Mitra', role: 'Advisor' },
      { name: 'N Sivasailam', role: 'Advisor' },
      { name: 'Smt. Shoba Narayan', role: 'Advisor' },
    ],
  },
  {
    heading: 'Executive Team',
    members: [
      { name: 'Mary Dolly', role: 'Chief Executive Officer' },
      { name: 'Paritosh Segal', role: 'Strategy & Growth' },
      { name: 'Shekhar Nayadu', role: 'People & Process' },
      { name: 'Sunil Giridhar', role: 'Finance & Compliance' },
    ],
  },
  {
    heading: 'Functional Leaders',
    members: [
      { name: 'Ashok Kumar Sinha', role: 'Head of Program · Regional Operations Head, Karnataka' },
    ],
  },
  {
    heading: 'Program Team',
    members: [
      { name: 'Sarat', role: 'Senior Program Lead' },
      { name: 'Sagar K', role: 'Program Lead' },
      { name: 'Srikanta Swamy H N', role: 'Program Lead' },
      { name: 'Kalpana', role: 'Program Lead' },
      { name: 'Hareesh', role: 'Senior Project Lead' },
      { name: 'Aishwarya Raghupathy', role: 'Project Lead' },
      { name: 'Namratha', role: 'Communications & Fundraise Lead' },
    ],
  },
  {
    heading: 'Area Facilitators',
    description: 'Our on-ground leaders, each anchoring a village cluster.',
    members: [
      { name: 'Hemavathi', role: 'Area Facilitator', region: 'Tiptur 01' },
      { name: 'Naziya Sultana', role: 'Area Facilitator', region: 'Tumkur 01' },
      { name: 'Area Facilitator', role: 'Area Facilitator', region: 'Tumkur 02' },
      { name: 'Area Facilitator', role: 'Area Facilitator', region: 'Tumkur 03' },
      { name: 'Deepa', role: 'Area Facilitator', region: 'Tumkur 04' },
      { name: 'Area Facilitator', role: 'Area Facilitator', region: 'Jawadhu 01' },
      { name: 'Julie Ringa', role: 'Area Facilitator', region: 'Hosur 01' },
      { name: 'Area Facilitator', role: 'Area Facilitator', region: 'Dimapur 01' },
      { name: 'Sushila', role: 'Area Facilitator', region: 'Denkanikottai 01' },
      { name: 'Area Facilitator', role: 'Area Facilitator', region: 'Denkanikottai 02' },
      { name: 'Area Facilitator', role: 'Area Facilitator', region: 'Madurai 01' },
      { name: 'Navanath V Doddagouda', role: 'Area Facilitator', region: 'Madurai 02' },
      { name: 'Area Facilitator', role: 'Area Facilitator', region: 'Haliyal 02' },
    ],
  },
];
