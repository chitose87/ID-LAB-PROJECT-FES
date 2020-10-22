<template lang="pug">
  .item-list-view-comp.bootstrap
    .list-group
      ItemListItemComp(:itemId="itemId",:dic="dic")

</template>

<script lang="ts">
  import {Component, Vue, Watch, Prop} from "~/node_modules/nuxt-property-decorator";
  import {FirestoreMgr} from "~/molle/editer/FirestoreMgr";
  import {IItemStoreData} from "~/molle/interface/ItemProfile";
  import {ValueType} from "~/molle/interface/ValueProfile";
  import ItemListItemComp from "~/molle/ui/ItemListItemComp.vue";
  import {fsStore, lsStore} from "~/utils/store-accessor";
  import {molleModules} from "~/molle/editer/module";

  @Component({
    components: {ItemListItemComp}
  })
  export default class ItemListViewComp extends Vue {
    @Prop() itemId?: string;
    dic: any = {};

    created() {
      this.getItem(this.itemId!);
    }

    private getItem(itemId: string) {
      FirestoreMgr.itemsRef.doc(itemId).onSnapshot((snap: firebase.firestore.DocumentSnapshot) => {
        if (!snap.exists) {
          return;
        }
        let itemData = <IItemStoreData>snap.data();
        itemData.id = snap.id;
        fsStore.updateItem({id: snap.id, itemData: itemData});

        //@ts-ignore
        switch (molleModules[itemData.moduleId]!.def.type) {
          case ValueType.children.val:
          case ValueType.group.val:
          case ValueType.items.val:
            for (let key in itemData.value) {
              let id: string = itemData.value[key];
              if (fsStore.items[id]) {
                //もうある
              } else {
                //まだない
                this.getItem(id);
              }
            }
            break;
          default:
            break;
        }
      });
    }

    mounted() {
    }

  }
</script>

<style lang="scss">
  .item-list-view-comp.bootstrap {
    background-color: $color-gray-100;
    min-width: 300px;
    height: 100vh;
    overflow: auto;

    position: sticky;
    top: 0;
  }
</style>
