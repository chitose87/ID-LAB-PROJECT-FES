<template lang="pug">
  footer.global-footer
    .global-footer__body.container
      .global-footer__pb
        p
          | Powered by
          br
          | ID Lab
      .global-footer__links
        a.global-footer__links__item(href="#")
          img(src="/imgs/id.lab.svg" alt="id")
          span ID lab
        a.global-footer__links__item(href="#")
          img(src="/imgs/note.svg" alt="note")
          span note
        a.global-footer__links__item(href="#")
          img(src="/imgs/twitter.svg" alt="twitter")
          span Twitter
        a.global-footer__links__item(href="#")
          img(src="/imgs/insta.svg" alt="instagram")
          span instagram
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
      background-color: #B48362;
      padding-top: 4.5rem;
      padding-bottom: 4.5rem;
    }

    &__pb {
      margin-bottom: 3%;

      p {
        color: white;
      }
    }

    &__links {
      display: flex;
      justify-content: center;

      &__item {
        img {
          margin-left: 3%;
          margin-right: 3%;
          width: auto;
          height: 70px;
        }

        span {

        }
      }
    }

    &__copyright {
      background-color: #00DDDD;
      text-align: center;
    }
  }

</style>
