<script setup lang="ts">
import { entDesc } from "@/utils/internalDocumentationUtilities.ts";
import type BacklogEntity from "@/models/internal/BacklogEntity.ts";
const props = defineProps<{
  entity: BacklogEntity;
}>();
</script>

<template>
  <section class="mt-3">
    <div class="rounded-lg border border-black/5  bg-white/50 text-sm" >
      <pre class="whitespace-pre-wrap break-words rounded-md bg-black/[.03] p-2 text-[12px] leading-snug"
      ><code v-html="entDesc(entity)"></code></pre>
    </div>
  </section>
</template>