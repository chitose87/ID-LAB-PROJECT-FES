<template lang="pug">
  .module-tree-item-comp.list-group-item.list-group-item-action.pr-0.border-right-0(
    :focus="vueRef.$data.focus"
  )
    .d-flex.justify-content-between
      button.btn.btn-sm.btn-outline-secondary(
        @mouseover="focus(true)"
        @mouseleave="focus(false)"
        @click="lsStore.updateEditing({id:vueRef.$data.itemData.id})"
        :class="{active:lsStore.editing.indexOf(vueRef.$data.itemData.id) >= 0}"
      )
        div
          //span moduleId:
          b(v-html="vueRef.$data.itemData.moduleId")
        //div
          span id:
          b(v-html="vueRef.$props.itemData.id")

      button.btn.btn-sm.btn-outline-info(
        v-if="tree.length"
        @mouseover="focus(true)"
        @mouseleave="focus(false)"
        @click="updateEditingFamily(lsStore.editing.indexOf(vueRef.$data.itemData.id) == -1)"
      )
        span & Children

    .list-group.mt-3(v-if="tree.length")
      ModuleTreeItemComp(
        v-for="item in tree"
        :key="item.itemId"
        :vueRef="item"
      )

</template>

<script lang="ts">
  import {Component, Vue, Watch, Prop} from "~/node_modules/nuxt-property-decorator";
  import {ModuleEContainer} from "~/molle/editer/module/ModuleEContainer";
  import {ModuleE} from "~/molle/editer/module/ModuleE";
  import ModuleEditorComp from "~/molle/editer/ui/ModuleEditorComp.vue";
  import {lsStore} from "~/utils/store-accessor";

  @Component({
    components: {}
  })
  export default class ModuleTreeItemComp extends Vue {
    lsStore = lsStore;
    @Prop() vueRef?: ModuleE | ModuleEContainer;

    tree: Vue[] = [];

    // moduleEditor?: ModuleEditorComp;

    beforeMount() {
      this.update();
    }

    @Watch("vueRef")
    update() {
      let tree = [];
      for (let child of this.vueRef!.$children) {
        if (child instanceof ModuleE) {
          tree.push(child);
          // } else if (child instanceof ModuleEditorComp) {
          //   this.moduleEditor = child;
        }
      }
      this.$set(this, "tree", tree);
    }

    focus(flag: boolean) {
      this.vueRef!.outerFocus = flag;
    }

    updateEditingFamily(flag: boolean) {
      lsStore.updateEditing({id: this.vueRef!.$data.itemData.id, flag: flag});

      for (let child of this.$children) {
        //@ts-ignore
        child.updateEditingFamily && child.updateEditingFamily(flag);
      }
    }

    // getActive() {
    //   try {
    //     return this.moduleEditor!.$data.isEdit;
    //   } catch (e) {
    //     return false
    //   }
    // }
  }
</script>

<style lang="scss">
  .module-tree-item-comp {
    &[focus] {
      background-color: $color-gray-100;
    }
  }
</style>
