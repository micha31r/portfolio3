import { UI, WEB, DS3 } from './tags'

// Card data, each card has a name, image, date, and tags
// Tags are set using the symbols defined in tags.js
export const DSCUBED_DATA = [
  { name: 'DSCubed', image: require('../public/dscubed/matrix.png'), orientation: 'landscape', date: '2024', href: '/projects/dscubed', tags: [UI, WEB, DS3] },
  { name: 'DSCubed', image: require('../public/dscubed/events.png'), orientation: 'landscape', date: '2024', href: '/projects/dscubed', tags: [UI, WEB, DS3] },
]

export default DSCUBED_DATA