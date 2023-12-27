<script setup lang="ts">
import { ref } from 'vue';
import { PhFire } from '@phosphor-icons/vue';

const data = ref({
  image: "https://simg-ssl.duolingo.com/avatars/7699505/1iZJexKMq1/xlarge",
  name: "elizabeth",
  username: "Liza_72",
  streak: 504,
});
</script>

<template>
  <article class="user-card">
    <img class="user-card-img" :src="data.image" alt="profile picture" />
    <div class="user-card-info">
      <div class="user-card-name">{{ data.name }}</div>
      <div class="user-card-username">{{ data.username }}</div>
      <div class="user-card-streak">
        <PhFire :size="24" weight="duotone" />
        <span>{{ data.streak }}</span>
      </div>
    </div>
  </article>
</template>

<style>
.user-card {
  display: flex;
  border-radius: 1rem;
  padding: 1rem;
  width: fit-content;
  height: 8rem;
  box-shadow: 0 0 1rem var(--swan);
}

.user-card-img {
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  box-shadow: 0 0 1rem var(--swan);
}

.user-card-info {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  padding: 0 20px;
}

.user-card-name {
  font-size: 1.5rem;
}

.user-card-username {
  color: var(--eel);
}

.user-card-streak {
  margin-top: 1rem;

  & * {
    vertical-align: middle;
  }

  & svg {
    color: var(--fox);
  }
}
</style>