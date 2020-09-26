<template lang="pug">
  div
    StyleComp(
      :itemData="itemData"
      :onUpdate="onUpdate"
      :permission="stylePermission"
    )

</template>

<script lang="ts">
  import {Component} from "~/node_modules/nuxt-property-decorator";
  import ItemOptionSelect from "./item-option/Select.vue";
  import StyleComp from "~/molle/editer/ui/StyleComp.vue";
  import {Profile} from "~/molle/editer/module/Profile";
  import {StyleAlign} from "~/molle/interface/StyleProfile";

  @Component({
    components: {StyleComp, ItemOptionSelect}
  })
  export default class ParagraphProfile extends Profile {
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
