<script setup lang="ts">
const props = defineProps<{
  fn: BacklogFunctionality;
}>();
</script>

<template>
  <div class="flex flex-wrap items-center gap-2">
    <a :href="fn.getHref"
       class="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
    >
      <i v-if="fn.isLink" class="fa-solid fa-link inline-block"></i>
      <i v-if="fn.isBack" class="fa-solid fa-arrow-left inline-block"></i>
      <i v-if="fn.isDesign" class="fa-solid fa-sparkles inline-block"></i>
      <span v-for="fragment in fn.short_name_fragments_display" :class="{'text-[black]': fragment === ':', 'font-bold': fragment === ':'}" >
        {{ fragment }}
      </span>
    </a>
  </div>
</template>
