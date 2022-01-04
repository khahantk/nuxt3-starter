<template>
  <div>
    <home />
    <div>{{ config.apiURL }}</div>
  </div>
</template>
<script setup>
const config = useRuntimeConfig();
</script>