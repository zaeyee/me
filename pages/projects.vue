<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <div class="mb-0 text-3xl font-900">Projects</div>
  <p class="mt-1 c-zinc-5 italic">List of projects that I am proud of</p>
  <ZProjects :list="appConfig.projects" />
</template>
