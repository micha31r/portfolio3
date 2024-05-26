import { WEB, STUDYPORT, UI } from './tags'

// Card data, each card has a name, image, date, and tags
// Tags are set using the symbols defined in tags.js
export const STUDYPORT_DATA = [
  { name: 'Studyport', image: require('../public/studyport/progress.png'), orientation: 'landscape', date: '2022', href: '/projects/codebrew', tags: [WEB, STUDYPORT, UI] },
]

export default STUDYPORT_DATA