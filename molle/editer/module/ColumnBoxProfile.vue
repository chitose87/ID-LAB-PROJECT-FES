<template lang="pug">
  div
    ItemOptionInput(
      :label="'カラムサイズ'",
      :data="itemData.option || {}"
      :dataKey="'flex-basis'"
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

  @Component({
    components: {StyleComp, ItemOptionInput}
  })
  export default class ColumnBoxProfile extends Profile {
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
