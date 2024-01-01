<template>
  <article class="user-card">
    <ImageSkeleton v-if="user.picture == undefined" width="8rem" background-color="var(--swan)" />
    <img v-else class="user-card-img" :src="picture" alt="profile picture" />

    <div class="user-card-info">
      <div class="user-card-name">
        <TextSkeleton v-if="name == undefined" width="100%" height="1.5rem" color="var(--swan)" />
        <span v-else>{{ name }}</span>
      </div>

      <div class="user-card-username">
        <TextSkeleton v-if="user.username == undefined" width="50%" height="1rem" color="var(--swan)" />
        <span v-else>{{ user.username }}</span>
      </div>

      <div class="user-card-creation-date">
        <PhClock :size="24" weight="fill" />

        <TextSkeleton v-if="user.streak == undefined" width="20%" height="1rem" color="var(--swan)" />
        <span v-else>{{ creationDate }}</span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { PhClock } from '@phosphor-icons/vue';
import type { Profile } from '../types';
import TextSkeleton from './skeletons/TextSkeleton.vue';
import ImageSkeleton from './skeletons/ImageSkeleton.vue';

interface UserCardProps {
  user: Profile,
}

const props = defineProps<UserCardProps>();

const picture = computed(() => {
  return `https://${props.user.picture}/xlarge`;
});

const name = computed(() => {
  return props.user.name ?? props.user.username;
});

const creationDate = computed(() => {
  const date = new Date(props.user.creationDate * 1000);

  const intlDate = new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);

  return intlDate.toString();
});
</script>

<style>
.user-card {
  display: flex;
  border-radius: 30px;
  margin: 100px;
  padding: 20px;
  width: 350px;
  box-shadow: 0 0 1rem var(--swan);
}

.user-card-img {
  width: 8rem;
  height: 8rem;
  flex: 0 0 auto;
  border-radius: 50%;
  box-shadow: 0 0 0.7rem var(--swan);
}

.user-card-info {
  display: flex;
  flex-flow: column nowrap;
  flex: 1 0 auto;
  justify-content: center;
  padding: 0 20px;
}

.user-card-name {
  font-size: 1.5rem;
  text-overflow: ellipsis;
}

.user-card-username {
  color: var(--eel);
  text-overflow: ellipsis;
}

.user-card-creation-date {
  margin-top: 1rem;
  color: var(--wolf);

  & * {
    vertical-align: middle;
  }

  & svg {
    color: var(--hare);
    margin-right: 5px;
  }
}
</style>