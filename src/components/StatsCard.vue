<template>
  <article class="stats-card">
    <div class="stats-card-item">
      <div>
        <PhFire
          class="stats-card-item-icon"
          color="var(--fox)"
          :size="24"
          weight="fill"
        />

        <div>
          <TextSkeleton
            v-if="user.streak == undefined"
            width="40%"
            height="22px"
            color="var(--swan)"
          />
          <span v-else class="stats-card-item-data">{{ user.streak }}</span>

          <span class="stats-card-item-label">day streak</span>
        </div>
      </div>
    </div>

    <div class="stats-card-item">
      <div>
        <PhLightning
          class="stats-card-item-icon"
          color="var(--beak-highlight)"
          :size="24"
          weight="fill"
        />

        <div>
          <TextSkeleton
            v-if="user.totalXp == undefined"
            width="60%"
            height="22px"
            color="var(--swan)"
          />
          <span v-else class="stats-card-item-data">{{ user.totalXp }}</span>

          <span class="stats-card-item-label">total xp</span>
        </div>
      </div>
    </div>

    <div class="stats-card-item">
      <div>
        <PhShield
          class="stats-card-item-icon"
          :color="`var(--${league.toLowerCase()})`"
          :size="24"
          weight="fill"
        />

        <div>
          <TextSkeleton
            v-if="league == 'default'"
            width="70%"
            height="22px"
            color="var(--swan)"
          />
          <span v-else class="stats-card-item-data">{{ league }}</span>

          <span class="stats-card-item-label">current league</span>
        </div>
      </div>
    </div>

    <div class="stats-card-item">
      <div>
        <PhMedal
          class="stats-card-item-icon"
          color="var(--bee)"
          :size="24"
          weight="fill"
        />

        <div>
          <TextSkeleton
            v-if="user.top_three_finishes == undefined"
            width="30%"
            height="22px"
            color="var(--swan)"
          />
          <span v-else class="stats-card-item-data">{{
            user.top_three_finishes
          }}</span>

          <span class="stats-card-item-label">top 3 finishes</span>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { PhFire, PhLightning, PhMedal, PhShield } from "@phosphor-icons/vue";
import TextSkeleton from "./skeletons/TextSkeleton.vue";
import type { Profile } from "../types";
import { Leagues } from "../types";
import { computed } from "vue";

interface StatsCardProps {
  user: Profile;
}

const props = defineProps<StatsCardProps>();

const league = computed(() => {
  const l = Leagues[props.user.tier];

  return Leagues[props.user.tier] ?? "default";
});
</script>

<style>
.stats-card {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  border-radius: 30px;
  padding: 20px;
  width: 350px;
  box-shadow: 0 0 1rem var(--swan);
}

.stats-card-item {
  display: flex;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0 0 0.7rem var(--swan);
  align-items: center;

  & div {
    flex: 1 0 auto;
    display: flex;

    & div {
      display: flex;
      flex-flow: column nowrap;
      flex: 1 0 auto;
    }
  }
}

.stats-card-item-icon {
  margin-right: 5px;
  align-self: flex-start;
}

.stats-card-item-label {
  color: var(--wolf);
}
</style>
