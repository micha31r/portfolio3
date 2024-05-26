import { ARKQUEST, CISSA, DS3, EPM, SKYLINE, SNEAKTIME, STUDYPORT, THEIMPOSSIBLE, WEB, UI, GAME, DESIGN } from './tags'

// Card data, each card has a name, image, date, and tags
// Tags are set using the symbols defined in tags.js
export const CARD_DATA = [
  {
    name: 'DS3 Website',
    image: require('../public/ds3.png'),
    orientation: 'landscape',
    date: '2023',
    href: '/projects/dscubed',
    tags: [DS3, WEB, UI],
  },
  {
    name: 'CISSA FYG',
    image: require('../public/first-year-guide.png'),
    orientation: 'landscape',
    date: '2023',
    href: '/projects/dscubed',
    tags: [CISSA, WEB],
  },
  {
    name: 'Codebrew 2024',
    image: require('../public/codebrew.png'),
    orientation: 'landscape',
    date: '2023',
    href: '/projects/dscubed',
    tags: [CISSA, WEB],
  },
  {
    name: 'Arkquest',
    image: require('../public/arkquest.png'),
    orientation: 'landscape',
    date: '2023',
    href: '/projects/dscubed',
    tags: [ARKQUEST, WEB, UI],
  },
  {
    name: 'Poster',
    image: require('../public/triplink/poster10.png'),
    date: '2023',
    href: '/projects/dscubed',
    tags: [DESIGN],
  },
  {
    name: 'Blossom',
    image: require('../public/blossom/poster1.png'),
    date: '2023',
    tags: [DESIGN],
  },
  {
    name: 'Studyport',
    image: require('../public/studyport/goals.png'),
    orientation: 'landscape',
    date: '2023',
    tags: [STUDYPORT, WEB, UI],
  },
  {
    name: 'Yearbook',
    image: require('../public/yearbook/cover.jpeg'),
    date: '2023',
    tags: [DESIGN],
  },
  {
    name: 'Sneaktime',
    image: require('../public/sneaktime/gameplay.gif'),
    orientation: 'landscape',
    date: '2023',
    tags: [SNEAKTIME, GAME],
  },
  {
    name: 'Skyline',
    image: require('../public/skyline/home1.png'),
    orientation: 'landscape',
    date: '2023',
    href: '/projects/dscubed',
    tags: [SKYLINE, WEB],
  },
  {
    name: 'EPM',
    image: require('../public/epm/home.png'),
    orientation: 'landscape',
    date: '2023',
    href: '/projects/dscubed',
    tags: [EPM, WEB],
  },
  {
    name: 'The Impossible',
    image: require('../public/theimpossible/profile.png'),
    orientation: 'landscape',
    date: '2023',
    href: '/projects/dscubed',
    tags: [THEIMPOSSIBLE, WEB],
  },
]

export default CARD_DATA