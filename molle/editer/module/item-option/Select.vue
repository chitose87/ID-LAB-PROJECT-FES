<template lang="pug">
  .item-option-select
    label
      span.mr-1 {{profile.label}}:
      select.form-control.form-control-sm(:value="option[profile.id]" @change="update($event.target.value)")
        option(v-for="item in profile.select" :value="item" v-html="item")

</template>

<script lang="ts">
  import {Component, Prop, Vue} from "~/node_modules/nuxt-property-decorator";

  @Component({
    components: {}
  })
  /**
   */
  export default class ItemOptionSelect extends Vue {
    @Prop() profile?: ItemOptionSelectProfile;
    @Prop() option?: any;

    update(v: string) {
      let update: any = Object.assign({}, this.option);
      update[this.profile!.id] = v;
      this.$emit("update", update);
    }
  }

  export class ItemOptionSelectProfile {
    name: string = "ItemOptionSelect";

    id: string;
    label: string;
    // default: string;
    select: string[];

    constructor(opt: {
      id: string,
      label: string,
      // default: string,
      select: string[]
    }) {
      this.id = opt.id;
      this.label = opt.label;
      // this.default = opt.default;
      this.select = opt.select;
    }
  }
</script>

<style lang="scss">
</style>
