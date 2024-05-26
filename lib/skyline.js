import { WEB, UI, SKYLINE } from './tags'

// Card data, each card has a name, image, date, and tags
// Tags are set using the symbols defined in tags.js
export const SKYLINE_DATA = [
  { name: 'Skyline (School)', image: require('../public/skyline/home1.png'), orientation: 'landscape', date: '2021', href: '/projects/skyline', tags: [UI, WEB, SKYLINE] },
  { name: 'Skyline (School)', image: require('../public/skyline/home2.png'), orientation: 'landscape', date: '2021', href: '/projects/skyline', tags: [UI, WEB, SKYLINE] },
  { name: 'Skyline (School)', image: require('../public/skyline/shop5.png'), orientation: 'landscape', date: '2021', href: '/projects/skyline', tags: [UI, WEB, SKYLINE] },
]

export default SKYLINE_DATA