<template lang="pug">
  header.global-header
    .global-header__body
      a.global-header__logo(href="/")
        img(src="/imgs/logo.svg" alt="logo")
      .global-header__menu
        a.global-header__menu__item(href="/about")
          span About us
        a.global-header__menu__item(href="https://note.com/project_fes/n/nb589092126eb" target="_entry")
          span Entry
        .global-header__menu__item.disabled
          span Projects
        .global-header__menu__item.disabled
          span Sponsor

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

    @include mediaquery-sm {
      display: none;
    }

    &__body {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 50px;
    }

    &__logo {
      height: 100%;
      margin-left: 1.5rem;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;

      img {
        height: 100%;
        width: auto;
      }
    }

    &__menu {
      display: flex;
      justify-content: start;
      margin-right: 1.5rem;

      &__item {
        text-decoration: none;
        align-items: center;
        padding: 0.5rem 1rem;
        position: relative;
        z-index: 1;
        display: inline-block;
        color: #867C84;
        margin-bottom: 0;
        margin-left: 1rem;

        &:before {
          content: "";
          display: block;
          position: absolute;
          height: 100%;
          width: 100%;
          z-index: -2;
          top: 0;
          left: 0;
          transform: skew(-$skew2)
        }

        &:hover {
          color: #FCF8F3;

          &:before {
            background: #867C84;
          }
        }

        span {
          font-size: 16px;
        }

        // ----- disabled
        &.disabled {
          pointer-events: none;
          opacity: 0.4;
        }
      }
    }
  }

</style>
