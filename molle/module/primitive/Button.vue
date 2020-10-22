<template lang="pug">
  .module-e(
    v-if="itemData.moduleId"
    :class="{editing:isEditing()}"
  )
    ModuleEditorComp(
      :itemData="itemData"
      :valueProfile="valueProfile"
      :styleProfile="styleProfile")

    a.btn(
      :href="itemData.value.href"
      :target="itemData.value.target"
    )
      span(v-html="itemData.value.label")

</template>

<script lang="ts">
  import {Component} from "~/node_modules/nuxt-property-decorator";
  import StyleComp from "~/molle/ui/property/StyleComp.vue";
  import {StyleAlign, StyleProfile} from "~/molle/_tba/StyleProfile";
  import {ValueProfile, ValueType} from "~/molle/_tbd/ValueProfile";
  import {ModuleE} from "~/molle/_tbd/ModuleE";
  import ModuleEditorComp from "~/molle/_tbd/ModuleEditorComp.vue";
  // import {InitialValue} from "~/molle/editer/module/index";

  @Component({
    components: {ModuleEditorComp, StyleComp}
  })
  export default class ButtonE extends ModuleE {
    //value setting
    valueProfile: ValueProfile = new ValueProfile({
      types: [ValueType.link]
    });

    //style setting
    styleProfile: StyleProfile = new StyleProfile({
      border: false,
      // align: StyleAlign.None,
      // theme: {default: "", select: ["", "test"]},
      // color: {default: "", select: ["", "dark"]},
    });

    // created() {
      // this.init(InitialValue.Button);
    // }

    //Unique Methods
  }
</script>

<style lang="scss">
</style>
