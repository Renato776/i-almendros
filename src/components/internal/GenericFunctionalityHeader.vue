<script setup lang="ts">
import {fnName, fnDesc} from '@/utils/internalDocumentationUtilities';

const props = defineProps<{
  fn: BacklogFunctionality;
}>();

</script>
<template>
  <div class="flex flex-wrap items-center gap-2">
    <!-- name (secondary) -->
    <span v-if="fnName(fn)" class="truncate text-xs font-medium text-header-fg" :title="fnName(fn)">
      {{ fnName(fn) }}
    </span>
    <span
        class="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
        :title="fn?.short_name || fnName(fn)"
    >
      <span class="inline-block h-2 w-2 rounded-full bg-primary/70"></span>
        {{ fn?.short_name || fnName(fn) }}
      </span>
  </div>
  <!-- Description (pre/code for technical audience) -->
  <pre v-if="fnDesc(fn)"
       class="mt-2 whitespace-pre-wrap break-words rounded-lg bg-black/[.04] p-3 text-[13px] leading-snug text-[var(--almendros-fg,#1f2937)]"
  ><code>{{ fnDesc(fn) }}</code></pre>
</template>
