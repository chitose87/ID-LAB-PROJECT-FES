<template lang="pug">
  header.global-header
    input.global-header__toggle__cb#global-menu(type="checkbox")
    .global-header__body
      a.global-header__logo(href="/")
        img(src="/imgs/logo.svg" alt="logo")

      .global-header__menu
        a.global-header__menu__item(href="/")
          span Top
        a.global-header__menu__item(href="/about")
          span About us
        a.global-header__menu__item(href="https://note.com/project_fes/n/nb589092126eb" target="_entry")
          span Entry
        .global-header__menu__item.disabled
          span Projects
        .global-header__menu__item.disabled
          span Sponsor
      label.global-header__toggle(for="global-menu") MENU

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
    top: 0;
    left: 0;
    width: 100%;
    z-index: 3;
    @include mediaquery-not-sm {
      background: rgba(#FCF8F3, 0.84);
    }

    &__body {
      @include mediaquery-not-sm {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 50px;
      }
    }

    &__logo {
      @include mediaquery-not-sm {
        height: 100%;
        margin-left: 1.5rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;

        img {
          height: 100%;
          width: auto;
        }
      }
      @include mediaquery-sm {
        position: fixed;
        width: 4.5rem;
        height: auto;
        display: inline-block;
        padding: 0.5rem;
        img {
        }
      }
    }


    // menu
    &__menu {
      @include mediaquery-not-sm {
        display: flex;
        justify-content: start;
        margin-right: 1.5rem;
      }
      @include mediaquery-sm {
        position: absolute;
        top: 0;
        right: 0;
        background-color: $color-key;
        height: 100vh;
        padding-top: 2rem;
        padding-left: 2rem;
        padding-right: 6rem;
        box-shadow: $shadow;

        transform: translateX(110%);
        transition: transform ease-in-out $tick;
      }

      &__item {
        text-decoration: none;
        @include mediaquery-not-sm {
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
        }
        @include mediaquery-sm {
          color: $color-text-white;
          font-size: 25px;
          font-weight: 500;
          display: block;
          margin-bottom: 1.5rem;
        }
        // ----- disabled
        &.disabled {
          pointer-events: none;
          opacity: 0.4;
        }
      }
    }


    // sp only
    &__toggle {
      @include mediaquery-not-sm {
        display: none;
      }
      @include mediaquery-sm {
        display: inline-block;
        width: 44px;
        height: 44px;

        position: fixed;
        top: 6px;
        right: 8px;
        font-size: 0;
        line-height: 0;
        &:before, &:after {
          content: "";
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          width: 2rem;
          height: 2px;
          background-color: $color-black;
          transform-origin: center center;
          border-radius: 2px;
          transition: all ease-in-out $tick;
        }
        &:before {
          transform: translate(-50%, -8px);
        }
        &:after {
          transform: translate(-50%, 8px);
        }
      }

      &__cb {
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        background: $color-white;
        appearance: none;
        opacity: 0;
        pointer-events: none;
        transition: opacity ease-in-out $tick;

        &:checked {
          pointer-events: auto;
          opacity: 0.4;

          & + * {
            .global-header {
              &__menu {
                transform: translateX(0%);
                //transition: transform ease-in-out $tick;
              }

              &__toggle {
                &:before, &:after {
                  background-color: $color-white;
                }
                &:before {
                  transform: translate(-50%, -1px) rotate(45deg);
                }

                &:after {
                  transform: translate(-50%, -1px) rotate(-45deg);
                }
              }
            }
          }
        }
      }
    }
  }

</style>
