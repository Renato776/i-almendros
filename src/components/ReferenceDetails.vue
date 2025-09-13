<script setup lang="ts">
import type TTLockReference from "@/models/TTLockReference.ts";
import FunctionalitiesRenderer from "@/components/FunctionalitiesRenderer.vue";
const props = defineProps<{ reference: TTLockReference }>();
</script>
<template>
  <div>
    <figure
        role="listitem"
        class="w-full"
        :id="reference.getId"
    >
      <figcaption class="mt-2 text-center text-[var(--almendros-fg,#111827)]">
            <span class="inline-flex items-center gap-2 max-w-full">
              <a href="#backlog-index">
                <span class="shrink-0 font-medium text-primary">#{{ reference.getOrder }}</span>&nbsp;
                <strong
                    class="inline-block align-bottom max-w-full"
                    :title="reference.getCode"
                >
                  {{ reference.getCode }}
                </strong>&nbsp;
                  <strong>
                    <i class="fa-solid fa-up-to-dotted-line"></i>
                  </strong>
              </a>
            </span>
      </figcaption>
      <a :href="reference.getLocalImplementationUrl" class="block">
        <img
            :src="reference.getUrl"
            class="w-full h-auto rounded-xl shadow-sm"
            loading="lazy"
        />
      </a>

      <figcaption class="mt-2 text-center text-[var(--almendros-fg,#111827)]">
          <span class="inline-flex items-center gap-2 max-w-full">
            <strong
                class="inline-block align-bottom max-w-full"
                :title="reference.getCaption"
            >
              {{ reference.getCaption }}
            </strong>
            </span> <br v-if="reference.hasComments"/>
        <span class="inline-flex items-baseline text-left text-sm gap-2 max-w-full">
            {{ reference.getComments }}
      </span>
      </figcaption>
    </figure>
    <FunctionalitiesRenderer :functionalities="reference.getFunctionalities" />
  </div>
</template>