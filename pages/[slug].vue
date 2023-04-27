<script setup>
const route = useRoute();
const slug = route.params.slug;
const { data } = await useFetch(
  `http://localhost:1337/api/pages/${slug}`, /** your API endpoint **/
  {
    immediate: process.dev || process.env.prerender,
    key: route.path,
  }
);
if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true,
  });
}
</script>

<template>
  <section>
    <h1>Slug page</h1>
    <div>{{ data }}</div>
  </section>
</template>

