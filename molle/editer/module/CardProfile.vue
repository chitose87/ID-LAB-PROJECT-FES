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
  import {molleModules} from "~/molle/editer/module/index";

  @Component({
    components: {StyleComp, ItemOptionSelect}
  })
  export default class CardProfile extends Profile {
    //style setting
    stylePermission = {
      border: false,
      align: StyleAlign.None,
      margin: "",
      // padding: "",
      // theme: {default: "", select: ["", "test"]},
      // color: {default: "", select: ["", "dark"]},
    };

    beforeMount() {
      this.checkChild({
        // img:
        // title:
        description: molleModules.Paragraph.def
      })
    }
  }
</script>

<style lang="scss">
</style>
