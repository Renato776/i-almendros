<script setup lang="ts">
import type BacklogFunctionality from "@/models/BacklogFunctionality"; // adjust path if needed
import {getEntity} from '@/utils/internalDocumentationUtilities';
import type BacklogEntityField from "@/models/BacklogEntityField";
import FunctionalityPrimaryIdentifyingChip from "@/components/FunctionalityPrimaryIdentifyingChip.vue";
import BasicFunctionalityDetails from "@/components/internal/BasicFunctionalityDetails.vue";
import FunctionalityDetailsComponent from "@/components/internal/FunctionalityDetailsComponent.vue";

const props = defineProps<{
  functionalities: Array<BacklogFunctionality>;
}>();


/** Nicely format a field’s meta line */
function fieldMeta(f: BacklogEntityField) {
  const bits: string[] = [];
  if (f.type) bits.push(f.type);
  if (typeof f.size === "number") bits.push(`${f.size}`);
  bits.push(f.required ? "required" : "optional");
  if (f.visible === false) bits.push("hidden");
  return bits.join(" · ");
}

</script>

<template>
  <section
    class="mx-auto w-full max-w-[500px] space-y-3"
    role="list"
    aria-label="Backlog functionalities"
  >
    <div
      v-if="!functionalities || functionalities.length === 0"
      class="text-center text-sm text-neutral-500 py-6"
    >
      Vista vacía (sin funcionalidades).
    </div>

    <article
      v-for="(fn, i) in functionalities"
      :key="i"
      role="listitem"
      class="rounded-xl border border-black/5 bg-surface shadow-sm p-4"
    >
      <!-- Header: code chips & short name -->
      <FunctionalityPrimaryIdentifyingChip :fn="fn" />
      <BasicFunctionalityDetails :entity="getEntity(fn)" v-if="fn.isBasic" />
      <FunctionalityDetailsComponent :fn="fn" v-else />
    </article>
  </section>
</template>

<style scoped>
/* Subtle focus ring for keyboard users */
:focus-visible {
  outline: 2px solid color-mix(in oklab, var(--almendros-primary) 50%, transparent);
  outline-offset: 2px;
}
</style>
