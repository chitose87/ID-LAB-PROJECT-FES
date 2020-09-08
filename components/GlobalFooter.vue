<template lang="pug">
  footer.global-footer
    .global-footer__body
      .global-footer__pb
        p Powered by "ID Lab"
      .global-footer__links
        //a.global-footer__links__item(href="https://sw-id-lab.web.app/" target="_id lab")
          .button
            img(src="/imgs/id.lab.svg" alt="id")
          p.text
            | id.lab
          //span ID lab
        a.global-footer__links__item(href="https://note.com/project_fes" target="_note")
          img(src="/imgs/note.svg" alt="note")
          span note
        a.global-footer__links__item(href="https://twitter.com/u_project_fes" target="_tw")
          img(src="/imgs/twitter.svg" alt="twitter")
          span Twitter
        a.global-footer__links__item(href="https://www.instagram.com/u.project.fes/" target="_instagram")
          img(src="/imgs/insta.svg" alt="instagram")
          span Instagram

    .global-footer__copyright
      small ©️PROJECT FES運営

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
      background-color: $color-key;
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
      margin-top: 2.5rem;

      &__item {
        text-decoration: none;
        @include mediaquery-not-sm {
          width: 7rem;
        }
        @include mediaquery-sm {
          width: 4.5rem;
          padding-top: 0.5rem;
          margin-left: 0.5rem;
          margin-right: 0.5rem;
        }

        img{
          width: 30px;
          height: 30px;
          object-fit: contain;
        }

        span {
          display: block;
          color: white;
          margin-top: 0.5rem;
          @include mediaquery-sm {
            font-size: 14px;
          }
        }
      }
    }

    &__copyright {
      color: $color-text-white;
      background-color: $color-key2;
      text-align: center;
      line-height: 1;
      padding: 0.5rem 0;
    }
  }

</style>
