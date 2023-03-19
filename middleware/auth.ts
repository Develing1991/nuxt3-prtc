export default defineNuxtRouteMiddleware((to, from) => {
  const userIsLoggedIn = false;
  if (!userIsLoggedIn) {
    return navigateTo("/login");
    // return navigateTo({ name: "login" });
    // return navigateTo({ path: "/login" });
    // return abortNavigation("not allowed here");
  }
});
