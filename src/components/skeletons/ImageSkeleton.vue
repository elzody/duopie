<template>
  <div :style="styles"></div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

interface ImageSkeletonProps {
  width: string,
  height?: string,
  backgroundColor: string,
}

const props = defineProps<ImageSkeletonProps>();

const styles = reactive({
  width: props.width,
  height: props.height ?? props.width,
  'background-color': props.backgroundColor,
  'border-radius': '50%',
  'box-shadow': '0 0 1rem var(--swan)',
});
</script>