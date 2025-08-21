<script setup lang="ts">
interface ProjectItem {
  icon: string
  name: string
  desc: string
  link: string
}

interface ProjectGroup {
  [key: string]: ProjectItem[]
}

defineProps<{
  list: ProjectGroup
}>()
</script>

<template>
  <div v-for="key in Object.keys(list)" :key="key" class="mt-8">
    <h2 class="pointer-events-none relative h-20 leading-none">
      <span class="absolute left--4 top-3 text-20 c-transparent font-700 text-stroke-2 text-stroke-zinc-5 op-10">
        {{ key }}
      </span>
    </h2>
    <div class="grid grid-cols-1 mt-3 gap-3 sm:(grid-cols-3)">
      <NuxtLink
        v-for="(item, idx) in list[key]"
        :key="idx"
        :to="item.link"
        target="_blank"
        class="flex items-center rounded-lg bg-zinc-1/45 p-4 duration-300 dark:(bg-zinc-9/30) hover:(bg-zinc-1 dark:bg-zinc-9)"
      >
        <i class="m-2 flex-none text-3xl c-zinc-5" :class="item.icon" />
        <div class="ml-4">
          <h3>{{ item.name }}</h3>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <p class="mt-.5 text-sm c-zinc-5" v-html="item.desc" />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
