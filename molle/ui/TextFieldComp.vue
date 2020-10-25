<template lang="pug">
  div(v-if="getFocusModuleId()")
    textarea(
      v-model="value"
      v-on:input="onInput"
      v-on:change="onChange"
      :style="cloneStyle"
      ref="textarea"
    )
    style.
      [data-item-id="{{itemData.id}}"] br:last-child {
        display: block;
        height: 2em;
        content: "";
      }
</template>

<script lang="ts">
  import {Component, Vue, Watch, Prop} from "~/node_modules/nuxt-property-decorator";
  import {fsStore, lsStore} from "~/utils/store-accessor";
  import {IItemStoreData} from "~/molle/interface/ItemProfile";
  import {molleModules} from "~/molle/module";
  import {FirestoreMgr} from "~/molle/FirestoreMgr";

  @Component({
    components: {}
  })
  export default class TextFieldComp extends Vue {
    itemData: IItemStoreData | null = null;

    value = "";
    targetElement: any;
    cloneStyle: any = {};

    getFocusModuleId() {
      let _itemData = fsStore.items[lsStore.storage.focusModuleId];
      if (_itemData) {
        if (molleModules[_itemData.moduleId].def.type == "text") {
          this.targetElement = document.querySelector(`[data-item-id="${_itemData.id}"]`);
          if (this.targetElement) {
            // Style copy
            let style = this.targetElement.currentStyle || document.defaultView!.getComputedStyle(this.targetElement, '');
            for (let i = 0; i < style.length; i++) {
              let str = style[i];
              if (!/margin/.test(str)) {
                this.cloneStyle[str] = style[str];
              }
            }
            this.cloneStyle.position = "absolute";
            this.cloneStyle.overflow = "hidden";
            this.cloneStyle.top = this.targetElement.offsetTop + "px";
            this.cloneStyle.left = this.targetElement.offsetLeft + "px";
            this.cloneStyle.color = "#000000";
            this.cloneStyle["background-color"] = "#ffffff";
            this.cloneStyle["min-height"] = this.cloneStyle["line-height"];
            this.cloneStyle.height = this.targetElement.clientHeight + "px";

            this.$refs.textarea && (<HTMLFormElement>this.$refs.textarea).focus();
          }

          if (this.itemData && _itemData.id == this.itemData!.id) {
            return true;
          }
          this.value = _itemData.value.replace(/<br>/g, '\n');
          this.itemData = _itemData;
          return true;
        }
      }
      return false;
    }

    onInput() {
      fsStore.updateItemValue({id: this.itemData!.id, value: this.value.replace(/\n/g, '<br>')});
      requestAnimationFrame(() => {
        this.cloneStyle.height = this.targetElement.clientHeight + "px";
      })
    }

    onChange() {
      FirestoreMgr.itemUpdate(this.itemData!.id, {value: this.value.replace(/\n/g, '<br>')});
    }
  }
</script>

<style lang="scss">
</style>
