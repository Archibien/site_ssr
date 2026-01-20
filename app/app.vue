<template>
  <section>
    <h2>Test Home :</h2>

    <div v-if="agencies">
      <div v-for="agency in agencies" :key="agency.id">
        {{ agency.name }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: agencies } = await useFetch("/api/agencies-home", {
  server: true,
});
</script>
