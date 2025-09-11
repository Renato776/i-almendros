<script setup lang="ts">
import { ref } from 'vue'
import TTLockReference from "@/models/TTLockReference.ts";

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
        <figure
            v-for="(ref, i) in references"
            :key="ref.getUrl"
            role="listitem"
            class="w-full"
            :id="ref.getId"
        >
          <figcaption class="mt-2 text-center text-[var(--almendros-fg,#111827)]">
            <span class="inline-flex items-center gap-2 max-w-full">
              <a href="#backlog-index">
                <span class="shrink-0 font-medium text-primary">#{{ i + 1 }}</span>&nbsp;
                <strong
                    class="inline-block align-bottom max-w-full"
                    :title="ref.getCode"
                >
                  {{ ref.getCode }}
                </strong>&nbsp;
                  <strong>
                    <i class="fa-solid fa-up-to-dotted-line"></i>
                  </strong>
              </a>
            </span>
          </figcaption>
          <a :href="ref.getLocalImplementationUrl" class="block">
            <img
                :src="ref.getUrl"
                class="w-full h-auto rounded-xl shadow-sm"
                loading="lazy"
            />
          </a>

          <figcaption class="mt-2 text-center text-[var(--almendros-fg,#111827)]">
            <span class="inline-flex items-center gap-2 max-w-full">
              <strong
                  class="inline-block align-bottom max-w-full"
                  :title="ref.getCaption"
              >
                {{ ref.getCaption }}
              </strong>
            </span> <br v-if="ref.hasComments" />
            <span class="inline-flex items-baseline text-left text-sm gap-2 max-w-full">
                {{ ref.getComments }}
            </span>

          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>
