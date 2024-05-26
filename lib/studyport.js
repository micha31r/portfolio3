import { WEB, STUDYPORT, UI } from './tags'

// Card data, each card has a name, image, date, and tags
// Tags are set using the symbols defined in tags.js
export const STUDYPORT_DATA = [
  { name: 'Studyport', image: require('../public/studyport/progress.png'), orientation: 'landscape', date: '2022', href: '/projects/studyport', tags: [WEB, STUDYPORT, UI] },
  { name: 'Studyport', image: require('../public/studyport/goals.png'), orientation: 'landscape', date: '2022', href: '/projects/studyport', tags: [WEB, STUDYPORT, UI] },
  { name: 'Studyport', image: require('../public/studyport/results.png'), orientation: 'landscape', date: '2022', href: '/projects/studyport', tags: [WEB, STUDYPORT, UI] },
]

export default STUDYPORT_DATA