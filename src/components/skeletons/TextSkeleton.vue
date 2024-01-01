<template>
  <div :style="styles"></div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

interface TextSkeletonProps {
  width: string,
  height: string,
  color: string,
}

const props = defineProps<TextSkeletonProps>();

const styles = reactive({
  width: props.width,
  height: props.height,
  display: 'inline-block',
  'background-color': props.color,
  'border-radius': '30px',
  'vertical-align': 'middle',
});
</script>