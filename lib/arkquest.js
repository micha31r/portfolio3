import { WEB, UI, ARKQUEST } from './tags'

// Card data, each card has a name, image, date, and tags
// Tags are set using the symbols defined in tags.js
export const ARKQUEST_DATA = [
  { name: 'Ark Quest', image: require('../public/arkquest/home.png'), orientation: 'landscape', date: '2022', href: '/projects/arkquest', tags: [UI, WEB, ARKQUEST] },
  { name: 'Ark Quest', image: require('../public/arkquest/mission.png'), orientation: 'landscape', date: '2022', href: '/projects/arkquest', tags: [UI, WEB, ARKQUEST] },
  { name: 'Ark Quest', image: require('../public/arkquest/blog2.png'), orientation: 'landscape', date: '2022', href: '/projects/arkquest', tags: [UI, WEB, ARKQUEST] },
]

export default ARKQUEST_DATA