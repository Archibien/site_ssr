<template>
  <section>
    <h2>Test Home :</h2>

    <div v-if="agencies">
      <div v-for="agency in agencies" :key="agency.id">
        <NuxtLink :to="agency.url">
          {{ agency.name }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: agencies } = await useFetch("/api/agencies-home", {
  server: true,
});
</script>
