<template lang="pug">
  .about-page
    section.section-about-head
      .section-about-head__bg
        .section-about-head__catch
          picture
            img(src="/imgs/about-mv.svg")
      .section-about-head__body
        .container
          h1 About Us

    section.section_about-intro
      .section_about-intro__text
        p.title
          | PROJECT FESについて
        p.text
          | PROJECT FES では、昭和女子大学学生主催のプロジェクトのプレゼンの場をオンラインで開設します。
        p.text
          | ジャンルやテーマは問わず、参加してくれた学生主催プロジェクトの認知を大学内外へ広げるため、情報を発信していきます。
      .section_about-intro__img
        img(src="/imgs/intro-img.svg")

    section.section-about-detail
      .section-about-detail__text
        p.title
          | フェス？お祭りなの？
        p.text
          | 出展プロジェクトのプレゼンの場という目的を第一に、PR期間を経たのち、
        P.text
          | 選考を通して選ばれたプロジェクト団体に対する賞の授与を予定しています。
        P
          | アワード形式の催し物」と捉えてもらえるとわかりやすいと思います。
      .section-about-detail__img

    section.section_about-member.section
      .container
        .skew-box.skew-box--left.skew-box--blue
          .section_about-member__head
            h1 私たち運営は各プロジェクトの広報として動きます。
          .section_about-member__body
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

    section.section-about-symposium.section
      .container
        .skew-box.skew-box--right
          .section-about-symposium__head
            h1 PROJECT FES 座談会
          .section-about-symposium__body
            p
              | 参加団体に向けて、月一回の座談会を開催します。
            p
              | PR活動の悩みや活動記録を共有し、運営メンバーも交えてみんなで考えていきましょう。
          a.button.button-left(href="#")
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
    .section{
      padding-top: 4.5rem;
      padding-bottom: 4.5rem;
      background: #E8E8E8;
    }
  }

  .section-about-head{
    height: 20vh;
    &__bg{
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
      h1{
        margin-top: 5rem;
        margin-bottom: 4.5rem;
      }
    }
  }

  .section_about-intro{
    text-align: center;
    background: #E8E8E8;
    padding-top: 5rem;
    .section_about-intro__text{
      margin-bottom: 3.5rem;
      .title{
        margin-bottom: 4.25rem;
      }
      .text{
        margin-bottom: 3rem;
      }
    }
    .section_about-intro__img{
      margin-left: 17.25rem;
      margin-right: 17.25rem;
    }
  }

  .section-about-detail{
    text-align: center;
    background: #E8E8E8;
    padding-top: 5rem;
    .section-about-detail__text{
      .title{
        margin-bottom: 4.25rem;
      }
      .text{
        margin-bottom: 3rem;
      }
      p{
        margin-bottom: 0rem;
      }
    }
  }

  .section_about-member{
    &__body{
      p{
          margin-bottom: 2rem;
      }
    }
    .button{
      margin-top: 0.75rem;
      width: 30%;
    }
  }

  .section-about-symposium{
    &__body{
      p{
        margin-bottom: 2rem;
      }
    }
    .button{
      margin-top: 0.75rem;
      width: 30%;
    }
  }
</style>
