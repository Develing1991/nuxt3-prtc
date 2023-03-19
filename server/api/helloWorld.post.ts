export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  return {
    message: body,
    test1_method_type: getMethod(event),
    test1_query: getQuery(event),
  };
});
