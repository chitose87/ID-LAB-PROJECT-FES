<template lang="pug">
  .module-tree-comp.bootstrap
    .list-group
      ModuleTreeItemComp.pr-3(
        v-for="item in tree"
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
    tree: Vue[] = [];

    mounted() {
      this.test();
    }

    @Watch("$parent.$children")
    test() {
      console.log(this.$parent.$children)
      this.tree.length = 0;
      for (let child of this.$parent.$children) {
        if (child.$data && child.$data.itemData) {
          this.tree.push(child);
        }
      }
    }

    // getTree() {
    //   let tree = [];
    //   for (let child of this.$parent.$children) {
    //     if (child.$data && child.$data.itemData) {
    //       tree.push(child);
    //     }
    //   }
    //   return tree;
    // }
  }
</script>

<style lang="scss">
  .module-tree-comp {
    background-color: $color-gray-100;
    width: 200px;

    /*position: fixed;*/
    /*top: 0;*/
    /*left: 0;*/

    //z-index: $zindex-fixed;
  }
</style>
