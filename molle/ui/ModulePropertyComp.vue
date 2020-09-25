<template lang="pug">
  .module-property-comp.bootstrap
    p(v-html="getFocusModuleId()")
    div(v-if="itemData")
      button.btn.module-editor__notExport(
        v-if="!$parent.required"
        @click="update2('notExport',!itemData.notExport)"
      )
        b-icon(icon="eye-slash-fill" v-if="itemData.notExport")
        b-icon(icon="eye-fill" v-else)
      //名前
      label.mr-2
        .u_auto-input
          span.u_auto-input__static.form-control.form-control-sm(v-html="itemData.name || 'name'")
          input.u_auto-input__input.form-control.form-control-sm(type="text" v-model="itemData.name" @change="update2('name')" placeholder="Name")

      //ID
      label.mr-2 id
        .u_auto-input
          span.u_auto-input__static.form-control.form-control-sm(v-html="itemData.tagId || 'id'")
          input.u_auto-input__input.form-control.form-control-sm(type="text" v-model="itemData.tagId" @change="update2('tagId')" placeholder="id")

      //クラス
      label.mr-2 class
        .u_auto-input
          span.u_auto-input__static.form-control.form-control-sm(v-html="itemData.tagClass || 'class'")
          input.u_auto-input__input.form-control.form-control-sm(type="text" v-model="itemData.tagClass" @change="update2('tagClass')" placeholder="class")

      //profile
      component(
        v-if="molleModules[itemData.moduleId].profile"
        :is="molleModules[itemData.moduleId].profile.options.name"
      )
</template>

<script lang="ts">
  import {Component, Vue, Watch, Prop} from "~/node_modules/nuxt-property-decorator";
  import {lsStore} from "~/utils/store-accessor";
  import {FirestoreMgr} from "~/molle/editer/FirestoreMgr";
  import {IItemStoreData} from "~/molle/interface/ItemProfile";
  import {molleModules} from "~/molle/editer/module";

  @Component({
    components: {}
  })
  export default class ModulePropertyComp extends Vue {

    focusModuleId: string = "none";
    itemData: IItemStoreData | null = null;
    molleModules = molleModules;

    getFocusModuleId() {
      if (this.focusModuleId != lsStore.storage.focusModuleId) {
        this.focusModuleId = lsStore.storage.focusModuleId || "none";
        this.itemData = null;

        FirestoreMgr.itemsRef.doc(this.focusModuleId).get()
          .then((snap: firebase.firestore.DocumentSnapshot) => {
            if (!snap.exists) {
              return;
            }
            this.itemData = <IItemStoreData>snap.data();
            this.itemData.id = snap.id;
          })
      }
      return this.focusModuleId;
    }

    mounted() {
    }

    update2(key: string, forceValue?: any) {
      let update: any = {};
      if (forceValue || forceValue === false) {
        update[key] = forceValue;
      } else {
        //@ts-ignore
        update[key] = this.itemData[key];
      }
      FirestoreMgr.itemUpdate(this.itemData!.id, update);
    }
  }
</script>

<style lang="scss">
  .module-property-comp {
    background-color: $color-gray-100;

    width: 200px;
  }
</style>
