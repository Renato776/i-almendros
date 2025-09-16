<script setup lang="ts">
import { ref } from "vue";
import type TTLockReference from "@/models/TTLockReference.ts";

const props = defineProps<{ reference: TTLockReference }>();

// ref to the <figure> element
const figureEl = ref<HTMLElement | null>(null);

function displayFunctionalities() {
  const el = figureEl.value;
  if (!el) {
    console.warn("[TTLockReference] <figure> ref not ready.");
    return;
  }

  const rect = el.getBoundingClientRect();

  // Coordinates relative to the viewport (used by position: fixed)
  const fixedRelative = {
    top: Math.round(rect.top),
    left: Math.round(rect.left) - 400 - 35,
  };
  const root = document.getElementById("abcdefghi__lmnopqrstuvwxyz") || window;
  root.dispatchEvent(new CustomEvent('display-experimental-log', {detail:{
      functionalities: props.reference.getFunctionalities,
      screen_name: props.reference.getCaption,
      screen_code: props.reference.getCode,
      X: fixedRelative.left,
      Y: fixedRelative.top,
    }}))
}
</script>

<template>
  <div>
    <figure
        ref="figureEl"
        role="listitem"
        class="w-full z-1"
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
        </span>
        <br v-if="reference.hasComments" />
        <span class="inline-flex items-baseline text-left text-sm gap-2 max-w-full">
          {{ reference.getComments }}
        </span>
      </figcaption>

      <figcaption @click="displayFunctionalities()" class="text-center pb-2 cursor-pointer">
        <span v-if="reference.getFunctionalities.length > 0">
          Ver {{ reference.getFunctionalities.length }} Funcionalidades <small class="text-[blue]">●</small> <i class="fa-solid fa-function"></i>
        </span>
      </figcaption>
    </figure>
  </div>
</template>
