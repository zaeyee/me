<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content'
import { format, isSameYear } from 'date-fns'

defineProps<{
  list: ParsedContent[]
}>()
</script>

<template>
  <div v-if="!list.length" class="py-2 c-zinc-5">Nothing here yet.</div>

  <template v-for="(item, idx) in list" :key="item._id">
    <div v-if="!isSameYear(item.date, list[idx - 1]?.date)" class="pointer-events-none relative h-16">
      <span class="absolute left--6 top--4 text-32 c-transparent font-700 text-stroke-2 text-stroke-zinc-5 op-10">
        {{ format(item.date, 'yyyy') }}
      </span>
    </div>

    <NuxtLink :to="item._path" class="block rounded-lg p-4 duration-300 hover:(bg-zinc-1 dark:bg-zinc-9)">
      <h2>{{ item.title }}</h2>
      <p class="text-sm c-zinc-5">{{ format(item.date, 'yyyy-MM-dd HH:mm') }}</p>
    </NuxtLink>
  </template>
</template>
