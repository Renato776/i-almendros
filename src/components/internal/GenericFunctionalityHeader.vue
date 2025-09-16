<script setup lang="ts">
import {fnName, fnDesc} from '@/utils/internalDocumentationUtilities';

const props = defineProps<{
  fn: BacklogFunctionality;
}>();

</script>
<template>
  <div class="flex flex-wrap items-center gap-2">
    <label class="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary" >
      <i v-if="fn.isList" class="fa-solid fa-table inline-block"></i>
      <i v-if="fn.isSublist" class="fa-solid fa-table-list inline-block"></i>
      <span v-for="fragment in fn.short_name_fragments_display" :class="{'text-[black]': fragment === ':', 'font-bold': fragment === ':'}" >
        {{ fragment }}
      </span>
    </label>
  </div>
  <!-- Description (pre/code for technical audience) -->
  <pre v-if="fnDesc(fn)"
       class="mt-2 whitespace-pre-wrap break-words rounded-lg bg-black/[.04] p-3 text-[13px] leading-snug text-[var(--almendros-fg,#1f2937)]"
  ><code>{{ fnDesc(fn) }}</code></pre>
</template>
