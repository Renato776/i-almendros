<script setup lang="ts">

import { onMounted, onUnmounted, ref } from 'vue'
import TTLockReferences from "@/components/TTLockReferences.vue";
onMounted(()=>{
  console.log('Hello, world!')
})

onUnmounted(()=>{
  console.log('Cleaning Up!')
})

</script>

<template>
  <div class="min-h-screen w-full flex flex-col bg-surface text-[var(--almendros-fg,#111827)]">
    <TTLockReferences />
    <!-- Header -->
    <header class="h-14 flex items-center gap-3 px-4 bg-primary text-header-fg">
      <button
          type="button"
          aria-label="Open menu"
          class="grid place-items-center size-9 rounded-xl active:opacity-80"
      >
        <i class="fa-solid fa-bars text-xl"></i>
      </button>
      <h1 class="text-center font-semibold tracking-wide w-90">iAlmendros</h1>
    </header>

    <!-- Body -->
    <main class="flex-1 flex flex-col items-center px-5 py-8 gap-6">
      <router-view />
    </main>
  </div>
</template>
