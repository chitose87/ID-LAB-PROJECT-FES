<template lang="pug">
  div
    ItemOptionInput(
      :label="'基本カラムサイズ'",
      :data="itemData.option || {}"
      :dataKey="'flex-basis'"
      @change="(v)=>onUpdate('option',v)"
    )
    ItemOptionSpace(
      :label="'横の隙間'",
      :data="itemData.option || {}"
      :dataKey="'gutter-h'"
      :negative="false"
      @change="(v)=>onUpdate('option',v)"
    )
    ItemOptionSpace(
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
  import StyleComp from "~/molle/editer/ui/StyleComp.vue";
  import {Profile} from "~/molle/editer/module/Profile";
  import ItemOptionInput from "~/molle/editer/module/item-option/Input.vue";
  import ItemOptionSpace from "~/molle/editer/module/item-option/Space.vue";

  @Component({
    components: {StyleComp, ItemOptionInput, ItemOptionSpace}
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
