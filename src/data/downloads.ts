export type DownloadItem = {
  title: string;
  file: string;
  external?: boolean;
};

export type DownloadSection = {
  heading: string;
  items: DownloadItem[];
};

export const downloads: DownloadSection[] = [
  {
    heading: 'Financials and Annual Reports',
    items: [
      { title: 'NavSahyog Foundation Annual Report 2024 – 2025', file: 'https://drive.google.com/file/d/1BDSa252EBF6yyiDpblHTAva1-QnQAvda/view?usp=drive_link', external: true },
      { title: 'NavSahyog Foundation Audited Financial Report 2024 – 25', file: 'https://drive.google.com/file/d/1cGF2SgXh1ZveFYfjcJtjqXIaao19xhTU/view?usp=sharing', external: true },
      { title: 'NavSahyog Foundation Annual Report 2023 – 2024', file: 'https://drive.google.com/file/d/1isbkVMoa8XkyTkHnJQMzrLQwvQUoHkqy/view?usp=sharing', external: true },
      { title: 'NavSahyog Foundation Audited Financial Report 2023 – 2024', file: 'https://drive.google.com/file/d/1vY4vF793awRDGXUJanFOxRt3JNUZFmwx/view?usp=sharing', external: true },
      { title: 'NavSahyog Foundation Annual Report 2022 – 2023', file: '/downloads/annual-report-2022-23.pdf' },
      { title: 'NavSahyog Foundation Audited Financial Report 2022 – 2023', file: 'https://drive.google.com/file/d/1TtOjyzwQWQyCh4FwPNO6hplukSxyKjNv/view?usp=sharing', external: true },
      { title: 'NavSahyog Foundation Annual Report 2021 – 2022', file: '/downloads/annual-report-2021-22.pdf' },
      { title: 'NavSahyog Foundation Audited Financial Report 2021 – 2022', file: '/downloads/financial-statement-2021-22.pdf' },
      { title: 'NavSahyog Foundation Audited Financial Report 2020 – 2021', file: '/downloads/financial-statement-2020-21.pdf' },
    ],
  },
  {
    heading: 'Annual Impact Assessment Reports',
    items: [
      { title: 'NavSahyog Foundation Annual Impact Assessment Report 2026', file: 'https://drive.google.com/file/d/1m_eynIYrnX5BYaURzrtlEnD-3q7e3UDI/view?usp=sharing', external: true },
      { title: 'NavSahyog Foundation Annual Impact Assessment Report 2025', file: 'https://drive.google.com/file/d/1ib0VvGRVmP-Tn62fq_ZR3hXAF6rj1Kio/view?usp=sharing', external: true },
      { title: 'NavSahyog Foundation Annual Impact Assessment Report 2024', file: 'https://drive.google.com/file/d/1OVK8ZJr5DHFV5l5lDaxd1vMP1bFaMZiW/view?usp=sharing', external: true },
      { title: 'NavSahyog Foundation Annual Impact Assessment Report 2023', file: 'https://drive.google.com/file/d/1To2qM-_vXOnH8qxr_jb9bO4MCD4xbSDB/view?usp=drive_link', external: true },
      { title: 'NavSahyog Foundation Annual Impact Assessment Report 2022', file: '/downloads/impact-study-mar-2022.pdf' },
      { title: 'NavSahyog Foundation Annual Impact Assessment Report 2021', file: 'https://drive.google.com/file/d/1ZSVZl365JnCPP53fAZzZAH6wCOLiHoH3/view?usp=drive_link', external: true },
    ],
  },
  {
    heading: 'Research Reports',
    items: [
      { title: 'Sports and Child Development', file: '/wp-content/uploads/2021/07/Sports-and-Child-development.pdf' },
      { title: 'Storytelling and Child Development', file: '/wp-content/uploads/2021/07/Storytelling-and-Child-Development.pdf' },
      { title: 'Children and Value of Music, Art and Storytelling', file: '/downloads/children-music-art-storytelling.pdf' },
    ],
  },
  {
    heading: 'Programme Related',
    items: [
      { title: 'NavSahyog Program Overview 2020 – 21 (PDF)', file: '/wp-content/uploads/2021/07/NavSahyog-Foundation-Program-Overview-Apr2021.pdf' },
      { title: 'NavSahyog Foundation Overview July 2021 (PDF)', file: '/downloads/navsahyog-foundation-july21.pdf' },
      { title: 'NavSahyog Foundation Covid Initiatives (PDF)', file: '/wp-content/uploads/2021/07/NavSahyog-Covid-19-related-initiatives-.pdf' },
    ],
  },
];
