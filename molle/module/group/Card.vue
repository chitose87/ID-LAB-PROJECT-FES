<template lang="pug">
  .module.card(
    v-if="itemData"
    :id="itemData.tagId"
    :class="getClass(itemData)"
    :style="getStyle(itemData)"
    :data-item-id="itemData.id"
  )
    div
      Picture(
        :itemData="payload[itemData.value.img]"
        :payload="payload"
        :notDeleted="true"
        :required="true"
      )

      .left
        Headline(
          :itemData="payload[itemData.value.title]"
          :payload="payload"
          :notDeleted="true"
        )

        Paragraph(
          :itemData="payload[itemData.value.description]"
          :payload="payload"
          :notDeleted="true"
        )

</template>

<script lang="ts">
  import {Component, Vue} from "~/node_modules/nuxt-property-decorator";
  import StyleComp from "~/molle/ui/property/StyleComp.vue";
  import ModuleEditorComp from "~/molle/_tbd/ModuleEditorComp.vue";
  import {Module} from "~/molle/module/Module";
  import Paragraph from "~/molle/module/primitive/Paragraph.vue";
  import Headline from "~/molle/module/primitive/Headline.vue";
  import Picture from "~/molle/module/primitive/Picture.vue";

  @Component({
    components: {Picture, Headline, Paragraph, ModuleEditorComp, StyleComp}
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
