<template lang="pug">
  div
    p BoxProfile

</template>

<script lang="ts">
  import {Component, Prop, Vue, Watch} from "~/node_modules/nuxt-property-decorator";
  import StyleComp from "~/molle/editer/ui/StyleComp.vue";
  import {StyleProfile} from "~/molle/interface/StyleProfile";
  import {ValueProfile, ValueType} from "~/molle/interface/ValueProfile";
  import ModuleEditorComp from "~/molle/editer/ui/ModuleEditorComp.vue";
  import AddModule from "~/molle/editer/ui/AddModule.vue";
  import {ItemOptionSelectProfile} from "~/molle/editer/module/item-option/Select.vue";

  @Component({
    components: {AddModule, ModuleEditorComp, StyleComp}
  })
  export default class BoxProfile extends Vue {
    itemOption = [
      // new ItemOptionAddModuleProfile({
      //   added: this.onAddModule
      // })
      new ItemOptionSelectProfile({
        id: "tag",
        label: "タグ",
        select: ["", "section"]
      })
    ];
    //value setting
    valueProfile: ValueProfile = new ValueProfile({
      types: [ValueType.children]
    });

    //style setting
    styleProfile: StyleProfile = new StyleProfile({
      container: false,
      border: false,
      margin: "",
      padding: "",
      // theme: {default: "", select: ["", "test"]},
      // color: {default: "", select: ["", "dark"]},
    });
  }
</script>

<style lang="scss">
  .e {
  }

</style>
