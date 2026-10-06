/**
 * Dummy data for the generated product screens (MockScreen.astro).
 * Every company, person, and figure here is fictional.
 */

export const screenKinds = [
  'register',
  'books',
  'report',
  'grid',
  'setup',
  'dashboard',
  'statements',
  'capital',
  'ratios',
  'weights',
  'deals',
  'stats',
] as const;
export type ScreenKind = (typeof screenKinds)[number];

export const company = 'Harbor & Pine Manufacturing';

export const assets = [
  ['A-1001', 'CNC machining center', '03/14/2021', '412,500', 'MACRS', '7', '268,110', '144,390'],
  ['A-1002', 'Forklift — electric', '07/02/2022', '38,900', 'SL', '5', '17,505', '21,395'],
  ['A-1003', 'Warehouse racking', '01/10/2020', '96,250', 'SL', '10', '57,750', '38,500'],
  ['A-1004', 'Delivery van', '09/23/2023', '54,300', 'MACRS', '5', '20,634', '33,666'],
  ['A-1005', 'ERP server cluster', '05/05/2022', '71,800', 'SL', '5', '40,688', '31,112'],
  ['A-1006', 'Paint booth', '11/18/2019', '128,000', 'MACRS', '7', '115,328', '12,672'],
  ['A-1007', 'Office build-out', '02/01/2024', '210,400', 'SL', '15', '30,393', '180,007'],
  ['A-1008', 'Laser cutter', '08/12/2024', '189,750', 'Bonus', '7', '151,800', '37,950'],
  ['A-1009', 'Conveyor line 3', '04/27/2021', '143,600', 'MACRS', '7', '93,340', '50,260'],
];

export const groups = [
  { name: 'Machinery & equipment', rows: [assets[0], assets[5], assets[7], assets[8]], total: '873,850' },
  { name: 'Vehicles', rows: [assets[1], assets[3]], total: '93,200' },
  { name: 'Buildings & improvements', rows: [assets[2], assets[6]], total: '306,650' },
];

export const books = {
  cols: ['GAAP', 'Federal', 'AMT', 'State', 'ACE', 'Other'],
  rows: [
    ['Cost basis', '412,500', '412,500', '412,500', '412,500', '412,500', '412,500'],
    ['Method', 'SL', 'MACRS', 'ADS', 'MACRS', 'ACE', 'SL'],
    ['Life (yrs)', '10', '7', '10', '7', '10', '10'],
    ['Convention', 'Full mo', 'Half yr', 'Half yr', 'Half yr', 'Half yr', 'Full mo'],
    ['Bonus %', '—', '60%', '—', '—', '—', '—'],
    ['§179', '—', '25,000', '—', '25,000', '—', '—'],
    ['Accum. depr.', '148,500', '268,110', '154,690', '243,110', '161,300', '148,500'],
  ],
};

export const statements = {
  years: ['2021', '2022', '2023', '2024', 'TTM'],
  rows: [
    { label: 'Net sales', vals: ['18,420', '20,115', '22,780', '24,960', '25,630'], strong: true },
    { label: 'Cost of goods sold', vals: ['11,236', '12,069', '13,440', '14,602', '14,866'] },
    { label: 'Gross profit', vals: ['7,184', '8,046', '9,340', '10,358', '10,764'], strong: true },
    { label: 'Officer compensation', vals: ['1,150', '1,210', '1,260', '1,320', '1,340'], adj: '−420' },
    { label: 'Rent — related party', vals: ['480', '480', '480', '480', '480'], adj: '−96' },
    { label: 'Operating expenses', vals: ['3,912', '4,188', '4,602', '4,975', '5,061'] },
    { label: 'EBITDA', vals: ['1,642', '2,168', '2,998', '3,583', '3,883'], strong: true },
    { label: 'Adjusted EBITDA', vals: ['2,158', '2,684', '3,514', '4,099', '4,399'], strong: true, accent: true },
  ],
};

export const kpis = [
  { label: 'IRR on equity', value: '24.6%', delta: '+3.1 pts' },
  { label: 'Net present value', value: '$6.42M', delta: 'at 18% hurdle' },
  { label: 'Payback', value: '4.1 yrs', delta: 'Buy/Hold' },
  { label: 'Investment turns', value: '2.4×', delta: 'year 7 exit' },
];

export const bars = [38, 46, 44, 58, 66, 74, 81];

export const capital = [
  { name: 'Senior term debt', amount: '12,000', rate: '7.25%', term: '7 yrs', pct: 48 },
  { name: 'Revolving line', amount: '2,500', rate: 'SOFR + 2.5', term: 'ABL', pct: 10 },
  { name: 'Seller note', amount: '3,000', rate: '6.00%', term: '5 yrs', pct: 12 },
  { name: 'Mezzanine', amount: '2,500', rate: '12.0% + warrants', term: '6 yrs', pct: 10 },
  { name: 'Buyer equity', amount: '5,000', rate: '—', term: '—', pct: 20 },
];

export const ratios = [
  ['Current ratio', '1.84', '1.62', '▲'],
  ['Debt / EBITDA', '2.10', '2.85', '▲'],
  ['Gross margin', '41.5%', '36.2%', '▲'],
  ['DSO (days)', '47', '41', '▼'],
  ['Return on equity', '18.9%', '14.3%', '▲'],
  ['Sustainable growth', '11.2%', '—', '•'],
];

export const weights = [
  { method: 'Discounted cash flow', approach: 'Income', value: '$24.8M', weight: 40 },
  { method: 'Capitalized earnings', approach: 'Income', value: '$23.1M', weight: 20 },
  { method: 'Guideline transactions', approach: 'Market', value: '$26.2M', weight: 30 },
  { method: 'Guideline public cos.', approach: 'Market', value: '$27.9M', weight: 0 },
  { method: 'Adjusted net assets', approach: 'Asset', value: '$15.6M', weight: 10 },
];

export const deals = [
  ['03/2026', 'Precision metal fabrication', 'Private', 'Asset', '18.4', '5.9×', '0.71×'],
  ['01/2026', 'Industrial coatings', 'Private', 'Stock', '42.0', '7.2×', '1.08×'],
  ['11/2025', 'Contract packaging', 'Subsidiary', 'Asset', '9.6', '4.8×', '0.55×'],
  ['10/2025', 'Machine shop services', 'Private', 'Asset', '6.1', '4.4×', '0.62×'],
  ['08/2025', 'Plastic injection molding', 'Private', 'Stock', '23.5', '6.3×', '0.88×'],
  ['06/2025', 'Specialty fasteners', 'Public', 'Stock', '64.8', '8.1×', '1.24×'],
  ['04/2025', 'Sheet metal components', 'Private', 'Asset', '12.2', '5.4×', '0.69×'],
];

export const stats = [
  ['Count', '7', '7'],
  ['Mean', '6.01×', '0.83×'],
  ['Median', '5.90×', '0.71×'],
  ['Harmonic mean', '5.78×', '0.77×'],
  ['Std. deviation', '1.27', '0.25'],
  ['Coeff. of variation', '0.21', '0.30'],
  ['R-squared', '0.86', '0.74'],
  ['Interquartile range', '4.9× – 7.2×', '0.62× – 1.08×'],
];

export const setup: Record<string, { section: string; fields: [string, string][] }[]> = {
  asset: [
    {
      section: 'Identification',
      fields: [
        ['Asset ID', 'A-1001'],
        ['Description', 'CNC machining center'],
        ['Group', 'Machinery & equipment'],
        ['Location', 'Plant 2 — Tacoma'],
        ['Department', 'Production'],
      ],
    },
    {
      section: 'Accounting',
      fields: [
        ['GL asset account', '1610-200'],
        ['GL depreciation', '6420-200'],
        ['Placed in service', '03/14/2021'],
        ['Tax class', '7-yr property'],
      ],
    },
  ],
  control: [
    {
      section: 'Custody',
      fields: [
        ['Custodian', 'J. Alvarez'],
        ['Condition', 'Good'],
        ['Serial no.', 'HP-55A-20931'],
        ['Last inspected', '02/03/2026'],
      ],
    },
    {
      section: 'Warranty & service',
      fields: [
        ['Vendor', 'Northgate Machine Co.'],
        ['Warranty ends', '03/14/2027'],
        ['Service plan', 'Annual — preventive'],
        ['Attachments', '4 files'],
      ],
    },
  ],
  company: [
    {
      section: 'Subject company',
      fields: [
        ['Name', company],
        ['Entity type', 'S corporation'],
        ['Industry (NAICS)', '332710 — Machine shops'],
        ['Fiscal year end', 'December 31'],
        ['Employees', '148'],
      ],
    },
    {
      section: 'Engagement',
      fields: [
        ['Valuation date', '12/31/2025'],
        ['Standard of value', 'Fair market value'],
        ['Premise', 'Going concern'],
        ['Interest valued', '35% common, non-voting'],
      ],
    },
  ],
  deal: [
    {
      section: 'Transaction',
      fields: [
        ['Target', 'Contract packaging — Midwest'],
        ['Closing date', '11/2025'],
        ['Structure', 'Asset purchase'],
        ['Price', '$9.6M'],
        ['Terms', '80% cash, 20% seller note'],
      ],
    },
    {
      section: 'Seller financials',
      fields: [
        ['Revenue', '$17.4M'],
        ['EBITDA', '$2.0M'],
        ['Total assets', '$8.1M'],
        ['Price / EBITDA', '4.8×'],
      ],
    },
  ],
  rates: [
    {
      section: 'Build-up rate',
      fields: [
        ['Risk-free rate', '4.35%'],
        ['Equity risk premium', '5.50%'],
        ['Size premium', '4.10%'],
        ['Company-specific risk', '3.00%'],
        ['Discount rate', '16.95%'],
      ],
    },
    {
      section: 'Capitalization',
      fields: [
        ['Long-term growth', '3.00%'],
        ['Capitalization rate', '13.95%'],
        ['Benefit stream', 'Net cash flow to equity'],
        ['Terminal value', 'Gordon growth'],
      ],
    },
  ],
};

export const navSets: Record<string, string[]> = {
  assets: ['Asset listing', 'Multi-book', 'Reports', 'Flex View', 'Asset control', 'Disposals', 'CIP projects'],
  deals: ['Screening', 'Historic financials', 'Normalization', 'Valuation', 'Pricing', 'Deal terms', 'Financing', 'Post-deal', 'Reports'],
  valuation: ['Core data', 'Normalization', 'Analysis', 'Projections', 'Income approach', 'Market approach', 'Asset approach', 'Conclusion', 'Report'],
  benchmark: ['Setup', 'Statements', 'Earnings & cash', 'Ratios', 'Common-size', 'Models', 'Industry', 'Report'],
  index: ['Search', 'Results', 'Selected deals', 'Statistics', 'Thumbnail value'],
};
