export type Category = 'News' | 'Strategy' | 'Hand Analysis' | 'Player Story'

export type Article = {
  slug: string
  category: Category
  title: string
  dek: string
  author: string
  date: string
  readTime: string
  image?: string
  level?: 'Beginner' | 'Intermediate' | 'Advanced'
  body: string[]
}

export const articles: Article[] = [
  {
    slug: 'coastal-championship-final-table-recap',
    category: 'News',
    title: 'A short stack, two double-ups, and a title: inside the Coastal Championship final table',
    dek: 'Mara Okafor arrived at the final nine with 11 big blinds. Six hours later she was holding the trophy.',
    author: 'Daniel Reyes',
    date: '2026-09-24',
    readTime: '6 min read',
    image: '/images/final-table.png',
    body: [
      'When play resumed on day five of the Coastal Championship Main Event, few people on the rail gave Mara Okafor much of a chance. She started the final table ninth of nine in chips, with barely enough to survive two orbits.',
      'Her first double-up came in the opening level, when she shoved ace-nine from the cutoff and held against the big blind’s king-queen. The second arrived an hour later: pocket fives against two overcards, a classic coin flip that went her way.',
      'From there, Okafor shifted gears. She opened more pots from late position, applied pressure on the bubble of each pay jump, and avoided marginal confrontations with the chip leader until she had a hand worth playing for her tournament life.',
      'Heads-up play lasted just 40 minutes. On the final hand, Okafor called a river shove with top pair, and her opponent’s missed flush draw sealed the title.',
      '“I told myself to stop counting blinds and start looking for spots,” she said afterward. “Short stacks win tournaments all the time. You just need to be ready when the cards cooperate.”',
    ],
  },
  {
    slug: 'online-series-record-turnout',
    category: 'News',
    title: 'Autumn online series posts record turnout as mid-stakes fields surge',
    dek: 'Organizers credit lower buy-ins and more flexible late registration for a 30% jump in entries.',
    author: 'Priya Natarajan',
    date: '2026-09-22',
    readTime: '4 min read',
    body: [
      'The autumn online festival wrapped up its first week with the largest fields in its history, led by a strong showing in the mid-stakes events.',
      'Organizers pointed to two changes: a new tier of events priced between the micro and high-roller schedules, and late registration that now runs through the first four levels.',
      'Players say the format makes it easier to fit a tournament around a working week. Expect more operators to follow suit before the winter schedule.',
    ],
  },
  {
    slug: 'regulation-update-shared-liquidity',
    category: 'News',
    title: 'What the latest shared-liquidity talks mean for online players',
    dek: 'Bigger player pools could mean bigger guarantees — but the timeline is still unclear.',
    author: 'Priya Natarajan',
    date: '2026-09-19',
    readTime: '5 min read',
    body: [
      'Shared liquidity lets players in different regulated markets sit at the same tables. For players, the practical upside is simple: more games running at more stakes, and larger tournament guarantees.',
      'Negotiations are ongoing, and any agreement would still need regulatory sign-off in each market. We will keep tracking developments as they happen.',
    ],
  },
  {
    slug: 'starting-hands-by-position',
    category: 'Strategy',
    level: 'Beginner',
    title: 'Starting hands by position: the one chart every new player needs',
    dek: 'Where you sit changes which hands are worth playing. Here is a simple framework to start with.',
    author: 'Coach Lena Park',
    date: '2026-09-23',
    readTime: '8 min read',
    image: '/images/pocket-aces.png',
    body: [
      'The single biggest leak for newer players is playing too many hands from early position. When you act first, everyone behind you still gets to make a decision — and any one of them might have a strong hand.',
      'Early position: stick to big pairs (tens and up), ace-king, ace-queen and ace-jack suited. Tight is right here.',
      'Middle position: add smaller pairs down to sevens, suited broadway hands like king-queen suited, and ace-ten suited.',
      'Late position (cutoff and button): widen considerably. Suited connectors, suited aces, and most broadway combinations become profitable because you act last after the flop.',
      'Blinds: you are getting a discount to call, but you will be out of position. Defend with hands that play well post-flop rather than every two cards.',
      'Treat this as a starting point, not a rulebook. As you gain experience, you will learn to adjust to the tendencies of the players at your table.',
    ],
  },
  {
    slug: 'bankroll-management-basics',
    category: 'Strategy',
    level: 'Beginner',
    title: 'Bankroll management: how to stay in the game long enough to get good',
    dek: 'Variance is real. A simple buy-in rule protects you from the downswings every player faces.',
    author: 'Coach Lena Park',
    date: '2026-09-18',
    readTime: '7 min read',
    body: [
      'Your bankroll is money set aside specifically for poker — separate from rent, bills and savings. Treating it that way is the first step to playing with a clear head.',
      'A common guideline for cash games is to keep at least 20–30 buy-ins for the stake you play. For tournaments, where variance is much higher, many players use 100 buy-ins or more.',
      'Move down in stakes when your bankroll drops below your threshold. It is not a failure — it is how professionals survive the swings.',
      'Finally, always play responsibly. Set limits on time and money before you sit down, and stick to them.',
    ],
  },
  {
    slug: 'continuation-betting-guide',
    category: 'Strategy',
    level: 'Intermediate',
    title: 'Continuation betting: when to fire and when to check',
    dek: 'Board texture tells you more about your c-bet than your actual hand does.',
    author: 'Marcus Hale',
    date: '2026-09-15',
    readTime: '9 min read',
    body: [
      'A continuation bet is a bet on the flop by the pre-flop raiser. It works because the raiser usually has the stronger range — but not on every board.',
      'Dry, high-card boards like king-seven-two rainbow favor the raiser. Small c-bets with most of your range are effective here.',
      'Wet, connected boards like nine-eight-seven with two of a suit hit the caller’s range hard. Check more often and bet with purpose when you do.',
      'Sizing matters: smaller bets on boards that favor you, larger bets when you want to deny equity to draws.',
    ],
  },
  {
    slug: 'hero-call-river-analysis',
    category: 'Hand Analysis',
    level: 'Advanced',
    title: 'Breaking down the river hero call that decided the Coastal Championship',
    dek: 'Top pair, a missed flush draw and a 2.5x pot shove. Was it a great call or a lucky one?',
    author: 'Marcus Hale',
    date: '2026-09-25',
    readTime: '10 min read',
    image: '/images/river-card.png',
    body: [
      'Setup: heads-up, effective stacks of 38 big blinds. Okafor limps the button with queen-ten offsuit. Her opponent checks the big blind.',
      'Flop: ten of hearts, six of hearts, two of clubs. Okafor has top pair. Her opponent checks, she bets a third of the pot, and gets called.',
      'Turn: four of spades. Both players check. The check back protects Okafor’s range and keeps weaker hands and draws in the pot.',
      'River: king of clubs. The flush draw misses. Her opponent moves all in for roughly 2.5 times the pot.',
      'The key question: what does the big blind have? Most value hands like sets or two pair would likely have raised the flop or bet the turn. Many heart draws, however, would check-call the flop and then look for a spot to bluff when they miss.',
      'Given the line, Okafor’s top pair beats a large portion of the bluffs her opponent can have. The call was well-reasoned — and it happened to be right.',
    ],
  },
  {
    slug: 'the-dealer-who-became-a-champion',
    category: 'Player Story',
    title: 'Twelve years dealing, one year playing: the unlikely rise of Tomás Ibarra',
    dek: 'He spent over a decade on the other side of the felt. Now he is one of the circuit’s most consistent grinders.',
    author: 'Daniel Reyes',
    date: '2026-09-20',
    readTime: '12 min read',
    image: '/images/player-story.png',
    body: [
      'For twelve years, Tomás Ibarra watched thousands of hands from the dealer’s seat. He saw how the best players carried themselves — and how the rest gave away their chips.',
      '“You learn patience,” he says. “You see the same mistakes over and over. The players who last are the ones who stay calm when things go wrong.”',
      'He started playing small tournaments on his days off, keeping a strict bankroll and a notebook of every hand he could not figure out.',
      'Last season he cashed in fourteen events and made three final tables. This year, he has left the dealer’s box for good.',
    ],
  },
]

export type Tournament = {
  name: string
  series: string
  location: string
  startDate: string
  endDate: string
  buyIn: string
  guarantee: string
  format: 'Live' | 'Online'
}

export const tournaments: Tournament[] = [
  {
    name: 'Autumn Classic Main Event',
    series: 'Autumn Classic Series',
    location: 'Las Vegas, NV',
    startDate: '2026-10-08',
    endDate: '2026-10-14',
    buyIn: '$3,500',
    guarantee: '$5,000,000',
    format: 'Live',
  },
  {
    name: 'Online Championship Week',
    series: 'Global Online Series',
    location: 'Online',
    startDate: '2026-10-18',
    endDate: '2026-10-25',
    buyIn: '$215 – $10,300',
    guarantee: '$40,000,000',
    format: 'Online',
  },
  {
    name: 'European Masters High Roller',
    series: 'European Masters',
    location: 'Barcelona, Spain',
    startDate: '2026-11-03',
    endDate: '2026-11-09',
    buyIn: '€25,000',
    guarantee: '€10,000,000',
    format: 'Live',
  },
  {
    name: 'Atlantic Poker Open',
    series: 'Atlantic Tour',
    location: 'Atlantic City, NJ',
    startDate: '2026-11-19',
    endDate: '2026-11-24',
    buyIn: '$1,700',
    guarantee: '$2,000,000',
    format: 'Live',
  },
  {
    name: 'Winter Festival Main Event',
    series: 'Caribbean Winter Festival',
    location: 'Nassau, Bahamas',
    startDate: '2026-12-05',
    endDate: '2026-12-12',
    buyIn: '$5,300',
    guarantee: '$8,000,000',
    format: 'Live',
  },
  {
    name: 'New Year Deepstack',
    series: 'Pacific Poker Tour',
    location: 'Online',
    startDate: '2027-01-02',
    endDate: '2027-01-05',
    buyIn: '$109',
    guarantee: '$3,000,000',
    format: 'Online',
  },
]

export type PlayerStat = {
  rank: number
  name: string
  country: string
  earnings: string
  cashes: number
  titles: number
}

export const leaderboard: PlayerStat[] = [
  { rank: 1, name: 'Mara Okafor', country: 'UK', earnings: '$4,812,300', cashes: 22, titles: 3 },
  { rank: 2, name: 'Jonas Lindqvist', country: 'Sweden', earnings: '$4,105,900', cashes: 18, titles: 2 },
  { rank: 3, name: 'Kenji Watanabe', country: 'Japan', earnings: '$3,660,450', cashes: 27, titles: 1 },
  { rank: 4, name: 'Tomás Ibarra', country: 'Mexico', earnings: '$2,944,000', cashes: 31, titles: 2 },
  { rank: 5, name: 'Aisha Rahman', country: 'Canada', earnings: '$2,701,780', cashes: 16, titles: 1 },
]

export const seasonStats = [
  { label: 'Live events tracked', value: '1,284' },
  { label: 'Total prize pools', value: '$612M' },
  { label: 'Largest field', value: '10,112' },
  { label: 'Biggest single cash', value: '$10.2M' },
]

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug)
}

export function formatDate(date: string, options?: Intl.DateTimeFormatOptions) {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
    ...options,
  })
}
