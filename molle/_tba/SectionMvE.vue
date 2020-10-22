<template lang="pug">
  .module-e(
    v-if="itemData.moduleId"
    :class="{editing:isEditing()}"
  )
    ModuleEditorComp.module-editor--box(
      :itemData="itemData"
      :valueProfile="valueProfile"
      :styleProfile="styleProfile")

    .section-mv(
      :id="itemData.tagId"
      :class="getClass(itemData)"
    )
      .section-mv__bg
        .section-mv__catch
          PictureE(
            :itemId="getMemberItemId('bg')"
            :notDeleted="true"
            :required="true"
          )
      .section-mv__body
        PictureE(
          :itemId="getMemberItemId('logo')"
          :notDeleted="true"
          :required="true"
        )



</template>

<script lang="ts">
  import {Component} from "~/node_modules/nuxt-property-decorator";
  import StyleComp from "~/molle/ui/property/StyleComp.vue";
  import {StyleAlign, StyleProfile} from "~/molle/_tba/StyleProfile";
  import {ValueProfile, ValueType} from "~/molle/_tbd/ValueProfile";
  import ModuleEditorComp from "~/molle/_tbd/ModuleEditorComp.vue";
  // import {InitialValue} from "~/molle/editer/module/index";
  import {ModuleEGroup} from "~/molle/_tbd/ModuleEGroup";

  @Component({
    components: {ModuleEditorComp, StyleComp}
  })
  export default class SectionMvE extends ModuleEGroup {
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
      // this.init(InitialValue.Group("SectionMv"));
    }

    //Unique Methods
  }
</script>

<style lang="scss">
  .card {
    box-shadow: $shadow;
  }
  .section-mv{
    padding-top: 0;
    padding-bottom: 0;
    .section-mv__bg{
      position: sticky;
      top: 0;
      height: 0;
      z-index: -1;
      .section-mv__catch{
        width: 100%;
        height: 1280px;
        PictureE{
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      }
    }
    .section-mv__body{
      text-align: center;
      bottom: 0;
      padding-top: 40%;
      padding-bottom: 4.5rem;
      PictureE {
        width: 810px;
        height: auto;
      }
    }
  }
</style>
