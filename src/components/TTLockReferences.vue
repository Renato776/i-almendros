<script setup lang="ts">
import { ref } from 'vue'
import TTLockReference from "@/models/internal/TTLockReference.ts";
import ReferenceDetails from "@/components/ReferenceDetails.vue";

const references = ref<Array<TTLockReference>>(TTLockReference.asFirstRevision())
const backlogURL = ref<string>('https://docs.google.com/document/d/1MO9fH3sgq5sOycdk4E-N0pFASFyL5QMhD4iE8QqZioo/edit?usp=sharing')
</script>

<template>
  <section id="ttlock_dev_references">
    <header class="bg-surface p-6" style="padding-left: 1em; padding-right: 1em">
      <h2 class="text-xl font-semibold text-primary text-center">
        Referencias a tomar en cuenta
      </h2>
      <p class="text-base mt-2 text-[var(--almendros-fg,#111827)]">
        Las referencias indican las pantallas de la aplicación TTLock a tomar en cuenta.
        Pueden utilizarse como guía para el diseño y desarrollo. Estas referencias solo se muestran
        en <strong>desktop durante el desarrollo</strong>. Van ordenadas según el flujo de uso.
        Para más detalles ve al backlog:
        <a
            :href="backlogURL"
            target="_blank"
            rel="noopener"
            class="underline text-primary"
        >abrir backlog</a>.
        Para ver detalles sobre el API, consulta el README del repositorio. <br/><br/>

        El objetivo del proyecto es completar la totalidad de las <strong>{{references.length}} vistas</strong>
        expuestas en este apartado.
      </p>
    </header>
    <ol
        id="backlog-index"
        style="list-style-type: decimal"
        class="w-3/4 mx-auto list-decimal-leading-zero"
        role="list"
    >
      <li
          v-for="ref in references"
          :key="ref.getUrl"
          role="listitem"
          class="mb-2"
      >
        <a
            class="underline hover:opacity-50 transition"
            :href="'#' + ref.getId"
        >
          {{ ref.getCaption }}
        </a>
      </li>
    </ol>

    <div
        class="mt-4 rounded-2xl border border-black/10 bg-surface p-4"
        role="list"
    >
      <div class="flex flex-col gap-6">
        <ReferenceDetails
          v-for="r in references"
          :key="r.getId"
          :reference="r"
        />
      </div>
    </div>
  </section>
</template>
