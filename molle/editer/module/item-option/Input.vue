<template lang="pug">
  .item-option-input
    label
      span.mr-1 {{profile.label}}:
      input.form-control.form-control-sm(type="text" :value="option[profile.id]" @change="update($event.target.value)")

</template>

<script lang="ts">
  import {Component, Prop, Vue} from "~/node_modules/nuxt-property-decorator";

  @Component({
    components: {}
  })
  /**
   */
  export default class ItemOptionInput extends Vue {
    @Prop() profile?: ItemOptionInputProfile;
    @Prop() option?: any;

    update(v: string) {
      let update: any = Object.assign({}, this.option);
      update[this.profile!.id] = v;
      this.$emit("update", update);
    }
  }

  export class ItemOptionInputProfile {
    name: string = "ItemOptionInput";

    id: string;
    label: string;
    value: string = "";

    constructor(opt: {
      id: string,
      label: string
    }) {
      this.id = opt.id;
      this.label = opt.label;
    }
  }
</script>

<style lang="scss">
</style>
