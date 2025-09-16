<script setup lang="ts">
import LinkFunctionalityHeader from "@/components/internal/LinkFunctionalityHeader.vue";
import GenericFunctionalityHeader from "@/components/internal/GenericFunctionalityHeader.vue";

const props = defineProps<{
  fn: BacklogFunctionality;
  index: number;
}>();

</script>
<template>
  <header class="flex items-center justify-baseline gap-2 w-full">
    {{index}})
    <LinkFunctionalityHeader :fn="fn" v-if="fn.isBasic" />
    <GenericFunctionalityHeader :fn="fn" v-else />
  </header>
</template>