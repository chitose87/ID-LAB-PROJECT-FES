<template lang="pug">
  .module-e(
    v-if="itemData.moduleId"
    :class="{editing:isEditing()}"
  )
    ModuleEditorComp.module-editor--box(
      :itemData="itemData"
      :valueProfile="valueProfile"
      :styleProfile="styleProfile")

    .section-head(
      :id="itemData.tagId"
      :class="getClass(itemData)"
    )
      .section-head__body
        HeadlineE.section-head__body__title(
          :itemId="getMemberItemId('title')"
          :notDeleted="true"
        )
        ParagraphE.section-head__body__p(
          :itemId="getMemberItemId('description')"
          :notDeleted="true"
        )

</template>

<script lang="ts">
  import {Component} from "~/node_modules/nuxt-property-decorator";
  import StyleComp from "~/molle/editer/ui/StyleComp.vue";
  import {StyleAlign, StyleProfile} from "~/molle/interface/StyleProfile";
  import {ValueProfile, ValueType} from "~/molle/interface/ValueProfile";
  import ModuleEditorComp from "~/molle/editer/ui/ModuleEditorComp.vue";
  import {InitialValue} from "~/molle/editer/module/index";
  import {ModuleEGroup} from "~/molle/editer/module/ModuleEGroup";

  @Component({
    components: {ModuleEditorComp, StyleComp}
  })
  export default class SectionHeadE extends ModuleEGroup {
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
      this.init(InitialValue.Group("Card"));
    }

    //Unique Methods
  }
</script>

<style lang="scss">
  .section-head {
    .card {
      box-shadow: $shadow;
    }
    &__body {
      text-align: center;
    }
  }
</style>
