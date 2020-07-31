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
        RectFormComp(
          :label="'margin'"
          :value="data.style"
          @update="val=>update2('style',val)"
        )

    //padding
    span.mr-3(v-if="styleProfile.permission.padding")
      label
        span.mr-1 padding:
        RectFormComp(
          :label="'padding'"
          :value="data.style"
          @update="val=>update2('style',val)"
        )

        //input.form-control.form-control-sm(v-if="margin_select=='number'" v-model="margin_number" type="number" min="-5" max="5" step="0.25" @change="margin()")
        //select.form-control.form-control-sm(v-model="margin_select" @change="margin()")
          option(v-for="item in spaceItems" :value="item.value" v-html="item.label")

</template>

<script lang="ts">
  import {Component, Prop, Vue, Watch} from "~/node_modules/nuxt-property-decorator";
  import {StyleAlign, StyleProfile} from "~/molle/interface/StyleProfile";
  import {IItemStoreData} from "~/molle/interface/ItemProfile";
  import {FirestoreMgr} from "~/molle/editer/FirestoreMgr";
  import RectFormComp from "~/molle/editer/ui/RectFormComp.vue";

  @Component({
    components: {RectFormComp}
  })
  export default class StyleComp extends Vue {
    styleAlign = StyleAlign;

    @Prop() itemData?: IItemStoreData;
    @Prop() styleProfile?: StyleProfile;
    data = <IItemStoreData>{};

    created() {
      this.changeItemData();
    }

    @Watch("itemData")
    changeItemData() {
      this.$set(this, "data", this.itemData);
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

    updateRect(val: any) {
      console.log(val);
    }
  }
</script>

<style lang="scss">
  .style-comp {
  }
</style>
