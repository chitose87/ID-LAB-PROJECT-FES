<template lang="pug">
  .item-option-space
    label
      SpaceFormComp(
        :label="profile.label"
        :value="option[profile.id]"
        :negative="profile.negative"
        @update="v=>update(v)"
      )

</template>

<script lang="ts">
  import {Component, Prop, Vue} from "~/node_modules/nuxt-property-decorator";
  import SpaceFormComp from "~/molle/editer/ui/SpaceFormComp.vue";

  @Component({
    components: {SpaceFormComp}
  })
  /**
   */
  export default class ItemOptionSpace extends Vue {
    @Prop() profile?: ItemOptionSpaceProfile;
    @Prop() option?: any;

    update(v: string) {
      let update: any = Object.assign({}, this.option);
      update[this.profile!.id] = v;
      this.$emit("update", update);
    }
  }

  export class ItemOptionSpaceProfile {
    name: string = "ItemOptionSpace";

    id: string;
    label: string;
    value: string = "";
    negative: boolean;

    constructor(opt: {
      id: string,
      label: string,
      negative: boolean
    }) {
      this.id = opt.id;
      this.label = opt.label;
      this.negative = !(opt.negative === false);
    }
  }
</script>

<style lang="scss">
</style>
