<template lang="pug">
  footer.global-footer
    .global-footer__body
      .global-footer__pb
        p
          | Powered by
        p
          | ID Lab
      .global-footer__links
        a.global-footer__links__item(href="#")
          img(src="/imgs/id.lab.svg" alt="id")
          //span ID lab
        a.global-footer__links__item(href="#")
          img(src="/imgs/note.svg" alt="note")
          //span note
        a.global-footer__links__item(href="#")
          img(src="/imgs/twitter.svg" alt="twitter")
          //span Twitter
        a.global-footer__links__item(href="#")
          img(src="/imgs/insta.svg" alt="instagram")
          //span instagram
    .global-footer__copyright
      small ©️ ID Lab

</template>

<script lang="ts">
  import {Component, Vue} from "~/node_modules/nuxt-property-decorator";

  @Component({
    components: {}
  })
  export default class GlobalFooter extends Vue {
  }
</script>

<style lang="scss">
  .global-footer {
    &__body {
      text-align: center;
      background-color: #8CBCBF;
      padding-top: 4.5rem;
      padding-bottom: 4.5rem;
    }

    &__pb {
      margin-bottom: 3%;

      p {
        color: white;
        margin-bottom: 1rem;
      }
    }

    &__links {
      display: flex;
      justify-content: center;

      &__item {
        margin-top: 2.5rem;
        margin-bottom: 2.5rem;
        margin-left: 2.25rem;
        margin-right: 2.25rem;
        img {

        }

        span {

        }
      }
    }

    &__copyright {
      background-color: #B48362;
      text-align: center;
    }
  }

</style>
