<template lang="pug">
  .module-tree-comp.bootstrap
    button(@click="toggle=!toggle") 構造／Structure
    b-sidebar(v-model="toggle" title="構造／Structure")
      .list-group(v-if="toggle")
        ModuleTreeItemComp.pr-3(
          v-for="item in getTree()"
          :key="item.itemId"
          :vueRef="item"
        )

</template>

<script lang="ts">
  import {Component, Vue, Watch, Prop} from "~/node_modules/nuxt-property-decorator";
  import ModuleTreeItemComp from "~/molle/ui/ModuleTreeItemComp.vue";

  @Component({
    components: {ModuleTreeItemComp}
  })
  export default class ModuleTreeComp extends Vue {
    toggle: boolean = false;

    mounted() {
    }

    getTree() {
      let tree = [];
      for (let child of this.$parent.$children) {
        if (child.$data && child.$data.itemData) {
          tree.push(child);
        }
      }
      return tree;
    }
  }
</script>

<style lang="scss">
  .module-tree-comp {
    position: fixed;
    top: 0;
    left: 0;

    //z-index: $zindex-fixed;
  }
</style>
