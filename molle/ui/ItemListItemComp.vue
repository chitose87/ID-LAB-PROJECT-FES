<template lang="pug">
  .item-list-item-comp.list-group-item.list-group-item-action.pr-0.border-right-0(v-if="getItem()")

    .d-flex.justify-content-between
      button.btn.btn-sm.btn-outline-secondary(
        :class="{active:lsStore.storage.focusModuleId===itemId}"
        :title="itemId"
        @click="lsStore.update({key: 'focusModuleId',value:itemId})"
      )
        b(v-html="itemData.moduleId")

      //削除
        v-if="!$parent.notDeleted"
      button.btn.btn-sm.btn-danger.mr-2(
        v-if="lsStore.storage.focusModuleId===itemId"
        @click="deleteModule()"
      ) x

    .list-group.mt-3(v-if="itemData.type === 'children'")
      ItemListItemComp(
        v-for="id in itemData.value"
        :key="id"
        :itemId="id"
        :dic="dic"
      )
      .list-group-item.pr-0.border-right-0
        form.form-group.d-flex.justify-content-between.mb-0.mr-2(@submit.prevent @submit="pushModule()")
          select.form-control.form-control-sm(v-model="pushModuleSelected")
            option(v-for="(item,key) in molleModules" :value="key" v-html="key")
          button.btn.btn-sm.btn-info(type="submit") +

    .list-group.mt-3(v-if="itemData.type === 'group'")
      ItemListItemComp(
        v-for="id in itemData.value"
        :key="id"
        :itemId="id"
        :dic="dic"
      )
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

    deleteModule() {
      let parent = <ItemListItemComp>this.$parent;

      FirestoreMgr.itemUpdate(parent.itemId!, {
        value: parent.itemData!.value.filter((via: string) => via != this.itemId)
      });
    }
  }
</script>

<style lang="scss">
  .item-list-item-comp {

  }
</style>
