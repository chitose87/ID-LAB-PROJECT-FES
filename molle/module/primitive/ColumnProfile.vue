<template lang="pug">
  div
    InputOptionComp(
      :label="'基本カラムサイズ'",
      :data="itemData.option || {}"
      :dataKey="'flex-basis'"
      @change="(v)=>onUpdate('option',v)"
    )
    SpaceOptionComp(
      :label="'横の隙間'",
      :data="itemData.option || {}"
      :dataKey="'gutter-h'"
      :negative="false"
      @change="(v)=>onUpdate('option',v)"
    )
    SpaceOptionComp(
      :label="'縦の隙間'",
      :data="itemData.option || {}"
      :dataKey="'gutter-v'"
      :negative="false"
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
  import StyleComp from "~/molle/ui/property/StyleComp.vue";
  import {Profile} from "~/molle/module/Profile";
  import InputOptionComp from "~/molle/ui/property/InputOptionComp.vue";
  import SpaceOptionComp from "~/molle/ui/property/SpaceOptionComp.vue";

  @Component({
    components: {SpaceOptionComp, InputOptionComp, StyleComp, }
  })
  export default class ColumnProfile extends Profile {
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
