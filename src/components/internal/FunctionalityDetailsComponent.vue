<script setup lang="ts">
import {entCode, fieldMeta, getEntity, entDesc, entFields, entName} from "@/utils/internalDocumentationUtilities.ts";

const props = defineProps<{
  fn: BacklogFunctionality;
}>();

</script>
<template>
  <section class="mt-3">
    <h4 v-if="fn.shouldDisplayDetailsLabel" class="mb-2 text-xs uppercase tracking-wide text-neutral-500">
      {{fn.detailsLabel}}
    </h4>

    <div
        class="rounded-lg border border-black/5 bg-white/50 p-3 text-sm"
        :class="{'opacity-70': !getEntity(fn)}"
    >
      <template v-if="getEntity(fn)">
        <div class="mb-2 flex flex-wrap items-center gap-2">
          <span class="rounded-md bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-primary"
                :title="entCode(getEntity(fn))">
            {{ entCode(getEntity(fn)) || '—' }}
          </span> = <span class="text-[11px] font-medium" :title="entName(getEntity(fn))">{{fn.getArgument().getName()}}</span>
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
                <code class="font-mono text-[12px] font-semibold"
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
          Sin detalles disponibles.
        </div>
      </template>
    </div>
  </section>
</template>