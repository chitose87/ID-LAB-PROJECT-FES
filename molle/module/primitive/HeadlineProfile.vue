<template lang="pug">
  div
    SelectOptionComp(
      :label="'見出しレベル'",
      :select='["h1", "h2", "h3", "h4", "h5", "h6"]'
      :data="itemData.option || {}"
      :dataKey="'lv'"
      @change="(v)=>onUpdate('option',v)"
    )
    StyleComp(
      :itemData="itemData"
      :onUpdate="onUpdate"
      :permission="stylePermission"
    )

</template>

<script lang="ts">
  import {Component} from "~/node_modules/nuxt-property-decorator";
  import SelectOptionComp from "../../ui/property/SelectOptionComp.vue";
  import StyleComp from "~/molle/ui/property/StyleComp.vue";
  import {Profile} from "~/molle/module/Profile";
  import {StyleAlign} from "~/molle/_tba/StyleProfile";

  @Component({
    components: {StyleComp, SelectOptionComp}
  })
  export default class HeadlineProfile extends Profile {
    //style setting
    stylePermission = {
      border: false,
      align: StyleAlign.None,
      margin: "",
      // padding: "",
      // theme: {default: "", select: ["", "test"]},
      // color: {default: "", select: ["", "dark"]},
    };
  }
</script>

<style lang="scss">
</style>
