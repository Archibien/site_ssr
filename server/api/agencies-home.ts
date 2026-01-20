export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  setHeader(event, "Cache-Control", "public, s-maxage=86400");
  console.log("Fetching agencies from backend");

  return await $fetch(`${config.public.apiBase}/agencies/?page_size=30`, {
    headers: {
      // Authorization: `Token ${config.apiToken}`,
      Accept: "application/json",
    },
  });
});
