export type DownloadItem = {
  title: string;
  file: string;
  year?: string;
};

export type DownloadSection = {
  heading: string;
  items: DownloadItem[];
};

export const downloads: DownloadSection[] = [
  {
    heading: 'Annual Reports',
    items: [
      { title: 'Annual Report 2022–23', file: '/downloads/annual-report-2022-23.pdf', year: '2022-23' },
      { title: 'Annual Report 2021–22', file: '/downloads/annual-report-2021-22.pdf', year: '2021-22' },
    ],
  },
  {
    heading: 'Audited Financial Statements',
    items: [
      { title: 'Audited Financials 2021–22', file: '/downloads/financial-statement-2021-22.pdf', year: '2021-22' },
      { title: 'Audited Financials 2020–21', file: '/downloads/financial-statement-2020-21.pdf', year: '2020-21' },
    ],
  },
  {
    heading: 'Impact Assessment Studies',
    items: [
      { title: 'Impact Study — March 2022', file: '/downloads/impact-study-mar-2022.pdf' },
      { title: 'Impact Study — March 2021', file: '/downloads/impact-study-mar-2021.pdf' },
      { title: 'Impact Study — January 2020', file: '/downloads/impact-study-jan-2020.pdf' },
      { title: 'Impact Study — September 2019', file: '/downloads/impact-study-sep-2019.pdf' },
    ],
  },
  {
    heading: 'Programme Literature',
    items: [
      { title: 'NavSahyog Programme Implementation', file: '/downloads/nsf-programme-implementation.pdf' },
      { title: 'Children and the Value of Music, Art and Storytelling', file: '/downloads/children-music-art-storytelling.pdf' },
      { title: 'NavSahyog Foundation — July 2021 Overview', file: '/downloads/navsahyog-foundation-july21.pdf' },
      { title: 'COVID-19 Related Initiatives', file: '/downloads/covid-related-initiatives.pdf' },
    ],
  },
];
