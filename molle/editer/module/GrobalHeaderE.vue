<template lang="pug">
  .module-e(
    v-if="itemData.moduleId"
    :class="{editing:isEditing()}"
  )
    ModuleEditorComp.module-editor--box(
      :itemData="itemData"
      :valueProfile="valueProfile"
      :styleProfile="styleProfile")

    .grobal_header(
      :id="itemData.tagId"
      :class="getClass(itemData)"
    )
      section.grobal-header
        .grobal-header__body
          .grobal-header__left
            img.img(src="/imgs/logo.svg" alt="logo")
          .grobal-header__main
            p.grobal-header__item
              span About us
            p.grobal-header__item
              span Projects new report
            p.grobal-header__item
              span Project
            p.grobal-header__item
              span Sponsor
            p.grobal-header__item
              span Entry


</template>

<script lang="ts">
  import {Component} from "~/node_modules/nuxt-property-decorator";
  import StyleComp from "~/molle/editer/ui/StyleComp.vue";
  import {StyleAlign, StyleProfile} from "~/molle/interface/StyleProfile";
  import {ValueProfile, ValueType} from "~/molle/interface/ValueProfile";
  import ModuleEditorComp from "~/molle/editer/ui/ModuleEditorComp.vue";
  // import {InitialValue} from "~/molle/editer/module/index";
  import {ModuleEGroup} from "~/molle/editer/module/ModuleEGroup";

  @Component({
    components: {ModuleEditorComp, StyleComp}
  })
  export default class GrobalHeaderE extends ModuleEGroup {
    //value setting
    valueProfile: ValueProfile = new ValueProfile({
      types: [ValueType.group]
    });

    //style setting
    styleProfile: StyleProfile = new StyleProfile({
      border: false,
      align: StyleAlign.None,
      theme: {default: "", select: ["", "test"]},
      color: {default: "", select: ["", "dark"]},
    });

    created() {
      //this.init(InitialValue.Group("GrobalHeader"));
    }

    //Unique Methods
  }
</script>

<style lang="scss">
  .card {
    box-shadow: $shadow;
  }
  .grobal_header {
    position:fixed;
    left:0;
    width: 100%;
    z-index: 2;
    .grobal-header__body {
      display: flex;
      margin-top: 1.25rem;
      margin-bottom: 1.25rem;
      align-items: center;
      justify-content: start;
      .grobal-header__left {
        margin-left: 3%;
        margin-right: 11%;
        .img {
          height: auto;
          width: 100px;
        }
      }
      .grobal-header__main {
        display: flex;
      }
    }

    .grobal-header__item {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      padding-left: 1rem;
      padding-right: 1rem;
      position: relative;
      z-index: 1;
      text-align: center;
      margin: 1rem;

      &:after {
        content: "";
        display: block;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        transform: skew(-20deg);
        z-index: -1;
        background-color: $color-key2;
      }
    }
  }

</style>
