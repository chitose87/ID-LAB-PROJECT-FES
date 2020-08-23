<template lang="pug">
  div
    GlobalHeader
    main
      nuxt
    GlobalFooter
</template>

<style lang="scss">
</style>
<script>
  import {Component, Vue} from "~/node_modules/nuxt-property-decorator";
  import GlobalHeader from "../components/GlobalHeader";
  import GlobalFooter from "../components/GlobalFooter";

  @Component({
    components: {GlobalFooter, GlobalHeader}
  })
  export default class StaticLayout extends Vue {
  }
</script>
