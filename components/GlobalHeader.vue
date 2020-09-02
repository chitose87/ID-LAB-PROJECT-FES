<template lang="pug">
  header.global-header
    .global-header__body
      .global-header__logo
        img(src="/imgs/head-logo.svg" alt="logo")
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
    z-index: 3;
    background: #FCF8F3;
    opacity: 0.84;

    &__body {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 50px;
    }

    &__logo {
      margin-left: 2rem;

      img {
        height: auto;
        width: 100px;
      }
    }

    &__menu {
      display: flex;
      justify-content: start;
      margin-right: 2rem;

      &__item {
        text-decoration: none;
        align-items: center;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        padding-left: 1rem;
        padding-right: 1rem;
        position: relative;
        z-index: 1;
        text-align: center;
        margin: 1rem;
        display: inline-block;
        color: #867C84;
        &:before {
          content: "";
          display: block;
          position: absolute;
          height: 100%;
          width: 100%;
          z-index: -2;
          top: 0;
          left: 0;
          transform: skew(-20deg)
        }
        &:hover {
          color: #FCF8F3;
          &:before {
            background: #867C84;
          }
        }
        span {
          font-size: 1vw;

        }
      }
    }
  }

</style>
