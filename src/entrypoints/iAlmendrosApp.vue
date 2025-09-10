<script setup lang="ts">

import { onMounted, onUnmounted, ref } from 'vue'
onMounted(()=>{
  console.log('Hello, world!')
})

onUnmounted(()=>{
  console.log('Cleaning Up!')
})

</script>
<template>
  <div class="w-full">
    <div class="form-title-splitter" style="display: flex; gap: 15px; align-items: center;">
      <p>
        Hello, World!
      </p>
    </div>
  </div>
</template>
<style scoped>
.selected-row {
  color: white;
  background: darkblue;
}
.non-selected-row {
  color: inherit;
  background: inherit;
}
.should-expand {
  cursor: pointer;
}
</style>
