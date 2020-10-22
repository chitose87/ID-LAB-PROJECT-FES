<template lang="pug">
  .module.column__item.box(
    v-if="itemData"
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
  import {Module} from "~/molle/module/Module";

  @Component({
    components: {}
  })
  export default class ColumnBox extends Module {
    getStyle() {
      let obj = super.getStyle(this.itemData);
      let selfOpt = this.itemData.option || {};
      let parentOpt;
      try {
        parentOpt = this.$parent.$props.itemData.option;
      } catch (e) {
        parentOpt = {};
      }
      let attrs = ["flex-basis"];
      for (let attr of attrs) {
        obj[attr] = selfOpt[attr] || parentOpt[attr];
      }
      //gutter
      let gutterH = this.getValue(parentOpt["gutter-h"]);
      if (gutterH) {
        obj["padding-left"] || (obj["padding-left"] = gutterH);
        obj["padding-right"] || (obj["padding-right"] = gutterH);
      }
      let gutterV = this.getValue(parentOpt["gutter-v"]);
      if (gutterV) {
        obj["padding-top"] || (obj["padding-top"] = gutterV);
        obj["padding-bottom"] || (obj["padding-bottom"] = gutterV);
      }
      return obj;
    }
  }
</script>

<style lang="scss">
  .column__item {
  }

</style>
