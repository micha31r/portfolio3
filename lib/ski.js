import { DESIGN, SKI } from './tags'

// Card data, each card has a name, image, date, and tags
// Tags are set using the symbols defined in tags.js
export const SKI_DATA = [
  { name: 'Ski Design', image: require('../public/ski/mockup.png'), orientation: 'portrait', date: '2020', href: '/projects/ski', tags: [DESIGN, SKI] },
]

export default SKI_DATA