<script setup lang="ts">
import LinkFunctionalityHeader from "@/components/internal/LinkFunctionalityHeader.vue";
import GenericFunctionalityHeader from "@/components/internal/GenericFunctionalityHeader.vue";

const props = defineProps<{
  fn: BacklogFunctionality;
}>();

</script>
<template>
  <header>
    <LinkFunctionalityHeader :fn="fn" v-if="fn.isBasic" />
    <GenericFunctionalityHeader :fn="fn" v-else />
  </header>
</template>