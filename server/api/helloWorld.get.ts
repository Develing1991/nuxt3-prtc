export default defineEventHandler((event) => {
  return {
    message: "hello Get",
    test1_method_type: getMethod(event),
    test1_query: getQuery(event),
  };
});
