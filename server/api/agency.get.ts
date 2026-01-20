export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const query = getQuery(event);

  console.log("Fetching agency with url:", query.url);

  if (!query.url) {
    throw createError({ statusCode: 400, statusMessage: "Missing url" });
  }

  try {
    return await $fetch(`${config.public.apiBase}/agency/`, {
      query,
      //   headers: {
      //     Authorization: `Token ${config.apiToken}`,
      //   },
    });
  } catch (error: any) {
    if (error?.status === 410) {
      throw createError({ statusCode: 410 });
    }
    throw error;
  }
});
