<template lang="pug">
  .style-comp.mr-n3.form-inline
    span.mr-3(v-if="styleProfile.permission.theme")
      label
        span.mr-1 Theme:
        select.form-control.form-control-sm(v-model="data.class.theme" @change="update2('class')")
          option(v-for="theme in styleProfile.themeCollection" :val="theme" v-html="theme")

    span.mr-3(v-if="styleProfile.permission.color")
      label
        span.mr-1 Color:
        select.form-control.form-control-sm(v-model="data.class.color" @change="update2('class')")
          option(v-for="color in styleProfile.colorCollection" :val="color" v-html="color")

    //container
    span.mr-3(v-if="styleProfile.permission.container")
      label
        span.mr-1 container:
        input.form-control.form-control-sm(v-model="data.class.container" type="checkbox" @change="update2('class')")

    //Border
    span.mr-3(v-if="styleProfile.permission.border")
      label
        span.mr-1 枠線:
        input.form-control.form-control-sm(v-model="data.class.border" type="checkbox" @change="update2('class')")

    //TextHorizontal
    span.mr-3(v-if="styleProfile.permission.align")
      label
        span.mr-1 行揃え:
        select.form-control.form-control-sm(v-model="data.class.align" @change="update2('class')")
          option(v-for="item in styleAlign" :value="item.value" v-html="item.label")

    //span.mr-3
      label Free Area
        textarea(v-model="data.css")

    //margin
    span.mr-3(v-if="styleProfile.permission.margin")
      label
        span.mr-1 margin:
        input.form-control.form-control-sm(v-if="margin_select=='number'" v-model="margin_number" type="number" min="-5" max="5" step="0.25" @change="margin()")
        select.form-control.form-control-sm(v-model="margin_select" @change="margin()")
          option(v-for="item in spaceItems" :value="item.value" v-html="item.label")

</template>

<script lang="ts">
  import {Component, Prop, Vue, Watch} from "~/node_modules/nuxt-property-decorator";
  import {StyleAlign, StyleProfile} from "~/molle/interface/StyleProfile";
  import {IItemStoreData} from "~/molle/interface/ItemProfile";
  import {FirestoreMgr} from "~/molle/editer/FirestoreMgr";

  @Component({
    components: {}
  })
  export default class StyleComp extends Vue {
    styleAlign = StyleAlign;
    margin_number = 1;
    margin_select = "";
    spaceItems = (() => {
      let v = [
        {value: "", label: "none"},
        {value: "0gutter", label: "0"},
        {value: "auto", label: "auto"},
        {value: "1gutter", label: "gutter"},
        {value: "0.25gutter", label: "gutter*0.25"},
        {value: "0.5gutter", label: "gutter*0.5"},
        {value: "0.75gutter", label: "gutter*0.75"},
        {value: "number", label: "rem"}
      ];
      return v;
    })();

    @Prop() itemData?: IItemStoreData;
    @Prop() styleProfile?: StyleProfile;
    data = <IItemStoreData>{};

    created() {
      this.changeItemData();
    }

    @Watch("itemData")
    changeItemData() {
      this.$set(this, "data", this.itemData);

      let flag = false;
      for (let item of this.spaceItems) {
        if (this.data.style.margin == item.value) {
          this.margin_select = this.data.style.margin;
          this.margin_number = 1;
          flag = true;
          break;
        }
      }
      if (!flag) {
        this.margin_select = "number";
        this.margin_number = this.data.style.margin;
      }
    }

    update2(key: string, forceValue?: any) {
      let update: any = {};
      if (forceValue || forceValue === false) {
        update[key] = forceValue;
      } else {
        //@ts-ignore
        update[key] = this.data[key];
      }
      FirestoreMgr.itemUpdate(this.itemData!.id, update);
    }

    margin() {
      if (this.margin_select == "number") {
        this.data.style.margin = this.margin_number;
      } else {
        this.data.style.margin = this.margin_select;
      }
      this.update2("style");
    }
  }
</script>

<style lang="scss">
  .style-comp {
  }
</style>
