<template>
  <SearchBar />

  <div id="main">
    <div id="user-info">
      <UserCard :user="userStore.getUser()" />
      <StatsCard :user="userStore.getUser()" />
    </div>

    <PieChart :user="userStore.getUser()" :radius="150" />
  </div>
</template>

<script setup lang="ts">
import { SearchBar, UserCard, StatsCard, PieChart } from "./components";
import { userStore } from "./stores/user";
</script>

<style>
#main {
  max-width: 50%;
  margin: 50px auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 30px;
}

#user-info {
  display: flex;
  flex-flow: column nowrap;
  gap: 30px;
}
</style>
