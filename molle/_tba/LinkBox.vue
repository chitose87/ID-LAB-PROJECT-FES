<template lang="pug">
  .column__item(
    v-if="itemData.moduleId"
    :style="getStyle()"
  )
    .module-e(
      v-if="itemData.moduleId"
      :class="{editing:isEditing()}"
    )
      ModuleEditorComp.module-editor--box(
        :itemOption="itemOption"
        :itemData="itemData"
        :valueProfile="valueProfile"
        :styleProfile="styleProfile")

      .box(
        :class="getClass(itemData)"
      )
        component(
          v-for="child in children"
          v-if="child"
          :key="child.id"
          :is="child.moduleId +'E'"
          :itemId="child.id"
        )
        AddModule(v-if="isEditing()" @submit="addChild($event)")
        div(v-else-if="children.length==0")
          p.text-black-50 Not Item
          AddModule(@submit="addChild($event)")

</template>

<script lang="ts">
  import {Component, Prop, Watch} from "~/node_modules/nuxt-property-decorator";
  import StyleComp from "~/molle/ui/property/StyleComp.vue";
  import {StyleProfile} from "~/molle/_tba/StyleProfile";
  import {ValueProfile, ValueType} from "~/molle/_tbd/ValueProfile";
  import ModuleEditorComp from "~/molle/_tbd/ModuleEditorComp.vue";
  import {ModuleEContainer} from "~/molle/_tbd/ModuleEContainer";
  // import {InitialValue} from "~/molle/editer/module/index";
  // import AddModule from "~/molle/editer/ui/AddModule.vue";

  @Component({
    components: {StyleComp}
  })
  export default class LinkBoxE extends ModuleEContainer {
    itemOption = [
    ];
    //value setting
    valueProfile: ValueProfile = new ValueProfile({
      types: [ValueType.children]
    });

    //style setting
    styleProfile: StyleProfile = new StyleProfile({
      border: false,
      // theme: {default: "", select: ["", "test"]},
      // color: {default: "", select: ["", "dark"]},
    });

    created() {
      // this.init(InitialValue.Box);
    }

  }
</script>

<style lang="scss">
</style>
