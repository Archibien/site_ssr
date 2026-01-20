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

  await event.context.$isr?.invalidate(body.path);

  return {
    revalidated: true,
    path: body.path,
  };
});
