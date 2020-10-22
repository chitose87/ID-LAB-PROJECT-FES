<template lang="pug">
  .module-e(
    v-if="itemData.moduleId"
    :class="{editing:isEditing()}"
  )
    ModuleEditorComp.module-editor--box(
      :itemData="itemData"
      :valueProfile="valueProfile"
      :styleProfile="styleProfile")

    .list-card-item(
      :id="itemData.tagId"
      :class="getClass(itemData)"
    )
      p new
      .list-card-item__body
        .list-card-item__body__left
          PictureE.list-card-item__body__img(
            :itemId="getMemberItemId('img')"
            :notDeleted="true"
            :required="true"
          )
        .list-card-item__body__right
          ParagraphE.list-card-item__body__date(
            :itemId="getMemberItemId('date')"
            :notDeleted="true"
          )
          ParagraphE.list-card-item__body__p(
            :itemId="getMemberItemId('description')"
            :notDeleted="true"
          )
          ParagraphE.list-card-item__body__tag(
            :itemId="getMemberItemId('hashtag')"
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
  export default class ListCardItemE extends ModuleEGroup {
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
      // this.init(InitialValue.Group("ListCardItem"));
    }

    //Unique Methods
  }
</script>

<style lang="scss">
  .list-card-item {
    .card {
      box-shadow: $shadow;
    }
    &__body {
      display: flex;
    }
  }
</style>
