// Curated dataset for the homepage "Meet the buildings" showcase.
//
// Visitor-facing copy is sourced from website_building_handoff/website-copy.json
// (the polished copy layer), trimmed to the fields the showcase renders.
// Render guards (enforced in the UI): hide the secondary stat chip when
// secondaryStat is null; hide the holding/ticker badge when isHoldingLinked is
// false; never imply a building grows because a stock price rose.

export type PulseStat =
  | 'Population'
  | 'Happiness'
  | 'Health'
  | 'Science'
  | 'Commerce';

export type BuildingType =
  | 'stockLinked'
  | 'cityFirst'
  | 'sectorHub'
  | 'hybridProgression';

export interface StatChip {
  stat: PulseStat;
  role: 'primary' | 'secondary';
}

export interface ShowcaseBuilding {
  id: string;
  displayName: string;
  type: BuildingType;
  typeLabel: string;
  shortDescription: string;
  detailDescription: string;
  visitorHowItWorks: string[];
  statChips: StatChip[];
  primaryStat: PulseStat;
  secondaryStat: PulseStat | null;
  categoryLabel: string;
  marketSegment: string | null;
  associatedSymbol: string | null;
  associatedCompanyName: string | null;
  isHoldingLinked: boolean;
  progressionNote: string;
  pulseNote: string;
  marketLearningNote: string;
  /** Web-optimized sprite, served from /public/buildings. */
  asset: string;
  /** Which drifting row this building belongs to (1 & 3 → right, 2 → left). */
  row: 1 | 2 | 3;
}

/** Brand color per Pulse stat (matches the in-app Pulse dashboard mock). */
export const PULSE_COLORS: Record<PulseStat, string> = {
  Population: '#5B8DEF',
  Happiness: '#F1B23E',
  Health: '#EC6A9C',
  Science: '#A78BFA',
  Commerce: '#34D399',
};

export const buildings: ShowcaseBuilding[] = [
  // ───────────────────────── Row 1 (drifts right) ─────────────────────────
  {
    id: 'apple-store',
    displayName: 'Apple Store',
    type: 'stockLinked',
    typeLabel: 'Stock-linked building',
    shortDescription:
      'A real Apple holding takes shape in your city as a recognizable Apple Store.',
    detailDescription:
      'In Investoria, the stocks you hold become buildings you can actually see. Apple appears as a recognizable Apple Store and anchors the technology side of your town. It\u2019s one of the most detailed buildings in the game, with art that visibly matures as the building gains experience.',
    visitorHowItWorks: [
      'When you hold Apple, this building represents that holding inside your city.',
      'As you keep playing and learning, it earns experience and grows through six illustrated stages.',
      'Its growth reflects your engagement over time \u2014 never whether the share price went up or down.',
    ],
    statChips: [{ stat: 'Science', role: 'primary' }],
    primaryStat: 'Science',
    secondaryStat: null,
    categoryLabel: 'Technology',
    marketSegment: 'Technology',
    associatedSymbol: 'AAPL',
    associatedCompanyName: 'Apple Inc.',
    isHoldingLinked: true,
    progressionNote:
      'Apple has fully illustrated art for six stages of growth. The building advances as it earns experience through play, achievements, and learning \u2014 not from share-price movement.',
    pulseNote: 'Mainly supports your city\u2019s Science.',
    marketLearningNote:
      'A friendly first step into the technology sector, using a brand almost everyone already knows.',
    asset: '/buildings/apple-store.webp',
    row: 1,
  },
  {
    id: 'coffee-shop',
    displayName: 'Coffee Shop',
    type: 'cityFirst',
    typeLabel: 'City-first building',
    shortDescription:
      'Where the day starts \u2014 a cozy coffee shop that makes a neighborhood feel lived-in.',
    detailDescription:
      'A coffee shop brings warmth, routine, and a sense of place to daily life in your city. It\u2019s one of the clearest examples of a city-first building: its whole job is to make the town feel alive, with only a light nod to the market.',
    visitorHowItWorks: [
      'A city-first building you add to give your town life \u2014 no holding required.',
      'It mainly lifts your city\u2019s Happiness, with a lighter touch of Commerce.',
      'It also offers a gentle window into consumer brands, the businesses built on everyday habits.',
    ],
    statChips: [
      { stat: 'Happiness', role: 'primary' },
      { stat: 'Commerce', role: 'secondary' },
    ],
    primaryStat: 'Happiness',
    secondaryStat: 'Commerce',
    categoryLabel: 'Daily life',
    marketSegment: 'Consumer Brands',
    associatedSymbol: null,
    associatedCompanyName: null,
    isHoldingLinked: false,
    progressionNote:
      'City-first buildings don\u2019t level up on their own. Their value is the character they add to your town and the lift they give a Pulse stat.',
    pulseNote:
      'Mainly supports your city\u2019s Happiness, with a lighter lift to Commerce.',
    marketLearningNote:
      'A soft introduction to consumer brands \u2014 the daily-habit businesses everyone recognizes.',
    asset: '/buildings/coffee-shop.webp',
    row: 1,
  },
  {
    id: 'bank',
    displayName: 'Bank',
    type: 'sectorHub',
    typeLabel: 'Sector hub',
    shortDescription:
      'The financial foundation of a city \u2014 savings, loans, and capital to grow.',
    detailDescription:
      'A bank holds savings, enables loans, and gives residents and businesses the capital they need to build and grow. It\u2019s the hub of the financial sector and quietly draws new residents to nearby neighborhoods.',
    visitorHowItWorks: [
      'A sector hub representing banking and financial services inside your city.',
      'It mainly drives Commerce, with a lighter lift to Population.',
      'It\u2019s a way to understand banks, insurers, and the payment networks money moves on.',
    ],
    statChips: [
      { stat: 'Commerce', role: 'primary' },
      { stat: 'Population', role: 'secondary' },
    ],
    primaryStat: 'Commerce',
    secondaryStat: 'Population',
    categoryLabel: 'Finance',
    marketSegment: 'Banking & Financial Services',
    associatedSymbol: null,
    associatedCompanyName: null,
    isHoldingLinked: false,
    progressionNote:
      'A sector hub, not a leveling building. Its role is to represent finance in your city and support its Pulse stats.',
    pulseNote:
      'Mainly supports your city\u2019s Commerce, with a lighter lift to Population.',
    marketLearningNote: 'A window into banks, insurers, and payment processors.',
    asset: '/buildings/bank.webp',
    row: 1,
  },
  {
    id: 'solar-panel',
    displayName: 'Solar Panel',
    type: 'hybridProgression',
    typeLabel: 'Hybrid progression building',
    shortDescription: 'One of the most visible signs of a city thinking ahead.',
    detailDescription:
      'A solar panel turns sunlight into clean energy, reduces a city\u2019s dependence on outside power, and makes the town more self-sufficient over time. It connects forward-thinking science to real economic activity.',
    visitorHowItWorks: [
      'A building you add that both powers your city and opens a window onto a market sector.',
      'It mainly advances Science, with a lighter lift to Commerce through the energy it produces.',
      'It introduces clean energy as a growing part of the market.',
    ],
    statChips: [
      { stat: 'Science', role: 'primary' },
      { stat: 'Commerce', role: 'secondary' },
    ],
    primaryStat: 'Science',
    secondaryStat: 'Commerce',
    categoryLabel: 'Energy & Utilities',
    marketSegment: 'Clean Energy',
    associatedSymbol: null,
    associatedCompanyName: null,
    isHoldingLinked: false,
    progressionNote:
      'A hybrid building: it works in your city and doubles as a market lens. Any progression comes from play and learning, never from stock prices.',
    pulseNote:
      'Mainly supports your city\u2019s Science, with a lighter lift to Commerce.',
    marketLearningNote: 'A soft window into clean energy.',
    asset: '/buildings/solar-panel.webp',
    row: 1,
  },
  {
    id: 'movie-theater',
    displayName: 'Movie Theater',
    type: 'cityFirst',
    typeLabel: 'City-first building',
    shortDescription: 'Where a city goes to experience something together.',
    detailDescription:
      'A movie theater is one of the few places where hundreds of people share the same story at the same moment \u2014 and that shared experience is part of what makes a neighborhood feel alive.',
    visitorHowItWorks: [
      'A city-first building you add to give your town a shared cultural space \u2014 no holding required.',
      'It mainly lifts Happiness.',
      'It opens a gentle window into the entertainment and media industry.',
    ],
    statChips: [{ stat: 'Happiness', role: 'primary' }],
    primaryStat: 'Happiness',
    secondaryStat: null,
    categoryLabel: 'Consumer & Entertainment',
    marketSegment: 'Entertainment & Media',
    associatedSymbol: null,
    associatedCompanyName: null,
    isHoldingLinked: false,
    progressionNote:
      'City-first buildings don\u2019t level up on their own; their value is the life they bring and the Pulse stat they support.',
    pulseNote: 'Mainly supports your city\u2019s Happiness.',
    marketLearningNote: 'A soft window into entertainment and media.',
    asset: '/buildings/movie-theater.webp',
    row: 1,
  },

  // ───────────────────────── Row 2 (drifts left) ──────────────────────────
  {
    id: 'home',
    displayName: 'Home',
    type: 'cityFirst',
    typeLabel: 'City-first building',
    shortDescription:
      'Every home is a family \u2014 the foundation of a real neighborhood.',
    detailDescription:
      'More homes means more residents, more life, and more depth to your city. Homes are the foundation of any real neighborhood \u2014 without them, a city is just a collection of buildings.',
    visitorHowItWorks: [
      'A city-first building you add to grow your town\u2019s population \u2014 no holding required.',
      'It mainly supports Population, the measure of how many people call your city home.',
      'It gently introduces residential real estate as a part of the market.',
    ],
    statChips: [{ stat: 'Population', role: 'primary' }],
    primaryStat: 'Population',
    secondaryStat: null,
    categoryLabel: 'Housing',
    marketSegment: 'Residential Real Estate',
    associatedSymbol: null,
    associatedCompanyName: null,
    isHoldingLinked: false,
    progressionNote:
      'City-first buildings don\u2019t level up on their own; their value is the life they bring and the Pulse stat they support.',
    pulseNote: 'Mainly supports your city\u2019s Population.',
    marketLearningNote: 'A soft window into residential real estate.',
    asset: '/buildings/home.webp',
    row: 2,
  },
  {
    id: 'data-center',
    displayName: 'Data Center',
    type: 'sectorHub',
    typeLabel: 'Sector hub',
    shortDescription:
      'Where the city\u2019s digital life lives \u2014 serious compute for a connected town.',
    detailDescription:
      'A data center stores, processes, and serves the information modern infrastructure depends on. A city with real compute capacity can support more sophisticated systems and a more connected population.',
    visitorHowItWorks: [
      'A sector hub representing cloud and AI infrastructure inside your city.',
      'It mainly advances Science.',
      'It\u2019s a way to understand the compute powering today\u2019s apps, services, and AI.',
    ],
    statChips: [{ stat: 'Science', role: 'primary' }],
    primaryStat: 'Science',
    secondaryStat: null,
    categoryLabel: 'Science & Technology',
    marketSegment: 'Cloud & AI Infrastructure',
    associatedSymbol: null,
    associatedCompanyName: null,
    isHoldingLinked: false,
    progressionNote:
      'A sector hub, not a leveling building. Its role is to represent cloud and AI infrastructure in your city and support its Pulse stat.',
    pulseNote: 'Mainly supports your city\u2019s Science.',
    marketLearningNote: 'A window into cloud and AI infrastructure.',
    asset: '/buildings/data-center.webp',
    row: 2,
  },
  {
    id: 'restaurant',
    displayName: 'Restaurant',
    type: 'cityFirst',
    typeLabel: 'City-first building',
    shortDescription:
      'The social center of city life \u2014 a place to gather, share a meal, and slow down.',
    detailDescription:
      'A restaurant is where celebrations happen and ordinary days feel a little special. It\u2019s the social heart of a town and one of the buildings that most makes a city feel genuinely inhabited.',
    visitorHowItWorks: [
      'A city-first building you add to give your town a social heart \u2014 no holding required.',
      'It mainly lifts Happiness, with a lighter touch of Commerce.',
      'It opens a gentle window into the dining and hospitality industry.',
    ],
    statChips: [
      { stat: 'Happiness', role: 'primary' },
      { stat: 'Commerce', role: 'secondary' },
    ],
    primaryStat: 'Happiness',
    secondaryStat: 'Commerce',
    categoryLabel: 'Daily life',
    marketSegment: 'Dining & Hospitality',
    associatedSymbol: null,
    associatedCompanyName: null,
    isHoldingLinked: false,
    progressionNote:
      'City-first buildings don\u2019t level up on their own; their value is the life they bring and the Pulse stat they support.',
    pulseNote:
      'Mainly supports your city\u2019s Happiness, with a lighter lift to Commerce.',
    marketLearningNote: 'A soft introduction to dining and hospitality.',
    asset: '/buildings/restaurant.webp',
    row: 2,
  },
  {
    id: 'amazon-warehouse',
    displayName: 'Amazon Warehouse',
    type: 'stockLinked',
    typeLabel: 'Stock-linked building',
    shortDescription:
      'An Amazon holding lands in your city as a busy distribution warehouse.',
    detailDescription:
      'Amazon appears as a bustling distribution warehouse, giving your city a logistics-forward landmark on its retail side. It reads instantly as commerce and movement.',
    visitorHowItWorks: [
      'When you hold Amazon, this building represents that holding in your city.',
      'It earns experience through play like every other building.',
      'Its growth comes from engagement over time, not from the share price.',
    ],
    statChips: [{ stat: 'Happiness', role: 'primary' }],
    primaryStat: 'Happiness',
    secondaryStat: null,
    categoryLabel: 'Retail',
    marketSegment: 'Retail',
    associatedSymbol: 'AMZN',
    associatedCompanyName: 'Amazon.com Inc.',
    isHoldingLinked: true,
    progressionNote:
      'Currently one illustrated stage, earned and grown through play rather than share price.',
    pulseNote: 'Mainly supports your city\u2019s Happiness.',
    marketLearningNote:
      'Connects everyday online shopping to the wider retail sector.',
    asset: '/buildings/amazon-warehouse.webp',
    row: 2,
  },
  {
    id: 'pharmacy',
    displayName: 'Pharmacy',
    type: 'sectorHub',
    typeLabel: 'Sector hub',
    shortDescription:
      'Medicine and everyday health essentials within reach of every resident.',
    detailDescription:
      'A pharmacy is one of the most visited buildings in any city \u2014 a quiet but essential part of how a community stays well. It introduces the pharmaceutical world through a familiar storefront.',
    visitorHowItWorks: [
      'A sector hub representing drug retail and distribution inside your city.',
      'It mainly supports Health.',
      'It\u2019s an approachable way to understand pharmacies and the medicine supply chain.',
    ],
    statChips: [{ stat: 'Health', role: 'primary' }],
    primaryStat: 'Health',
    secondaryStat: null,
    categoryLabel: 'Healthcare',
    marketSegment: 'Drug Retail & Distribution',
    associatedSymbol: null,
    associatedCompanyName: null,
    isHoldingLinked: false,
    progressionNote:
      'A sector hub, not a leveling building. Its role is to represent drug retail in your city and support its Pulse stat.',
    pulseNote: 'Mainly supports your city\u2019s Health.',
    marketLearningNote:
      'A window into pharmacy chains and the wider drug supply chain.',
    asset: '/buildings/pharmacy.webp',
    row: 2,
  },
  {
    id: 'google-building',
    displayName: 'Google Building',
    type: 'stockLinked',
    typeLabel: 'Stock-linked building',
    shortDescription:
      'An Alphabet holding becomes a sleek Google campus on your city skyline.',
    detailDescription:
      'Holding Alphabet places a modern Google campus in your city\u2019s technology district. Like the Apple Store, it\u2019s one of the few buildings with fully illustrated art for every stage of growth, so it gives your skyline a distinctly tech-forward silhouette as it matures.',
    visitorHowItWorks: [
      'When you hold Alphabet, this building represents that holding in your city.',
      'It earns experience as you play and steps through six illustrated stages of growth.',
      'Progress comes from engagement and learning, never from the stock price.',
    ],
    statChips: [{ stat: 'Science', role: 'primary' }],
    primaryStat: 'Science',
    secondaryStat: null,
    categoryLabel: 'Technology',
    marketSegment: 'Technology',
    associatedSymbol: 'GOOG',
    associatedCompanyName: 'Alphabet Inc.',
    isHoldingLinked: true,
    progressionNote:
      'Six fully illustrated growth stages, advanced by experience earned through play \u2014 independent of share price.',
    pulseNote: 'Mainly supports your city\u2019s Science.',
    marketLearningNote:
      'An easy introduction to the technology sector through a household-name brand.',
    asset: '/buildings/google-building.webp',
    row: 2,
  },

  // ───────────────────────── Row 3 (drifts right) ─────────────────────────
  {
    id: 'hospital',
    displayName: 'Hospital',
    type: 'sectorHub',
    typeLabel: 'Sector hub',
    shortDescription:
      'The most critical building in any city \u2014 where its care for people is most visible.',
    detailDescription:
      'A hospital is where residents go when they\u2019re sick or hurt, and a city with a strong hospital is one that can grow safely. It also acts as the hub for the entire healthcare sector in your town.',
    visitorHowItWorks: [
      'A sector hub: it represents the whole healthcare part of the market inside your city.',
      'It mainly supports Health.',
      'It\u2019s a way to understand healthcare \u2014 hospitals, insurers, devices, and medicines \u2014 through the city.',
    ],
    statChips: [{ stat: 'Health', role: 'primary' }],
    primaryStat: 'Health',
    secondaryStat: null,
    categoryLabel: 'Healthcare',
    marketSegment: 'Healthcare Sector',
    associatedSymbol: null,
    associatedCompanyName: null,
    isHoldingLinked: false,
    progressionNote:
      'A sector hub rather than a leveling building. Its role is to represent healthcare in your city and support its Pulse stat.',
    pulseNote: 'Mainly supports your city\u2019s Health.',
    marketLearningNote: 'A clear way into the broad healthcare sector.',
    asset: '/buildings/hospital.webp',
    row: 3,
  },
  {
    id: 'apartment',
    displayName: 'Apartment',
    type: 'hybridProgression',
    typeLabel: 'Hybrid progression building',
    shortDescription:
      'Density without sprawl \u2014 apartments let a growing city support more life.',
    detailDescription:
      'Apartments multiply the people a single block can support. They\u2019re the backbone of a growing, urban city \u2014 dense, efficient, and full of life \u2014 and they introduce real estate as a city asset.',
    visitorHowItWorks: [
      'A building you add to your city that both grows the town and opens a window onto a market sector.',
      'It mainly supports Population and gives your town real urban density.',
      'It introduces the real estate sector, including the trusts that let people own property through the market.',
    ],
    statChips: [{ stat: 'Population', role: 'primary' }],
    primaryStat: 'Population',
    secondaryStat: null,
    categoryLabel: 'Real Estate',
    marketSegment: 'Real Estate Sector',
    associatedSymbol: null,
    associatedCompanyName: null,
    isHoldingLinked: false,
    progressionNote:
      'A hybrid building: it does a real job in your city and doubles as a market lens. Any progression comes from playing and learning, never from stock prices.',
    pulseNote: 'Mainly supports your city\u2019s Population.',
    marketLearningNote:
      'A soft introduction to the real estate sector and property-owning trusts (REITs).',
    asset: '/buildings/apartment.webp',
    row: 3,
  },
  {
    id: 'shopping-plaza',
    displayName: 'Shopping Plaza',
    type: 'sectorHub',
    typeLabel: 'Sector hub',
    shortDescription:
      'A center of gravity for the neighborhood where consumer spending becomes tangible.',
    detailDescription:
      'A shopping plaza brings many stores together, creates a hub for daily commerce, and gives a neighborhood a real center of gravity. It\u2019s the physical expression of how consumer spending moves through a community.',
    visitorHowItWorks: [
      'A sector hub representing the broad consumer economy inside your city.',
      'It mainly drives Commerce, with a lift to Happiness.',
      'It\u2019s a way to understand both everyday essentials and the things people buy when they can.',
    ],
    statChips: [
      { stat: 'Commerce', role: 'primary' },
      { stat: 'Happiness', role: 'secondary' },
    ],
    primaryStat: 'Commerce',
    secondaryStat: 'Happiness',
    categoryLabel: 'Consumer & Entertainment',
    marketSegment: 'Consumer Economy',
    associatedSymbol: null,
    associatedCompanyName: null,
    isHoldingLinked: false,
    progressionNote:
      'A sector hub, not a leveling building. Its role is to represent the consumer economy in your city and support its Pulse stats.',
    pulseNote:
      'Mainly supports your city\u2019s Commerce, with a lighter lift to Happiness.',
    marketLearningNote:
      'A window into the staples-and-discretionary consumer economy.',
    asset: '/buildings/shopping-plaza.webp',
    row: 3,
  },
  {
    id: 'netflix-studio',
    displayName: 'Netflix Studio',
    type: 'stockLinked',
    typeLabel: 'Stock-linked building',
    shortDescription:
      'A Netflix holding appears as a streaming studio that gives the city a cultural anchor.',
    detailDescription:
      'Netflix shows up as a streaming studio \u2014 a recognizable media landmark that bridges technology and entertainment. It\u2019s a warm, story-friendly building that helps a city feel like it has its own culture.',
    visitorHowItWorks: [
      'When you hold Netflix, this building represents that holding in your city.',
      'It earns experience through play.',
      'Its growth comes from engagement over time, not from the share price.',
    ],
    statChips: [{ stat: 'Science', role: 'primary' }],
    primaryStat: 'Science',
    secondaryStat: null,
    categoryLabel: 'Technology',
    marketSegment: 'Entertainment & Media',
    associatedSymbol: 'NFLX',
    associatedCompanyName: 'Netflix Inc.',
    isHoldingLinked: true,
    progressionNote:
      'Currently one illustrated stage, grown through play rather than price.',
    pulseNote: 'Mainly supports your city\u2019s Science.',
    marketLearningNote: 'A friendly window into streaming and the media business.',
    asset: '/buildings/netflix-studio.webp',
    row: 3,
  },
  {
    id: 'factory',
    displayName: 'Factory',
    type: 'hybridProgression',
    typeLabel: 'Hybrid progression building',
    shortDescription:
      'Where things get made \u2014 raw materials in, finished goods out.',
    detailDescription:
      'A well-run factory means more local production, more local jobs, and a city that contributes to its own economy with every shift. It\u2019s a working building with a clear link to how goods are made.',
    visitorHowItWorks: [
      'A building you add that both does a job in your city and opens a window onto a market sector.',
      'It mainly drives Commerce through local production.',
      'It introduces manufacturing \u2014 the companies that make the goods the world uses.',
    ],
    statChips: [{ stat: 'Commerce', role: 'primary' }],
    primaryStat: 'Commerce',
    secondaryStat: null,
    categoryLabel: 'Industrial',
    marketSegment: 'Manufacturing',
    associatedSymbol: null,
    associatedCompanyName: null,
    isHoldingLinked: false,
    progressionNote:
      'A hybrid building: practical in your city and a market lens. Any progression comes from play and learning, not from stock prices.',
    pulseNote: 'Mainly supports your city\u2019s Commerce.',
    marketLearningNote:
      'A soft introduction to manufacturing within the wider industrial sector.',
    asset: '/buildings/factory.webp',
    row: 3,
  },
];

export const rowBuildings = (row: 1 | 2 | 3): ShowcaseBuilding[] =>
  buildings.filter((b) => b.row === row);
