<template lang="pug">
  .about-page
    section.section-mv
      .section-mv__bg
        .section-mv__catch
          picture
            img(src="/imgs/about-mv.svg")
      .section-mv__body
        .container
          h1 About Us

    section.section-intro
      .section-intro__text
        h3.title
          | PROJECT FESについて
        p.text
          | PROJECT FES では、昭和女子大学学生主催のプロジェクトのプレゼンの場をオンラインで開設します。
        p.text
          | ジャンルやテーマは問わず、参加してくれた学生主催プロジェクトの認知を大学内外へ広げるため、情報を発信していきます。
      .section-intro__img
        img(src="/imgs/intro-img.svg")

    section.section-detail
      .section-detail__text
        h3.title
          | フェス？お祭りなの？
        p.text
          | 出展プロジェクトのプレゼンの場という目的を第一に、PR期間を経たのち、
        P.text
          | 選考を通して選ばれたプロジェクト団体に対する賞の授与を予定しています。
        P
          | アワード形式の催し物と捉えてもらえるとわかりやすいと思います。
      .section-detail__img

    section.section-member.section
      .container
        .skew-box.skew-box--left.skew-box--blue
          .section-member__head
            h3 私たち運営は各プロジェクトの広報として動きます。
          .section-member__body
            p
              | PROJECT FESは、ID Lab主催のプロジェクトです。
            P
              | 私たち自身も各プロジェクト団体の活動を取材し、note記事を更新します。
            P
              | 広報をする上で、認知に向けたより効果的なアプローチをしていくために、参加団体との関係性を大事にしていきたいと思っています。
            p
              | まずはどんな人が運営をしているのか、覗いてみてください。
          a.button.button-left(href="#")
            span 運営メンバーの紹介ページはこちら

    section.section-symposium.section
      .container
        .skew-box.skew-box--right
          .section-symposium__head
            h3 PROJECT FES 座談会
          .section-symposium__body
            p
              | 参加団体に向けて、月一回の座談会を開催します。
            p
              | PR活動の悩みや活動記録を共有し、運営メンバーも交えてみんなで考えていきましょう。
          a.button.button-right(href="#")
            span 座談会の詳細ページはこちら



</template>

<script lang="ts">
  import {Component, Vue} from "~/node_modules/nuxt-property-decorator";

  @Component({
    layout: "static",
    components: {}
  })
  export default class AboutPage extends Vue {

    mounted() {
    }
  }
</script>

<style lang="scss">
  .about-page {
    .section {
      padding-top: 4.5rem;
      padding-bottom: 4.5rem;
      background: #E8E8E8;
    }

    .section-mv {
      height: 25vh;

      &__bg {
        position: sticky;
        top: 0;
        height: 0;
        z-index: -1;
      }

      &__body {
        z-index: 1;
        top: 0;
        display: block;
        text-align: center;

        h1 {
          margin-top: 5rem;
          margin-bottom: 4.5rem;
        }
      }
    }

    .section-intro {
      text-align: center;
      background: #E8E8E8;
      padding-top: 5rem;
      @include mediaquery-sm{
        padding-right: 3rem;
        padding-left: 3rem;
      }
      &__text {
        margin-bottom: 3.5rem;

        .text {
          margin-bottom: 3rem;
        }
      }

      &__img {
        margin: auto;
        width: 70vw;
      }
    }

    .section-detail {
      text-align: center;
      background: #E8E8E8;
      padding-top: 5rem;
      @include mediaquery-sm{
        padding-right: 3rem;
        padding-left: 3rem;
      }
      &__text {
        .text {
          margin-bottom: 3rem;
        }

        p {
          margin-bottom: 0rem;
        }
      }
    }

    .section-member {
      @include mediaquery-not-sm {
        padding-left: 6rem;
      }
      &__head{
        @include mediaquery-sm{
          padding-left: 3rem;
          padding-right: 3rem;
        }
      }

      &__body {
        @include mediaquery-sm{
          padding-left: 3rem;
          padding-right: 3rem;
        }
        p {
          margin-bottom: 2rem;
        }
      }

      .button {
        margin-top: 0.75rem;
        margin-bottom: 3.5rem;
      }
    }

    .section-symposium {
      @include mediaquery-not-sm {
        padding-right: 4rem;
      }
      &__head{
        @include mediaquery-sm{
          padding-left: 3rem;
          padding-right: 3rem;
        }
      }
      &__body {
        @include mediaquery-sm{
          padding-left: 3rem;
          padding-right: 3rem;
        }
        p {
          margin-bottom: 2rem;
        }
      }

      .button {
        margin-top: 0.75rem;
        margin-bottom: 3.5rem;
      }
    }

    a {
      text-decoration: none;
      align-items: center;
    }

    .button {
      position: relative;
      z-index: 1;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
      color: #ffffff;
      display: inline-block;
      padding-top: 1rem;
      padding-bottom: 1rem;
      padding-left: 1.5rem;
      padding-right: 1.5rem;

      &:before {
        content: "";
        display: block;
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: -2;
        background: #867C84;
        top: 0;
        left: 0;
      }
    }

    .button-right {
      margin: 0;

      &:before {
        transform: skew(-20deg)
      }

      &:hover {
        color: #B48362;

        &:before {
          background: #ffffff;
        }
      }
    }

    .button-left {
      &:before {
        transform: skew(20deg)
      }

      &:hover {
        color: #8CBCBF;

        &:before {
          background: #ffffff;
        }
      }
    }
  }
</style>
