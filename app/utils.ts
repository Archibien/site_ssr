export function roundBbox(bbox: string, precision = 2): string {
  return bbox
    .split(',')
    .map((v) => Number(v).toFixed(precision))
    .join(',')
}

export function sitemapHeaders(sMaxAge: number, swr = 300) {
  return {
    'Content-Type': 'application/xml',
    'Cache-Control': [
      'public',
      'max-age=0',
      `s-maxage=${sMaxAge}`,
      `stale-while-revalidate=${swr}`,
    ].join(', '),
  }
}
