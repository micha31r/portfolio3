import ARKQUEST_DATA from './arkquest'
import BLOSSOM_DATA from './blossom'
import CODEBREW_DATA from './codebrew'
import DSCUBED_DATA from './dscubed'
import EPM_DATA from './epm'
import FYG_DATA from './fyi'
import SKI_DATA from './ski'
import SKYLINE_DATA from './skyline'
import SNEAKTIME_DATA from './sneaktime'
import THEIMPOSSIBLE_DATA from './theimpossible'
import TRIPLINK_DATA from './triplink'
import YEARBOOK_DATA from './yearbook'
import STUDYPORT_DATA from './studyport'

// Card data, each card has a name, image, date, and tags
// Tags are set using the symbols defined in tags.js
export const CARD_DATA = [
  ...CODEBREW_DATA,
  ...FYG_DATA,
  ...DSCUBED_DATA,
  ...TRIPLINK_DATA,
  ...ARKQUEST_DATA,
  ...STUDYPORT_DATA,
  ...YEARBOOK_DATA,
  ...BLOSSOM_DATA,
  ...SNEAKTIME_DATA,
  ...SKYLINE_DATA,
  ...SKI_DATA,
  ...EPM_DATA,
  ...THEIMPOSSIBLE_DATA,
]

export default CARD_DATA