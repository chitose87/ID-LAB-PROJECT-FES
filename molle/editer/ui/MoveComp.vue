<template lang="pug">
  .move-comp
    button.btn.btn-sm.btn-info(
      :id="`move-comp`+itemData.id"
    ) Move

    b-popover(
      :target="`move-comp`+itemData.id"
      title="移動先のModule ID"
      triggers="focus"
      placement="bottom"
      container="bootstrap-container")

      input.form-control.form-control-sm(
        type="text"
        v-model="toId"
        :list="`move-comp--datalist`+itemData.id"
        @focus="hoge()"
      )
      datalist(:id="`move-comp--datalist`+itemData.id")
        //option()

      button.btn.btn-primary.btn-sm(type="submit" @click="submit()") 移動

</template>

<script lang="ts">
  import {Component, Prop, Vue} from "~/node_modules/nuxt-property-decorator";
  import {IItemStoreData} from "~/molle/interface/ItemProfile";
  import {ModuleEContainer} from "~/molle/editer/module/ModuleEContainer";

  @Component({
    components: {}
  })
  /**
   */
  export default class MoveComp extends Vue {
    @Prop() itemData?: IItemStoreData;

    toId: string = "";

    hoge(){
      console.log("MoveComp")
      console.log(this.itemData!.id, this.itemData!.type);
      this.hogeA(this);
    }

    private hogeA(target: any) {
      let parent = target.$parent;
      console.log(parent instanceof ModuleEContainer);
      if(parent instanceof ModuleEContainer){
        console.log(parent)
      }

      if (parent) {
        this.hogeA(parent);
      } else {

      }
    }

    submit() {

    }

  }
</script>

<style lang="scss">
</style>
