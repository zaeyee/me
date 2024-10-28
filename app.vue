<script setup lang="ts">
useHeadSafe({
  link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.ico' }]
})
</script>

<template>
  <ZNavbar />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
:root {
  --c-bg: rgb(255, 255, 255);
  --c-text: rgba(55, 65, 81);
}

html.dark {
  --c-bg: rgb(5, 5, 5);
  --c-text: rgba(229, 231, 235);
}

body {
  /* -webkit-tap-highlight-color: transparent; */
  --at-apply: 'font-sans bg-$c-bg c-$c-text transition-colors duration-500';
}
</style>
