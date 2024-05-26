const baseURL = 'https://www.michaelren.dev'
const serverUpdatedAt = new Date() // Value updated on deployment

export default function sitemap() {
  return [
    { url: baseURL, lastModified: serverUpdatedAt, changeFrequency: 'monthly', priority: 1 },
    { url: baseURL + '/projects/arkquest', lastModified: serverUpdatedAt, changeFrequency: 'monthly', priority: 0.9 },
    { url: baseURL + '/projects/blossom', lastModified: serverUpdatedAt, changeFrequency: 'monthly', priority: 0.8 },
    { url: baseURL + '/projects/codebrew', lastModified: serverUpdatedAt, changeFrequency: 'monthly', priority: 0.9 },
    { url: baseURL + '/projects/dscubed', lastModified: serverUpdatedAt, changeFrequency: 'monthly', priority: 0.9 },
    { url: baseURL + '/projects/epm', lastModified: serverUpdatedAt, changeFrequency: 'monthly', priority: 0.8 },
    { url: baseURL + '/projects/fyg', lastModified: serverUpdatedAt, changeFrequency: 'monthly', priority: 0.9 },
    { url: baseURL + '/projects/ski', lastModified: serverUpdatedAt, changeFrequency: 'monthly', priority: 0.7 },
    { url: baseURL + '/projects/skyline', lastModified: serverUpdatedAt, changeFrequency: 'monthly', priority: 0.6 },
    { url: baseURL + '/projects/sneaktime', lastModified: serverUpdatedAt, changeFrequency: 'monthly', priority: 0.8 },
    { url: baseURL + '/projects/studyport', lastModified: serverUpdatedAt, changeFrequency: 'monthly', priority: 0.7 },
    { url: baseURL + '/projects/theimpossible', lastModified: serverUpdatedAt, changeFrequency: 'monthly', priority: 0.5 },
    { url: baseURL + '/projects/triplink', lastModified: serverUpdatedAt, changeFrequency: 'monthly', priority: 0.8 },
    { url: baseURL + '/projects/yearbook', lastModified: serverUpdatedAt, changeFrequency: 'monthly', priority: 0.7 },
  ]
}