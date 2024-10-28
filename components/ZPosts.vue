<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content'

type MaybeDate = Date | string | number

defineProps<{
  list: ParsedContent[]
}>()

const getYear = (a: MaybeDate) => new Date(a).getFullYear()
const isSameYear = (a: MaybeDate, b: MaybeDate) => a && b && getYear(a) === getYear(b)
</script>

<template>
  <div v-if="!list.length" class="py-2 c-gray-5">Nothing here yet.</div>

  <template v-for="(item, idx) in list" :key="item._id">
    <div v-if="!isSameYear(item.date, list[idx - 1]?.date)" class="pointer-events-none relative h-16">
      <span class="absolute left--8 top--4 text-32 font-700 op-10">{{ getYear(item.date) }}</span>
    </div>

    <NuxtLink :to="item._path" class="block rounded-lg b-none p-4 duration-300 hover:(bg-gray-1 dark:bg-gray-9)">
      <h2>{{ item.title }}</h2>
      <p class="text-sm c-gray-5">{{ item.date }}</p>
    </NuxtLink>
  </template>
</template>
