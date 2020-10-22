<template lang="pug">
  .module.picture(
    v-if="itemData"
    :id="itemData.tagId"
    :class="getClass(itemData)"
    :style="getStyle(itemData)"
    :data-item-id="itemData.id"
  )
    picture
      source(v-if="getValue('sp')"
        media="(max-width:" + (process.env.breakPoint - 1) + "px)"
        :srcset="getValue('sp')"
        :alt="getValue('alt')")
      img(
        :src="getValue('src')" :alt="getValue('alt')"
        :class="getClass(itemData)"
        @load="loaded"
      )

</template>

<script lang="ts">
  import {Component} from "~/node_modules/nuxt-property-decorator";
  import {Module} from "~/molle/module/Module";

  @Component({
    components: {}
  })
  export default class Picture extends Module {
    //Unique Methods
    getValue(key: string) {
      return (this.itemData.value || {})[key]
        || (this.itemData.superValue || {})[key];
    }

    loaded() {
      this.sizeCheck(this.getValue("src"));
    }

    private sizeCheck(value?: string) {
      try {

      } catch (e) {

      }
    }
  }
</script>

<style lang="scss">
</style>
