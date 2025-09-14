<script setup lang="ts">
import type BacklogFunctionality from "@/models/BacklogFunctionality"; // adjust path if needed
import { entCode, entName, entDesc, entFields } from '@/utils/internalDocumentationUtilities';
import type BacklogEntity from "@/models/BacklogEntity";
import type BacklogEntityField from "@/models/BacklogEntityField";
import FunctionalityPrimaryIdentifyingChip from "@/components/FunctionalityPrimaryIdentifyingChip.vue";

const props = defineProps<{
  functionalities: Array<BacklogFunctionality>;
}>();

function getEntity(func: any): BacklogEntity | undefined {
  // try common patterns without assuming private/protected access at compile time
  if (typeof func?.getArgument === "function") return func.getArgument();
  if (func?.argument) return func.argument as BacklogEntity;
  return undefined;
}

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
      No functionalities to display.
    </div>

    <article
      v-for="(fn, i) in functionalities"
      :key="i"
      role="listitem"
      class="rounded-xl border border-black/5 bg-surface shadow-sm p-4"
    >
      <!-- Header: code chips & short name -->
      <FunctionalityPrimaryIdentifyingChip :fn="fn" />

      <!-- Argument / Entity block -->
      <section class="mt-3">
        <h4 v-if="!fn.isLink" class="mb-2 text-xs uppercase tracking-wide text-neutral-500">
          Argument
        </h4>

        <div
          class="rounded-lg border border-black/5 bg-white/50 p-3 text-sm"
          :class="{'opacity-70': !getEntity(fn)}"
        >
          <template v-if="getEntity(fn)">
            <div v-if="!fn.isLink" class="mb-2 flex flex-wrap items-center gap-2">
              <span class="rounded-md bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-primary"
                    :title="entCode(getEntity(fn))">
                {{ entCode(getEntity(fn)) || '—' }}
              </span>
              <span class="text-[13px] font-medium text-header-fg truncate"
                    :title="entName(getEntity(fn))">
                {{ entName(getEntity(fn)) || 'Unnamed entity' }}
              </span>
            </div>

            <pre
              v-if="entDesc(getEntity(fn))"
              class="whitespace-pre-wrap break-words rounded-md bg-black/[.03] p-2 text-[12px] leading-snug"
            ><code>{{ entDesc(getEntity(fn)) }}</code></pre>

            <!-- Fields (collapsible for compactness) -->
            <details v-if="!fn.isLink" class="mt-3 group">
              <summary
                class="cursor-pointer select-none text-[13px] font-semibold text-primary outline-none"
              >
                Fields
                <span class="ml-1 text-[11px] text-neutral-500">
                  ({{ entFields(getEntity(fn)).length }})
                </span>
              </summary>

              <ul class="mt-2 space-y-2">
                <li
                  v-for="(field, idx) in entFields(getEntity(fn))"
                  :key="idx"
                  class="rounded-md border border-black/5 bg-white p-2"
                >
                  <div class="flex items-baseline justify-between gap-2">
                    <code class="font-mono text-[12px] font-semibold text-header-fg"
                          :title="field.name">
                      {{ field.name || 'unnamed_field' }}
                    </code>
                    <span
                      class="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium"
                      :class="field.required
                        ? 'bg-primary/10 text-primary'
                        : 'bg-black/5 text-neutral-600'"
                    >
                      {{ field.required ? 'required' : 'optional' }}
                    </span>
                  </div>

                  <div class="mt-1 text-[12px] text-neutral-600">
                    {{ fieldMeta(field) }}
                  </div>

                  <div v-if="field.default" class="mt-1 text-[12px]">
                    <span class="text-neutral-500">default:</span>
                    <code class="ml-1 rounded bg-black/5 px-1 py-0.5 text-[11px]">
                      {{ field.default }}
                    </code>
                  </div>

                  <div v-if="field.reference" class="mt-1 text-[12px]">
                    <span class="text-neutral-500">references:</span>
                    <code class="ml-1 text-[11px]">
                      {{ entCode(field.reference) || entName(field.reference) || 'entity' }}
                    </code>
                  </div>

                  <pre
                    v-if="field.comment"
                    class="mt-2 whitespace-pre-wrap break-words rounded bg-black/[.03] p-2 text-[12px]"
                  ><code>{{ field.comment }}</code></pre>
                </li>
              </ul>
            </details>
          </template>

          <template v-else>
            <div class="text-[13px] text-neutral-500">
              No argument/entity metadata provided.
            </div>
          </template>
        </div>
      </section>
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
