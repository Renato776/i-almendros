<script setup lang="ts">
import { ref } from 'vue'
import TTLockReference from "@/models/TTLockReference.ts";

const references = ref<Array<TTLockReference>>(TTLockReference.asFirstRevision())
const backlogURL = ref<string>('https://docs.google.com/document/d/1MO9fH3sgq5sOycdk4E-N0pFASFyL5QMhD4iE8QqZioo/edit?usp=sharing')
</script>

<template>
  <section id="ttlock_dev_references">
    <header class="bg-surface p-6">
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
        Para ver detalles sobre el API, consulta el README del repositorio.
      </p>
    </header>

    <div
        class="mt-4 rounded-2xl border border-black/10 bg-surface p-4"
        role="list"
    >
      <div class="flex flex-col gap-6">
        <figure
            v-for="(ref, i) in references"
            :key="ref.getUrl"
            role="listitem"
            class="w-full"
        >
          <figcaption class="mt-2 text-center text-[var(--almendros-fg,#111827)]">
            <span class="inline-flex items-center gap-2 max-w-full">
              <span class="shrink-0 font-medium text-primary">#{{ i + 1 }}</span>
              <strong
                  class="inline-block align-bottom max-w-full"
                  :title="ref.getCode"
              >
                {{ ref.getCode }}
              </strong>
            </span>
          </figcaption>
          <a :href="ref.getLocalImplementationUrl" target="_blank" rel="noopener" class="block">
            <img
                :src="ref.getUrl"
                class="w-full h-auto rounded-xl shadow-sm"
                loading="lazy"
            />
          </a>

          <figcaption class="mt-2 text-center text-[var(--almendros-fg,#111827)]">
            <span class="inline-flex items-center gap-2 max-w-full">
              <span
                  class="inline-block align-bottom max-w-full"
                  :title="ref.getCaption"
              >
                {{ ref.getCaption }}
              </span>
            </span>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>
