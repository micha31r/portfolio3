// Use enum-like symbols to represent tags
const WEB = Symbol('WEB')
const DESIGN = Symbol('DESIGN')
const UI = Symbol('UI')
const GAME = Symbol('GAME')
const DS3 = Symbol('DS3')
const CISSA = Symbol('CISSA')
const ARKQUEST = Symbol('ARKQUEST')
const TRIPLINK = Symbol('TRIPLINK')
const BLOSSOM = Symbol('BLOSSOM')
const STUDYPORT = Symbol('STUDYPORT')
const YEARBOOK = Symbol('YEARBOOK')
const SNEAKTIME = Symbol('SNEAKTIME')
const SKYLINE = Symbol('SKYLINE')
const SKI = Symbol('SKI')
const EPM = Symbol('EPM')
const THEIMPOSSIBLE = Symbol('THEIMPOSSIBLE')

// Use objects to map symbols to human-readable strings

// Project category tags
const CATEGORY_TAGS = {
  [WEB]: 'Web',
  [DESIGN]: 'Design',
  [UI]: 'Interface',
  [GAME]: 'Game',
}

// Individual project tags
const PROJECT_TAGS = {
  [DS3]: 'DSCubed', 
  [CISSA]: 'CISSA',
  [ARKQUEST]: 'Ark Quest',
  [TRIPLINK]: 'Triplink',
  [STUDYPORT]: 'Studyport',
  [BLOSSOM]: 'Blossom',
  [SNEAKTIME]: 'Sneaktime',
  [YEARBOOK]: 'Yearbook',
  [SKYLINE]: 'Skyline',
  [SKI]: 'Ski Design',
  [EPM]: 'EPM',
  [THEIMPOSSIBLE]: 'The Impossible',
}

// Contains all filters 
const TAGS = {
  ...CATEGORY_TAGS,
  ...PROJECT_TAGS,
}

export {
  // Symbols
  WEB,
  DESIGN,
  UI,
  GAME,
  CISSA,
  DS3,
  ARKQUEST,
  TRIPLINK,
  BLOSSOM,
  STUDYPORT,
  YEARBOOK,
  SNEAKTIME,
  SKYLINE,
  SKI,
  EPM,
  THEIMPOSSIBLE,

  // Tags
  CATEGORY_TAGS,
  PROJECT_TAGS,
  TAGS,
}