<template>
  <div class="pie-chart">
    <canvas v-if="user.courses" ref="canvas" width="500" height="500"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onUpdated } from "vue";
import type { Profile } from "../types";

interface PieChartProps {
  user: Profile;
}

const props = defineProps<PieChartProps>();
const canvas = ref<HTMLCanvasElement>()!;

onUpdated(() => drawPie());

function drawPie() {
  const courses = props.user.courses.map((c) => c.xp).sort((a, b) => b - a);
  console.log(courses);

  const totalXp = courses.reduce((p, n) => p + n);
  const ctx = canvas.value!.getContext("2d");
  const r = canvas.value!.clientWidth / 2 - 20;
  const colors = getColors();

  let startAngle = -(Math.PI / 2);

  for (const xp of courses) {
    const sector = (xp * 2 * Math.PI) / totalXp;

    drawSlice(startAngle, sector, r, colors.next());

    startAngle += sector;
  }

  function drawSlice(
    startAngle: number,
    endAngle: number,
    radius: number,
    color: string,
  ) {
    ctx!.strokeStyle = "#ffffff";
    ctx!.fillStyle = color;
    ctx!.lineWidth = 2;

    ctx!.beginPath();
    ctx!.moveTo(250, 250);
    ctx!.arc(250, 250, radius, startAngle, startAngle + endAngle);
    ctx!.closePath();

    ctx!.fill();
    ctx!.stroke();
  }
}

function getColors() {
  const colors = [
    "#1cb0f6",
    "#ff4b4b",
    "#ffc800",
    "#ff9600",
    "#ce82ff",
    "#2b70c9",
  ];

  let index = 0;

  return {
    next() {
      if (index > colors.length) index = 0;

      return colors[index++];
    },
  };
}
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
