<template lang="pug">
  div
    ItemOptionSelect(
      :label="'タグ'",
      :select='["", "section"]'
      :data="itemData.option || {}"
      :dataKey="'tag'"
      @change="(v)=>onUpdate('option',v)"
    )
    StyleComp(
      :itemData="itemData"
      :onUpdate="onUpdate"
      :permission="stylePermission"
    )

</template>

<script lang="ts">
  import {Component, Prop, Vue, Watch} from "~/node_modules/nuxt-property-decorator";
  import ItemOptionSelect from "./item-option/Select.vue";
  import {IItemStoreData} from "~/molle/interface/ItemProfile";
  import StyleComp from "~/molle/editer/ui/StyleComp.vue";

  @Component({
    components: {StyleComp, ItemOptionSelect}
  })
  export default class BoxProfile extends Vue {
    @Prop() itemData?: IItemStoreData;
    @Prop() onUpdate?: (key: string, forceValue?: any) => void;

    //style setting
    stylePermission = {
      container: false,
      border: false,
      margin: "",
      padding: "",
      // theme: {default: "", select: ["", "test"]},
      // color: {default: "", select: ["", "dark"]},
    };
  }
</script>

<style lang="scss">
  .e {
  }

</style>
