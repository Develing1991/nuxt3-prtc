<script setup>
// const isLoggedIn = useState("isLoggedIn", () => false);
// const isLoggedIn = useState("isLoggedIn");
// const isLoggedIn = useIsLoggedIn();
const user = useUserStore();
</script>
<template>
  <nav style="display: flex; gap: 10px">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/movies">Movies</NuxtLink>
    <NuxtLink to="https://www.naver.com">naver</NuxtLink>
    <NuxtLink v-if="!user.isLoggedIn" to="/login">로그인</NuxtLink>
    <a href="#" v-else @click.prevent="user.isLoggedIn = false">로그아웃</a>
  </nav>
  <slot></slot>
</template>
