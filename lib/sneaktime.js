import { GAME, SNEAKTIME } from './tags'

// Card data, each card has a name, image, date, and tags
// Tags are set using the symbols defined in tags.js
export const SNEAKTIME_DATA = [
  { name: 'Sneaktime', image: require('../public/sneaktime/gameplay.gif'), orientation: 'landscape', date: '2021', href: '/projects/sneaktime', tags: [GAME, SNEAKTIME] },
]

export default SNEAKTIME_DATA