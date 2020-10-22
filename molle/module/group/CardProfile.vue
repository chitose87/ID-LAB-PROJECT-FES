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
  import StyleComp from "~/molle/ui/property/StyleComp.vue";
  import {Profile} from "~/molle/module/Profile";
  import {StyleAlign} from "~/molle/_tba/StyleProfile";
  import {molleModules} from "~/molle/module";

  @Component({
    components: {StyleComp}
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
        img: molleModules.Picture.def,
        title: molleModules.Headline.def,
        description: molleModules.Paragraph.def
      })
    }
  }
</script>

<style lang="scss">
</style>
