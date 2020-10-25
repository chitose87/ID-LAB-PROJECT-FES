<template lang="pug">
  .module-property-comp.bootstrap
    p(v-html="getFocusModuleId()")
    div(v-if="itemData")
      p(v-html="itemData.moduleId")
      button.btn.module-editor__notExport(
        v-if="!$parent.required"
        @click="update('notExport',!itemData.notExport)"
      )
        b-icon(icon="eye-slash-fill" v-if="itemData.notExport")
        b-icon(icon="eye-fill" v-else)
      //名前
      label.mr-2
        .u_auto-input
          span.u_auto-input__static.form-control.form-control-sm(v-html="itemData.name || 'name'")
          input.u_auto-input__input.form-control.form-control-sm(
            type="text"
            v-model="itemData.name"
            @change="update('name')"
            placeholder="Name")

      //ID
      label.mr-2 id
        .u_auto-input
          span.u_auto-input__static.form-control.form-control-sm(v-html="itemData.tagId || 'id'")
          input.u_auto-input__input.form-control.form-control-sm(
            type="text"
            v-model="itemData.tagId"
            @change="update('tagId')"
            placeholder="id")

      //クラス
      label.mr-2 class
        .u_auto-input
          span.u_auto-input__static.form-control.form-control-sm(v-html="itemData.tagClass || 'class'")
          input.u_auto-input__input.form-control.form-control-sm(
            type="text"
            v-model="itemData.tagClass"
            @change="update('tagClass')"
            placeholder="class")

      //profile
      component(
        v-if="molleModules[itemData.moduleId].profile"
        :is="molleModules[itemData.moduleId].profile.options.name"
        :itemData="itemData"
        :onUpdate="update"
      )
</template>

<script lang="ts">
  import {Component, Vue, Watch, Prop} from "~/node_modules/nuxt-property-decorator";
  import {fsStore, lsStore} from "~/utils/store-accessor";
  import {FirestoreMgr} from "~/molle/FirestoreMgr";
  import {IItemStoreData} from "~/molle/interface/ItemProfile";
  import {molleModules} from "~/molle/module";

  @Component({
    components: {}
  })
  export default class ModulePropertyComp extends Vue {

    // focusModuleId: string = "none";
    itemData: IItemStoreData | null = null;
    molleModules = molleModules;

    getFocusModuleId() {
      this.itemData = fsStore.items[lsStore.storage.focusModuleId];
      return lsStore.storage.focusModuleId;
    }

    mounted() {
    }

    update(key: string, forceValue?: any) {
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

    min-width: 200px;
    max-width: 200px;
    height: 100vh;
    overflow: auto;

    position: sticky;
    top: 0;
  }
</style>
