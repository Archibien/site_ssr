export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);

  if (!body?.path) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing path",
    });
  }

  // Optional: simple shared secret
  const secret = getHeader(event, "x-revalidate-secret");
  if (secret !== config.revalidateSecret) {
    throw createError({ statusCode: 401 });
  }
  console.log("Revalidating path:", body.path);
  await event.context.nuxt?.hooks.callHook("nitro:invalidate", body.path);
  console.log("REvalidated:", body.path);
  return { revalidated: true, path: body.path };
});
