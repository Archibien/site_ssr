export function roundBbox(bbox: string, precision = 2): string {
  return bbox
    .split(',')
    .map((v) => Number(v).toFixed(precision))
    .join(',')
}
