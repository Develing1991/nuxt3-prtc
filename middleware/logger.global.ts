export default defineNuxtRouteMiddleware((to, from) => {
  console.log("middleware");
  console.log(to);
  console.log(from);
});
