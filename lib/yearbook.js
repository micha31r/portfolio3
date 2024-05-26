import { DESIGN, YEARBOOK } from './tags'

// Card data, each card has a name, image, date, and tags
// Tags are set using the symbols defined in tags.js
export const YEARBOOK_DATA = [
  { name: 'Yearbook Cover', image: require('../public/yearbook/cover.jpg'), orientation: 'portrait', date: '2021', href: '/projects/yearbook', tags: [DESIGN, YEARBOOK] },
]

export default YEARBOOK_DATA