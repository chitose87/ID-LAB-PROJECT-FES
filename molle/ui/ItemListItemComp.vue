<template lang="pug">
  .item-list-item-comp.list-group-item.list-group-item-action.pr-0.border-right-0(v-if="getItem()")

    button.btn.btn-sm.btn-outline-secondary(
      :class="{active:lsStore.storage.focusModuleId===itemId}"
      :title="itemId"
      @click="lsStore.update({key: 'focusModuleId',value:itemId})"
    )
      b(v-html="itemData.moduleId")
    div(v-if="itemData.type === 'children'")
      .list-group.mt-3
        ItemListItemComp(
          v-for="id in itemData.value"
          :key="id"
          :itemId="id"
          :dic="dic"
        )
        .list-group-item
          form.form-group.mb-0(@submit.prevent @submit="pushModule()")
            select.form-control.form-control-sm(v-model="pushModuleSelected")
              option(v-for="(item,key) in molleModules" :value="key" v-html="key")
            button.btn.btn-sm.btn-block.btn-info(type="submit") +
    //div(v-else="")
      p.mb-0(v-html="dic[itemId].value")

</template>

<script lang="ts">
  import {Component, Vue, Watch, Prop} from "~/node_modules/nuxt-property-decorator";
  import {fsStore, lsStore} from "~/utils/store-accessor";
  import {IItemStoreData} from "~/molle/interface/ItemProfile";
  import {InitialValue, molleModules} from "~/molle/editer/module";
  import {FirestoreMgr} from "~/molle/editer/FirestoreMgr";
  import * as firebase from "~/node_modules/firebase";

  @Component({
    components: {}
  })
  export default class ItemListItemComp extends Vue {
    @Prop() itemId?: string;
    @Prop() dic?: any;
    itemData?: IItemStoreData;
    lsStore = lsStore;
    pushModuleSelected = InitialValue.Paragraph.moduleId;
    molleModules = molleModules;

    getItem() {
      this.itemData = fsStore.items[this.itemId!];
      return this.itemData;
    }

    mounted() {
    }

    pushModule() {
      // @ts-ignore
      let data: IItemStoreData = InitialValue[this.pushModuleSelected]
        || InitialValue.Group(this.pushModuleSelected);

      let id = FirestoreMgr.itemsRef.doc().id;

      let batch = firebase.firestore().batch();
      batch.set(FirestoreMgr.itemsRef.doc(id), data);
      batch.update(FirestoreMgr.itemsRef.doc(this.itemId), {value: [...this.itemData!.value, id]});
      batch.commit();

      lsStore.update({key: "focusModuleId", value: id});
    }
  }
</script>

<style lang="scss">
  .item-list-item-comp {

  }
</style>
