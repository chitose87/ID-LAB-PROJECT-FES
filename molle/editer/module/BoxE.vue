<template lang="pug">
  .module-e(
    v-if="itemData.moduleId"
    :class="{editing:isEditing()}"
  )
    ModuleEditorComp.module-editor--box(
      :itemOption="itemOption"
      :itemData="itemData"
      :valueProfile="valueProfile"
      :styleProfile="styleProfile"
    )

    //.box(
    component(
      :is="itemData.option.tag || 'div'"
      :id="itemData.tagId"
      :class="getClass(itemData)"
      :style="getStyle(itemData)"
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
  import StyleComp from "~/molle/editer/ui/StyleComp.vue";
  import {StyleProfile} from "~/molle/interface/StyleProfile";
  import {ValueProfile, ValueType} from "~/molle/interface/ValueProfile";
  import ModuleEditorComp from "~/molle/editer/ui/ModuleEditorComp.vue";
  import {ModuleEContainer} from "~/molle/editer/module/ModuleEContainer";
  import {InitialValue} from "~/molle/editer/module/index";
  import AddModule from "~/molle/editer/ui/AddModule.vue";
  import {ItemOptionSelectProfile} from "~/molle/editer/module/item-option/Select.vue";

  @Component({
    components: {AddModule, ModuleEditorComp, StyleComp}
  })
  export default class BoxE extends ModuleEContainer {
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

    created() {
      // console.log("created", this.itemId!.id);
      this.init(InitialValue.Box);
    }
  }
</script>

<style lang="scss">
  .e {
  }

</style>
