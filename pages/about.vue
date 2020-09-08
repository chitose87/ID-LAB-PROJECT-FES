<template lang="pug">
  .about-page
    section.section-mv
      .section-mv__bg
        .section-mv__catch
          picture
            img(src="/imgs/about-mv.svg")
      .section-mv__body
        .container
          h2.page-title About Us

    .about-page__wrap
      section.section-intro
        .container
          .section-intro__text
            //h3.section__title
              | PROJECT FESについて
            p.text
              | PROJECT FES では、昭和女子大学学生主催のプロジェクトのプレゼンの場をオンラインで開設します。
            p.text
              | ジャンルやテーマは問わず、参加してくれた学生主催プロジェクトの認知を大学内外へ広げるため、情報を発信していきます。
          .section-intro__img
            img(src="/imgs/intro-img.svg")

      section.section-detail
        .container
          .section-detail__text
            h3.section__title
              | フェス？お祭りなの？
            p.text
              | 出展プロジェクトのプレゼンの場という目的を第一に、PR期間を経たのち、
            P.text
              | 選考を通して選ばれたプロジェクト団体に対する賞の授与を予定しています。
            P
              | アワード形式の催し物と捉えてもらえるとわかりやすいと思います。
          .section-detail__picture
            .step.step--1
              h4.title Entry
              p プロジェクト専用のnoteアカウントを用意の上、Googleフォームから応募。
            .step.step--2
              h4.title PR
              p 詳細や活動記録など、プロジェクトとして伝えたいことを自由にnoteにて発信。
            .step.step--3
              h4.title Award
              p 活動内容を評価基準とし選考。
              p スポンサー賞などの授与を行う。

      section.section-member.section
        .container
          .skew-box.skew-box--left.skew-box--blue
            .section__head
              h3.section__title  私たち運営は各プロジェクトの広報として動きます。
            .section__body
              p 私たち主催者自身も各プロジェクト団体の活動を取材し、note記事を更新します。
                br
                | 広報をする上で、認知に向けたより効果的なアプローチをしていくために、
                br
                | 参加団体との関係性を大事にしていきたいと思っています。
              a.button.button-primary(href="https://note.com/project_fes" target="_blank")
                span 運営noteページはこちら

      section.section-symposium.section
        .container
          .skew-box.skew-box--right
            .section__head
              h3.section__title PROJECT FES 座談会
            .section__body
              p
                | 参加団体に向けて、月一回の座談会の開催を予定しています。
              p
                | PR活動の悩みや活動記録を共有し、運営メンバーも交えてみんなで考えていきましょう。
              .button.button-disabled
                span Coming Soon
            //a.button.button-primary(href="#")
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
    &__wrap {
      background-color: #E8E8E8;
      padding-top: 4.5rem;
      padding-bottom: 1rem;
    }

    /*.section {*/
    /*  padding-top: 4.5rem;*/
    /*  padding-bottom: 4.5rem;*/
    /*  background: #E8E8E8;*/
    /*}*/

    .section-mv {
      height: 25vh;

      &__bg {
        position: sticky;
        top: 0;
        height: 0;
        z-index: -1;
      }

      &__body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding-top: 3rem;

        h2 {
          margin-top: 0;
          margin-bottom: 0;
          /*margin-top: 5rem;*/
          /*margin-bottom: 4.5rem;*/
        }
      }
    }

    .section-intro {
      text-align: center;
      background: #E8E8E8;

      &__img {
        margin-top: 4.5rem;
        margin-left: auto;
        margin-right: auto;
        @include mediaquery-not-sm {
          width: 70%;
        }
      }
    }

    .section-detail {
      text-align: center;
      background: #E8E8E8;
      margin-top: 4.5rem;
      margin-bottom: 4.5rem;

      &__picture {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        @include mediaquery-not-sm {
          display: flex;
          justify-content: space-between;
          margin-top: 2rem;
          margin-bottom: 2rem;
        }
        @include mediaquery-not-sm {
          padding-top: 1rem;
          padding-bottom: 1rem;
        }

        .step {
          position: relative;
          z-index: 1;
          padding-top: 1rem;
          padding-bottom: 1rem;
          padding-left: 1rem;
          padding-right: 1rem;

          color: $color-text-white;

          @include mediaquery-not-sm {
            width: 32%;
          }
          @include mediaquery-sm {
            margin-top: 1rem;
            margin-bottom: 1rem;
          }

          &:before {
            content: "";
            display: block;
            width: 100%;
            height: 100%;
            background-color: $color-key2;
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            @include mediaquery-not-sm {
              transform: skewX($skew);
            }
            @include mediaquery-sm {
              transform: skewY($skew);
            }
          }

          &--1 {
            &:before {
            }
          }

          &--2 {
            &:before {
            }
          }

          &--3 {
            &:before {
            }
          }
        }

        .title {
          margin-top: 0;
          margin-bottom: 1rem;
        }

        p {

        }
      }
    }

    .section-member {

    }

    .section-symposium {
    }
  }
</style>
