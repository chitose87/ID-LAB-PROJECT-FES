<template lang="pug">
  .module.card(
    v-if="itemData"
    :id="itemData.tagId"
    :class="getClass(itemData)"
    :style="getStyle(itemData)"
    :data-item-id="itemData.id"
  )
    div
      //PictureE(
      //  :itemId="getMemberItemId('img')"
      //  :notDeleted="true"
      //  :required="true"
      //)

      .left
        //HeadlineE(
        //  :itemId="getMemberItemId('title')"
        //  :notDeleted="true"
        //)

        Paragraph(
          :itemData="payload[itemData.value.description]"
          :payload="payload"
        )

</template>

<script lang="ts">
  import {Component, Vue} from "~/node_modules/nuxt-property-decorator";
  import StyleComp from "~/molle/editer/ui/StyleComp.vue";
  import {StyleAlign, StyleProfile} from "~/molle/interface/StyleProfile";
  import {ValueProfile, ValueType} from "~/molle/interface/ValueProfile";
  import ModuleEditorComp from "~/molle/editer/ui/ModuleEditorComp.vue";
  import {InitialValue} from "~/molle/editer/module/index";
  import {ModuleEGroup} from "~/molle/editer/module/ModuleEGroup";
  import {Module} from "~/molle/ssr/module/Module";
  import Paragraph from "~/molle/editer/module/Paragraph.vue";

  @Component({
    components: {Paragraph, ModuleEditorComp, StyleComp}
  })
  export default class CardE extends Module {
    //value setting
    // valueProfile: ValueProfile = new ValueProfile({
    //   types: [ValueType.group]
    // });
    //
    // //style setting
    // styleProfile: StyleProfile = new StyleProfile({
    //   border: false,
    //   align: StyleAlign.None,
    //   theme: {default: "", select: ["", "test"]},
    //   color: {default: "", select: ["", "dark"]},
    // });
    //
    // created() {
    //   this.init(InitialValue.Group("Card"));
    // }

    //Unique Methods
  }
</script>

<style lang="scss">
  .card {
    box-shadow: $shadow;
  }
</style>
