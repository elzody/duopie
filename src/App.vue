<template>
  <SearchBar />
  <UserCard :user="userStore.getUser()" />
</template>

<script setup lang="ts">
import SearchBar from './components/SearchBar.vue';
import UserCard from './components/UserCard.vue';
import { userStore } from './stores/user';
</script>

<style scoped></style>
