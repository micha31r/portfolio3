import { WEB, CISSA } from './tags'

// Card data, each card has a name, image, date, and tags
// Tags are set using the symbols defined in tags.js
export const CODEBREW_DATA = [
  { name: 'Codebrew', image: require('../public/codebrew/home.png'), orientation: 'landscape', date: '2024', href: '/projects/codebrew', tags: [WEB, CISSA] },
]

export default CODEBREW_DATA