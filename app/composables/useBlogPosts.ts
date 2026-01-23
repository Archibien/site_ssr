// To find category ID : GET https://blog.archibien.com/wp-json/wp/v2/categories?slug=inspiration look for id
export function useInspirations() {
  return useFetch('https://blog.archibien.com/wp-json/wp/v2/posts', {
    query: {
      categories: 5, // ← inspiration category ID
      per_page: 10,
      orderby: 'date',
      order: 'desc',
      _embed: true,
    },
    server: false, // client-side only (as requested)
  })
}
