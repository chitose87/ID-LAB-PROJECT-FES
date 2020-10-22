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
      // this.init(InitialValue.Group("Card"));
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
