<script setup lang="ts">
import { PhMagnifyingGlass } from '@phosphor-icons/vue';
</script>

<template>
  <search class="search-bar">
    <PhMagnifyingGlass class="search-bar-icon" :size="24" weight="duotone" />
    <input class="search-bar-input" type="search" placeholder="Enter username" />
  </search>
</template>

<style>
.search-bar {
  border: 2px solid var(--swan);
  border-radius: 1rem;
  background-color: var(--polar);
  padding: 10px;
  width: 400px;

  & * {
    vertical-align: middle;
  }
}

.search-bar-icon {
  color: var(--hare);
}

.search-bar-input {
  margin-left: 10px;
  background: transparent;
  font-size: 1.2rem;
  outline: 0;
  border: 0;
  font-family: 'Nunito', sans-serif;
}
</style>