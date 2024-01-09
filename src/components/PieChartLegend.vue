<template>
  <article class="pie-chart-legend">
    <div class="pie-chart-legend-item">
      <svg></svg>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Profile } from "../types";

interface PieChartLegendProps {
  user: Profile;
}

const props = defineProps<PieChartLegendProps>();
</script>
