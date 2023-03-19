<script setup>
const route = useRoute();
const message = computed(
  () => `teamSlug: ${route.params.teamSlug} users: ${route.params.userId}`
);
</script>
<template>
  <div>
    teamSlug : {{ $route.params.teamSlug }} userId : {{ $route.params.userId }}
    <div>
      {{ message }}
    </div>
  </div>
</template>
