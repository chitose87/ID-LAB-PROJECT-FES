<template lang="pug">
  component.module.headline(
    v-if="itemData"
    :is="itemData.option.lv"
    :id="itemData.tagId"
    :class="getClass(itemData)"
    :style="getStyle(itemData)"
    :data-item-id="itemData.id"
    v-html="itemData.value || itemData.superValue"
  )

</template>

<script lang="ts">
  import {Component} from "~/node_modules/nuxt-property-decorator";
  import {Module} from "~/molle/ssr/module/Module";

  @Component({
    components: {}
  })
  export default class Headline extends Module {
  }
</script>

<style lang="scss">
</style>
