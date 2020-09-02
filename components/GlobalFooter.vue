<template lang="pug">
  footer.global-footer
    .global-footer__body
      .global-footer__pb
        p
          | Powered by
        p
          | ID Lab
      .global-footer__links
        a.global-footer__links__item(href="https://sw-id-lab.web.app/")
          .button
            img(src="/imgs/id.lab.svg" alt="id")
          p.text
            | id.lab
          //span ID lab
        a.global-footer__links__item(href="https://note.com/project_fes")
          .button
            img(src="/imgs/note.svg" alt="note")
          p.text
            | note
          //span note
        a.global-footer__links__item(href="https://twitter.com/u_project_fes")
          .button
            img(src="/imgs/twitter.svg" alt="twitter")
          p.text
            | Twitter
          //span Twitter
        a.global-footer__links__item(href="https://www.instagram.com/u.project.fes/")
          .button
            img(src="/imgs/insta.svg" alt="instagram")
          p.text
            | Instagram
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
        @include mediaquery-not-sm {
          width: 7rem;
        }
        @include mediaquery-sm{
          width: 5rem;
        }
        margin-top: 2.5rem;
        margin-bottom: 2.5rem;
        .button{

        }
        .text{
          color: white;
          margin-top: 1rem;
          @include mediaquery-sm{
            font-size: 14px;
          }
          p {
            text-decoration: none;

          }
        }
      }
    }

    &__copyright {
      background-color: #B48362;
      text-align: center;
    }
  }

</style>
