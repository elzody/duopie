<template>
  <div class="search-bar">
    <PhCircleNotch class="search-bar-icon" :class="{ spinning: searching }" v-if="searching" :size="24"
      weight="duotone" />
    <PhMagnifyingGlass class="search-bar-icon" v-else :size="24" weight="duotone" />
    <input class="search-bar-input" type="search" placeholder="Enter username" v-model="userInput" />
  </div>
</template>

<script setup lang="ts">
import { PhMagnifyingGlass, PhCircleNotch } from '@phosphor-icons/vue';
import { ref, computed, watch } from 'vue';
//import { userStore } from '../stores/user';
import { useProfileStore } from '../stores/user';
import { searchUser } from '../api';

const timer = ref<number>(0);
const userInput = ref<string>("");

const profileStore = useProfileStore();

const searching = computed(() => {
  return timer.value != 0;
});

watch(userInput, () => {
  clearTimeout(timer.value);

  timer.value = setTimeout(async () => {
    const profile = await searchUser(userInput.value);

    //userStore.setUser(profile);
    profileStore.setProfile(profile);

    timer.value = 0;
  }, 2000);
});
</script>

<style>
@keyframes spinning {
  from {
    rotate: 0deg;
  }

  to {
    rotate: 360deg;
  }
}

.search-bar {
  border: 2px solid var(--swan);
  border-radius: 15px;
  background-color: var(--polar);
  padding: 10px;
  width: 400px;
  display: flex;

  & * {
    vertical-align: middle;
  }
}

.search-bar-icon {
  color: var(--hare);
}

.search-bar-input {
  flex-grow: 1;
  margin-left: 10px;
  background: transparent;
  font-size: 1.2rem;
  outline: 0;
  border: 0;
  font-family: 'Nunito', sans-serif;
}

.spinning {
  animation-name: spinning;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
</style>