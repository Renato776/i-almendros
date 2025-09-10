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
    <p>
      Hello, World!
    </p>
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
