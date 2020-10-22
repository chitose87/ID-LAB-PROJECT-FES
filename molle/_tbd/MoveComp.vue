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
        @focus="update()"
      )
      datalist(:id="`move-comp--datalist`+itemData.id")
        option(
          v-for="item in list"
          v-html="item.itemId"
        )

      button.btn.btn-primary.btn-sm(type="submit" @click="submit()") 移動

</template>

<script lang="ts">
  import {Component, Prop, Vue} from "~/node_modules/nuxt-property-decorator";
  import {IItemStoreData} from "~/molle/interface/ItemProfile";
  import {ModuleEContainer} from "~/molle/_tbd/ModuleEContainer";
  import EditView from "~/molle/ui/EditView.vue";
  import {ModuleE} from "~/molle/_tbd/ModuleE";
  import {FirestoreMgr} from "~/molle/FirestoreMgr";
  import {ValueType} from "~/molle/_tbd/ValueProfile";

  @Component({
    components: {}
  })
  /**
   */
  export default class MoveComp extends Vue {
    @Prop() itemData?: IItemStoreData;

    toId: string = "";
    list = <ModuleEContainer[]>[];
    selfModule?: ModuleE;
    parentContainer?: ModuleEContainer;

    update() {
      // console.log("MoveComp")
      // console.log(this.itemData!.id, this.itemData!.type);
      delete this.parentContainer;
      this.list.length = 0;

      this.upstream(this);
    }

    /**
     *
     * @param target
     */
    private upstream(target: any) {
      let parent = target.$parent;

      if (!this.selfModule && parent instanceof ModuleE) {
        this.selfModule = parent;
      } else if (!this.parentContainer && parent instanceof ModuleEContainer) {
        this.parentContainer = parent;
      }

      if (parent instanceof EditView) {
        this.downstream(parent);
      } else if (parent) {
        this.upstream(parent);
      }
    }

    /**
     *
     * @param target
     */
    private downstream(target: Vue) {
      for (let child of target.$children) {
        if (child instanceof ModuleEContainer) {
          if (child == this.selfModule) {
            continue;
          } else if (child != this.parentContainer) {
            this.list.push(child);
          }
        }
        this.downstream(child);
      }
    }

    submit() {
    //   FirestoreMgr.itemsRef.doc(this.toId).get()
    //     .then((snap: firebase.firestore.DocumentSnapshot) => {
    //       if (!snap.exists) {
    //         return;
    //       }
    //
    //       let data = <IItemStoreData>snap.data();
    //       if (data.type != ValueType.children.val) {
    //         return;
    //       }
    //       //copy
    //       let value = data.value || [];
    //       value.push(this.itemData!.id);
    //
    //       FirestoreMgr.itemUpdate(this.toId, {value: value});
    //
    //       //delete
    //       this.parentContainer!.deleteChild(this.itemData!.id)
    //     });
    }
  }
</script>

<style lang="scss">
</style>
