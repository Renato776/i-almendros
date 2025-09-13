I have this typescript structure:

```ts
class TTLockReference
{
protected img_url: string = '';
protected caption: string = '';
protected code: string = '';
protected project_relative_implementation_url: string = '';
protected comments: string = '';
protected functionalities: Array<BacklogFunctionality> = [];

public getFunctionalities(): Array<BacklogFunctionality> {
    return this.functionalities;
}
/* .... */
}

class BacklogFunctionality {
    protected argument: BacklogEntity;
    public get short_name(): string {
        return `${this.code}:${this.argument.code}`;
    }
    public getName(): string {
        return this.name;
    }
    public getDescription(): string{
        return this.description;
    }
    /**/
}

class BacklogEntity {
    public getCode(): string {
        return this.code;
    }
    public getName(): string {
        return this.name;
    }
    public getDescription(): string {
        return this.description;
    }

    public getFields(): Array<BacklogEntityField> {
        return this.fields;
    }
    
}
class BacklogEntityField {
    public required: boolean = false;
    public visible: boolean = true;
    public type: string = 'texto';
    public size: number = 255;
    public name: string = '';
    public reference?: BacklogEntity;
    public default?: string;
    public comment?: string = '';
}

```
And, this Vue component:
```vue
<script setup lang="ts">
import type TTLockReference from "@/models/TTLockReference.ts";
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
    <div class="functionalities-display">

    </div>
  </div>
</template>
```
Can you implement a new component that
takes an array of BacklogFunctionality
as prop, and uses it to render the info 
in a mobile-first (single-column) fashion
to the user? THe user is technical, so you
can use <pre> tags, or even <code> tags if you
can find a good style to use. Balance colors,
bullets, and structure to render the information
in a digestible and structured format remembering
that this component will be displayed in a columnar
fashion (max of 500px wide), so don't try
multiple columns or complex wide grids.

THe project supports Tailwind, so please use
tailwind and the following theme is supported:

```css
@theme {
    --color-primary: var(--almendros-primary);
    --color-header-fg: var(--almendros-header-fg);
    --color-surface: var(--almendros-main-background);
}
```
Please do your best!
