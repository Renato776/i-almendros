<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue";
import BacklogFunctionality from "@/models/internal/BacklogFunctionality.ts";
import FunctionalitiesRenderer from "@/components/FunctionalitiesRenderer.vue";

const visible = ref(false);
const topPx = ref<number>(-10000); // start far above the viewport
const leftPx = ref<number>(0);
const boxRef = ref<HTMLElement | null>(null);
const functionalities = ref<Array<BacklogFunctionality>>([]);
const screenName = ref<string>('');

const OFFSCREEN_TOP = -10000;

const clamp = (n: number, min: number, max: number) =>
    Math.min(Math.max(n, min), max);

function hide() {
  visible.value = false;
  // after transition completes, park offscreen again
  window.setTimeout(() => {
    topPx.value = OFFSCREEN_TOP;
    console.log("[ExperimentalDialog] hidden");
  }, 320); // match CSS transition duration
}

function showAt(x: number, y: number) {
  const bw = boxRef.value?.offsetWidth ?? 500;
  const bh = boxRef.value?.offsetHeight ?? 100;

  // Keep the box inside the viewport bounds
  const maxLeft = Math.max(0, window.innerWidth - bw - 8);
  const maxTop  = Math.max(0, window.innerHeight - bh - 8);

  leftPx.value = clamp(Math.round(x), 8, maxLeft);
  topPx.value  = clamp(Math.round(y), 8, maxTop);

  visible.value = true;
  console.log("[ExperimentalDialog] shown at", { left: leftPx.value, top: topPx.value });
}

onMounted(() => {
  // Start hidden offscreen (already set), then wire listeners.
  const targetEl = document.getElementById("abcdefghi__lmnopqrstuvwxyz") || window;

  const onDisplay = (ev: Event) => {
    const ce = ev as CustomEvent<any>;
    const d = ce.detail ?? {};
    if(Array.isArray(d.functionalities)){
      functionalities.value = d.functionalities;
    }
    screenName.value = d.screen_name || '';
    // accept X/Y or x/y; default to 16px if missing
    const X = Number.isFinite(+d.X) ? +d.X : (Number.isFinite(+d.x) ? +d.x : 16);
    const Y = Number.isFinite(+d.Y) ? +d.Y : (Number.isFinite(+d.y) ? +d.y : 16);
    showAt(X, Y);
  };

  const onHide = () => hide();

  targetEl.addEventListener("display-experimental-log", onDisplay as EventListener);
  targetEl.addEventListener("hide-experimental-log", onHide as EventListener);

  // Clean up
  onBeforeUnmount(() => {
    targetEl.removeEventListener("display-experimental-log", onDisplay as EventListener);
    targetEl.removeEventListener("hide-experimental-log", onHide as EventListener);
  });
});
</script>

<template>
  <div
      ref="boxRef"
      role="dialog"
      aria-live="polite"
      :class="[
    // base box
    'fixed z-[999] w-[400px] max-w-[92vw] rounded-2xl border h-[90vh] overflow-y-auto border-black/10 shadow-xl',
    'bg-white/95 dark:bg-neutral-900/90 backdrop-blur-sm',
    'p-4 sm:p-5 transition-all duration-300 ease-out will-change-transform',
    // animation/visibility
    visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
  ]"
      :style="{ top: `${topPx}px`, left: `${leftPx}px` }"
  >
    <h3 class="text-sm sm:text-base font-semibold leading-tight text-neutral-800 dark:text-neutral-100">
      {{ functionalities.length }} funcionalidades de:
      <br />
      <span class="font-medium text-primary">{{ screenName }}</span>
    </h3>

    <div class="my-3 border-t border-neutral-200/70 dark:border-neutral-700/60"></div>

    <FunctionalitiesRenderer :functionalities="functionalities" />
  </div>

</template>

<style scoped>
.exp-dialog {
  position: fixed;
  height: 90vh;
  z-index: 999;
  box-shadow: 0 10px 30px rgba(0,0,0,.2);
  opacity: 0;
  transform: translateY(-8px);
  transition:
      top 0.3s ease,
      opacity 0.3s ease,
      transform 0.3s ease;
  pointer-events: none; /* no interaction needed */
  overflow-x: hidden;
  overflow-y: auto;
}
.exp-dialog.is-visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
</style>
