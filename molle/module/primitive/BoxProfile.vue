<template lang="pug">
  div
    SelectOptionComp(
      :label="'タグ'",
      :select='["", "section"]'
      :data="itemData.option || {}"
      :dataKey="'tag'"
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

  @Component({
    components: {StyleComp, SelectOptionComp}
  })
  export default class BoxProfile extends Profile {
    //style setting
    stylePermission = {
      container: false,
      border: false,
      margin: "",
      padding: "",
      // theme: {default: "", select: ["", "test"]},
      // color: {default: "", select: ["", "dark"]},
    };
  }
</script>

<style lang="scss">
</style>
