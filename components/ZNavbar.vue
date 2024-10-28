<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const route = useRoute()
const appConfig = useAppConfig()

const isOpen = ref(false)

watch(route, () => {
  isOpen.value = false
})
</script>

<template>
  <header class="sticky top-0 z-999 flex items-center justify-between bg-$c-bg p-2 duration-500 md:(p-3)">
    <NuxtLink to="/" class="h-10 w-10 flex-none">
      <ZImage :image="appConfig.logo" />
    </NuxtLink>
    <div
      class="fixed left-0 top-0 z--1 h-full w-full flex flex-1 flex-col bg-$c-bg pt-56px duration-300 md:(visible static flex-row translate-y-0 items-center justify-end bg-transparent pt-0 op-100)"
      :class="isOpen ? 'op-95 visible translate-y-0' : 'op-0 invisible translate-y--4'"
    >
      <nav class="flex flex-col md:flex-row">
        <NuxtLink
          v-for="(item, index) in appConfig.nav"
          :key="index"
          :to="item.link"
          class="p-2.5 text-center u-clickable"
        >
          {{ item.text }}
        </NuxtLink>
      </nav>
      <nav class="mt-4 text-center md:mt-0">
        <NuxtLink v-for="(item, index) in appConfig.socials" :key="index" :to="item.link" class="u-icon-btn">
          <i :class="item.icon" />
        </NuxtLink>
      </nav>
    </div>
    <div>
      <button class="u-icon-btn" @click="toggleDark()">
        <i class="i-ri:sun-line dark:i-ri:moon-clear-line" />
      </button>
      <button class="md:hidden u-icon-btn" @click="isOpen = !isOpen">
        <i :class="isOpen ? 'i-ri:close-large-line' : 'i-ri:menu-3-fill'" />
      </button>
    </div>
  </header>
</template>
