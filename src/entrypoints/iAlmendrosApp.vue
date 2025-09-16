<script setup lang="ts">

import { onMounted, onUnmounted, ref } from 'vue'
import TTLockReferences from "@/components/TTLockReferences.vue";
import ExperimentalDialog from "@/components/internal/ExperimentalDialog.vue";
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
    <ExperimentalDialog />
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
      <div class="mt-6">
        <i class="fa-solid fa-lock text-5xl text-primary"></i>
      </div>

      <div class="w-full max-w-sm space-y-3">
        <button
            type="button"
            class="w-full h-12 rounded-2xl font-medium bg-primary text-header-fg active:opacity-90 transition"
        >
          Passcodes
        </button>
        <button
            type="button"
            class="w-full h-12 rounded-2xl font-medium bg-primary text-header-fg active:opacity-90 transition"
        >
          QR codes
        </button>
        <button
            type="button"
            class="w-full h-12 rounded-2xl font-medium bg-primary text-header-fg active:opacity-90 transition"
        >
          Profile
        </button>
      </div>
    </main>
  </div>
</template>
