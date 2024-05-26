import { WEB, UI, EPM } from './tags'

// Card data, each card has a name, image, date, and tags
// Tags are set using the symbols defined in tags.js
export const EPM_DATA = [
  { name: 'Evan\'s Property Management', image: require('../public/epm/home.png'), orientation: 'landscape', date: '2021', href: '/projects/epm', tags: [WEB, UI, EPM] },
  { name: 'Evan\'s Property Management', image: require('../public/epm/locations.png'), orientation: 'landscape', date: '2021', href: '/projects/epm', tags: [WEB, UI, EPM] },
  { name: 'Evan\'s Property Management', image: require('../public/epm/process.png'), orientation: 'landscape', date: '2021', href: '/projects/epm', tags: [WEB, UI, EPM] },
]

export default EPM_DATA