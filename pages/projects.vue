<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <h1 class="mb-0 text-center text-8 font-900">Projects</h1>
  <p class="mt-1 text-center c-zinc-5 italic">Projects that I created or maintaining.</p>
  <ZProjects :list="appConfig.projects" />
</template>
