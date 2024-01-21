<template>
  <SearchBar />

  <div id="main">
    <div id="user-info">
      <UserCard :user="profileStore.profile" />
      <StatsCard :user="profileStore.profile" />
    </div>

    <PieChart :user="profileStore.profile" :radius="150" />
  </div>
</template>

<script setup lang="ts">
import { SearchBar, UserCard, StatsCard, PieChart } from "./components";
import { useProfileStore } from "./stores/user";

const profileStore = useProfileStore();
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
