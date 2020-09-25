<template lang="pug">
  component.module.box(
    v-if="itemData"
    :is="itemData.option.tag || 'div'"
    :id="itemData.tagId"
    :class="getClass(itemData)"
    :style="getStyle(itemData)"
    :data-item-id="itemData.id"
  )
    component(
      v-for="id in itemData.value"
      v-if="payload[id]"
      :is="payload[id].moduleId"
      :key="id"
      :itemData="payload[id]"
      :payload="payload"
    )
    div(v-if="itemData.value.length===0")
      p.text-black-50 Not Item

</template>

<script lang="ts">
  import {Component, Prop, Watch} from "~/node_modules/nuxt-property-decorator";
  import {Module} from "~/molle/ssr/module/Module";

  @Component({
    components: {}
  })
  export default class Box extends Module {
  }
</script>

<style lang="scss">
  .box {

  }
</style>
