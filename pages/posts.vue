<script setup lang="ts"></script>

<template>
  <div class="mb-0 text-3xl font-900">Blog</div>
  <ContentList v-slot="{ list }" :query="{ sort: [{ date: -1 }] }">
    <ZPosts :list="list" />
  </ContentList>
</template>
