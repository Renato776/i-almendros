<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue";

const visible = ref(false);
const topPx = ref<number>(-10000); // start far above the viewport
const leftPx = ref<number>(0);
const boxRef = ref<HTMLElement | null>(null);

const OFFSCREEN_TOP = -10000;
let hideTimer: number | null = null;

const clamp = (n: number, min: number, max: number) =>
    Math.min(Math.max(n, min), max);

function hide() {
  if (hideTimer) { clearTimeout(hideTimer); hideTimer = null; }
  visible.value = false;
  // after transition completes, park offscreen again
  window.setTimeout(() => {
    topPx.value = OFFSCREEN_TOP;
    console.log("[ExperimentalDialog] hidden");
  }, 320); // match CSS transition duration
}

function showAt(x: number, y: number, autoHideMs = 2500) {
  const bw = boxRef.value?.offsetWidth ?? 500;
  const bh = boxRef.value?.offsetHeight ?? 80;

  // Keep the box inside the viewport bounds
  const maxLeft = Math.max(0, window.innerWidth - bw - 8);
  const maxTop  = Math.max(0, window.innerHeight - bh - 8);

  leftPx.value = clamp(Math.round(x), 8, maxLeft);
  topPx.value  = clamp(Math.round(y), 8, maxTop);

  visible.value = true;
  console.log("[ExperimentalDialog] shown at", { left: leftPx.value, top: topPx.value });

  if (hideTimer) clearTimeout(hideTimer);
  hideTimer = window.setTimeout(() => hide(), autoHideMs);
}

onMounted(() => {
  // Start hidden offscreen (already set), then wire listeners.
  const targetEl = document.getElementById("abcdefghi__lmnopqrstuvwxyz") || window;

  const onDisplay = (ev: Event) => {
    const ce = ev as CustomEvent<any>;
    const d = ce.detail ?? {};
    // accept X/Y or x/y; default to 16px if missing
    const X = Number.isFinite(+d.X) ? +d.X : (Number.isFinite(+d.x) ? +d.x : 16);
    const Y = Number.isFinite(+d.Y) ? +d.Y : (Number.isFinite(+d.y) ? +d.y : 16);
    const autoHideMs = Number.isFinite(+d.autoHideMs) ? +d.autoHideMs : 2500;
    showAt(X, Y, autoHideMs);
  };

  const onHide = () => hide();

  targetEl.addEventListener("display-experimental-log", onDisplay as EventListener);
  targetEl.addEventListener("hide-experimental-log", onHide as EventListener);

  // Clean up
  onBeforeUnmount(() => {
    targetEl.removeEventListener("display-experimental-log", onDisplay as EventListener);
    targetEl.removeEventListener("hide-experimental-log", onHide as EventListener);
    if (hideTimer) clearTimeout(hideTimer);
  });
});
</script>

<template>
  <div
      ref="boxRef"
      class="exp-dialog"
      :class="{ 'is-visible': visible }"
      :style="{ top: `${topPx}px`, left: `${leftPx}px`, width: '500px' }"
  >
    <p>Hello from Experimental Dialog!</p>
  </div>
</template>

<style scoped>
.exp-dialog {
  position: fixed;
  z-index: 999;
  background: magenta;
  color: black;
  border: 2px solid blue;
  box-shadow: 0 10px 30px rgba(0,0,0,.2);
  opacity: 0;
  transform: translateY(-8px);
  transition:
      top 0.3s ease,
      opacity 0.3s ease,
      transform 0.3s ease;
  pointer-events: none; /* no interaction needed */
}
.exp-dialog.is-visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
</style>
