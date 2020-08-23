<template lang="pug">
  header.global-header
    .global-header__body.container
      .global-header__logo
        img(src="/imgs/logo.svg" alt="logo")
      .global-header__menu
        a.global-header__menu__item(href="#")
          span About us
        a.global-header__menu__item(href="#")
          span Projects new report
        a.global-header__menu__item(href="#")
          span Project
        a.global-header__menu__item(href="#")
          span Sponsor
        a.global-header__menu__item(href="#")
          span Entry

</template>

<script lang="ts">
  import {Component, Vue} from "~/node_modules/nuxt-property-decorator";

  @Component({})
  export default class GlobalHeader extends Vue {
  }
</script>

<style lang="scss">
  .global-header {
    position: fixed;
    left: 0;
    width: 100%;
    z-index: 2;

    &__body {
      display: flex;
      margin-top: 1.25rem;
      margin-bottom: 1.25rem;
      align-items: center;
      justify-content: start;
    }

    &__logo {
      margin-left: 3%;
      margin-right: 11%;

      img {
        height: auto;
        width: 100px;
      }
    }

    //menu
    &__menu {
      display: flex;

      &__item {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        padding-left: 1rem;
        padding-right: 1rem;
        position: relative;
        z-index: 1;
        text-align: center;
        margin: 1rem;

        &:after {
          content: "";
          display: block;
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          transform: skew(-20deg);
          z-index: -1;
          background-color: #B48362;
        }

        span {

        }
      }
    }
  }

</style>
