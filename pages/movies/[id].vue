<script setup>
const route = useRoute();
const { data, error } = await useFetch(
  `https://www.omdbapi.com/?apikey=8e3f600b&i=${route.params.id}`,
  {
    pick: ["Plot", "Title", "Poster", "Error"],
    key: `/movies/${route.params.id}`,
  }
);
if (error.value) {
  //
}
if (data.value.Error === "Incorrect IMDb ID.") {
  console.log(response._data);
  showError({ statusCode: 404, statusMessage: "Page Not Found" });
}
// const { data } = await useAsyncData(
//   `/movies/${route.params.id}`,
//   () => {
//     return $fetch(
//       `http://www.omdbapi.com/?apikey=8e3f600b&i=${route.params.id}`
//     );
//   },
//   {
//     pick: ["Plot", "Title"],
//     // transform(data) {
//     //   return {
//     //     Plot: data.Plot,
//     //     Title: data.Title,
//     //   };
//     // },
//   }
// );
// const res = await
useHead({
  title: data.value.Title,
  meta: [
    { name: "description", content: data.value.Plot },
    { property: "og:description", content: data.value.Plot },
    { property: "og:image", content: data.value.Poster },
    { name: "twitter:card", content: `summary_large_image` },
  ],
});
</script>
<template>
  <div>
    <pre>
        {{ data }}
    </pre>
  </div>
</template>
