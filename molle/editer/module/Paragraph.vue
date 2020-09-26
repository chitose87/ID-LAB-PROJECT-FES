<template lang="pug">
  p.module(
    v-if="itemData"
    :id="itemData.tagId"
    :class="getClass(itemData)"
    :style="getStyle(itemData)"
    :data-item-id="itemData.id"
    v-html="itemData.value || itemData.superValue"
  )

</template>

<script lang="ts">
  import {Component} from "~/node_modules/nuxt-property-decorator";
  import StyleComp from "~/molle/editer/ui/StyleComp.vue";
  import ModuleEditorComp from "~/molle/editer/ui/ModuleEditorComp.vue";
  import {Module} from "~/molle/ssr/module/Module";

  @Component({
    components: {ModuleEditorComp, StyleComp}
  })
  export default class Paragraph extends Module {
  }
</script>

<style lang="scss">
</style>
