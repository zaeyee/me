<script setup lang="ts">
import type { Image, ThemeAbleImage } from '~/types'

const props = defineProps<{
  image: ThemeAbleImage
  alt?: string
}>()

const getImageObj = (image: Image) => (typeof image === 'string' ? { src: image } : image)

const images = computed(() => {
  if (typeof props.image === 'string' || 'src' in props.image) {
    return [getImageObj(props.image)]
  }
  const lightImage = getImageObj(props.image.light)
  const darkImage = getImageObj(props.image.dark)
  return [lightImage, darkImage]
})
</script>

<template>
  <img
    v-for="(item, index) in images"
    :key="item.src"
    :src="item.src"
    :alt="item.alt"
    :class="index === 1 ? 'hidden dark:(block)' : 'dark:(hidden)'"
  />
</template>
