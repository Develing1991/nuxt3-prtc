<script setup>
// const isLoggedIn = useIsLoggedIn();
const user = useUserStore();

definePageMeta({
  layout: "plain",
});
// function login() {
//   user.isLoggedIn = true;
//   useRouter().push("/");
// }
</script>
<template>
  <form @submit.prevent="user.login">
    <h1>login</h1>
    <label for="">
      username
      <input type="text" />
    </label>
    <label for="">
      password
      <input type="password" />
    </label>
    <button>Login</button>
  </form>
</template>
