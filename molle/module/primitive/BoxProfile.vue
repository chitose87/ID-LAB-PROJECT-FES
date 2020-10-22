<template lang="pug">
  div
    ItemOptionSelect(
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
  import ItemOptionSelect from "../../item-option/Select.vue";
  import StyleComp from "~/molle/ui/property/StyleComp.vue";
  import {Profile} from "~/molle/module/Profile";

  @Component({
    components: {StyleComp, ItemOptionSelect}
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
