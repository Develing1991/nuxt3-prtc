<script setup>
const time = ref(new Date());
setInterval(() => {
  time.value = new Date();
}, 1000);
</script>
<template>
  <div>
    <h1>Static</h1>
    <ClientOnly>
      <h2>{{ time }}</h2>
    </ClientOnly>
  </div>
</template>
