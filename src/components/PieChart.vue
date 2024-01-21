<template>
  <div class="pie-chart">
    <canvas v-if="profileStore.profile.courses" ref="canvas" width="500" height="500"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onUpdated } from "vue";
import { useProfileStore } from "@/stores/user";
import Pie from "@/pie";

const profileStore = useProfileStore();
const canvas = ref<HTMLCanvasElement>()!;

onUpdated(() => {
  const pie = Pie.from(profileStore.profile.courses, {
    renderingContext: canvas.value!.getContext("2d")!,
    radius: canvas.value!.clientWidth / 2 - 20,
  });

  pie.draw();
});
</script>

<style>
.pie-chart {
  border-radius: 30px;
  padding: 20px;
  width: 500px;
  height: 500px;
  box-shadow: 0 0 1rem var(--swan);
}
</style>
