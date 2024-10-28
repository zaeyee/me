<script setup lang="ts"></script>

<template>
  <ContentList v-slot="{ list }" :query="{ sort: [{ date: -1 }] }">
    <ZPosts :list="list" />
  </ContentList>
</template>
