<template lang="pug">
  .top-page
    section.section-mv
      .section-mv__bg
        .section-mv__catch
          picture
            img(src="/imgs/mv-bg.svg")
      .section-mv__body
        .container
          picture
            .main-img
              img(src="/imgs/mv-catch-1.svg")
            .logo-img
              img.logo(src="/imgs/logo.svg")
          a.entry-button(href="#")
            span Entry

    section.section_about.section
      .container
        .skew-box.skew-box--right
          .section__head
            h3.section__title About Us
            p.section__subtitle What’s “PROJECT FES”?
          .section__body
            p.text-center
              | 学生主催プロジェクトの認知を大学内外へ広げるためプレゼンテーションの場を提供しています。
            p
              | 発信したい学生の背中を押す企画”PROJECT FES”、始まります。
            a.button.button-right(href="#")
              span View More

    section.section_reports
      .container
        .head
          img(src="/imgs/project.svg")
        NewReports
        .foot
          a.button.button-blue(href="#")
            span View More


    section.section_project.section
      .container
        .skew-box.skew-box--right
          .section__head
            h3 Projects
          .section__body
            p
              | 「昭和女子大生の活動を発信・記録する場がここにある」
            p
              | 昭和女子大生は日々、学内外でプロジェクト活動に取り組んでいます！
            p
              | Project ページではnoteを使って各プロジェクトが活動記録を発信中！
            p
              | 各プロジェクトの活動を覗いてみませんか？
          a.button.button-right(href="#")
            span View More

    section.section_entry.section
      .container
        .skew-box.skew-box--left.skew-box--blue
          .section__head
            h3.text-center Entry
          .section__body
            p.text-center
              | PROJECT FESでは参加プロジェクトを大募集中！
            p
              | なにかに熱中しているひと、自分の活動をPRしたいひと、
            p
              | こっそり素敵な趣味を持っているひと、
            p
              | PROJECT FESで、みなさんの活動を発信してみませんか？
            p
              | 応募条件/応募方法など詳細はEntryページへ！
          a.button.button-left(href="#")
            span View More

    section.section_sponsor.section
      .container
        .skew-box.skew-box--right
          .section__head
            h3.text-center Sponsor
          .section__body
            p.text-center
              | クラウドファンディングにて協賛/協力していただいた団体を紹介しています。
            p
              | 選考された団体への賞についての詳細や要件も記載しています。
          a.button.button-right(href="#")
            span View More
</template>

<script lang="ts">
  import {Component, Vue} from "~/node_modules/nuxt-property-decorator";
  import Button from "~/molle/editer/module/item-option/Button.vue";
  import NewReports from "~/components/NewReports.vue";

  @Component({
    layout: "static",
    components: {NewReports, Button}
  })
  export default class TopPage extends Vue {

    mounted() {
    }
  }
</script>

<style lang="scss">
  .top-page {
    p{
      margin-bottom: 0;
    }

    .section {
      padding-top: 4.5rem;
      padding-bottom: 4.5rem;
      background-color: #E8E8E8;
      border: #E8E8E8;

      &__head {
        // 旧 section-head
      }

      &__body {
      }
    }

    .container {
      margin-left: 7%;
      margin-right: 7%;
    }

    .section-mv {
      height: 100vh;
      &__bg {
        position: sticky;
        top: 0;
        height: 0;
        z-index: -1;
        .section-mv__catch{
          img{

          }
        }
      }

      &__body {
        display: block;
        text-align: center;
        @include mediaquery-not-sm {
          margin-top: 10rem;
          margin-bottom: 6.25rem;
        }
        @include mediaquery-sm{
          margin: 0;
        }

        img {
          object-fit: cover;
        }

        .logo {
          margin-top: 6.25rem;
          margin-bottom: 6.25rem;
          @include mediaquery-not-sm {
            height: 200px;
          }
          @include mediaquery-sm{
            height: 100px;
          }
        }

        a {
          text-decoration: none;
          align-items: center;
        }

        .entry-button {
          position: relative;
          z-index: 1;
          text-align: center;
          margin-left: auto;
          margin-right: auto;
          color: #ffffff;
          display: inline-block;
          padding-top: 1rem;
          padding-bottom: 1rem;
          padding-left: 2.5rem;
          padding-right: 2.5rem;

          &:before {
            content: "";
            display: block;
            position: absolute;
            height: 100%;
            width: 100%;
            border: 3px solid #ffffff;
            z-index: -2;
            top: 0;
            left: 0;
            transform: skew(-20deg)
          }

          &:hover {
            color: #867C84;

            &:before {
              background: #ffffff;
            }
          }

          span {
            font-size: 3vh;
          }
        }
      }
    }

    .section_about {
      @include mediaquery-not-sm {
        padding-right: 2rem;
      }
      p {
        margin-bottom: 2.5rem;
      }

      .button {
        margin-bottom: 3.5rem;
      }
    }

    .section_reports {
      background-color: #8CBCBF;

      .head {
        text-align: center;
      }

      .foot{
        text-align: center;
        a {
          align-items: end;
        }
      }

    }

    .section_project {
      @include mediaquery-not-sm {
        padding-right: 2rem;
      }
      p {
        margin-bottom: 1.5rem;
      }

      .button {
        margin-top: 1rem;
        margin-bottom: 3.5rem;
      }
    }

    .section_entry {
      @include mediaquery-not-sm {
        padding-left: 2rem;
      }
      p {
        margin-bottom: 1.5rem;
      }

      .button {
        margin-top: 1rem;
        margin-bottom: 3.5rem;
      }
    }

    .section_sponsor {
      @include mediaquery-not-sm {
        padding-right: 2rem;
      }
      p {
        margin-bottom: 2.5rem;
      }

      .button {
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

    .button-blue {
      margin-bottom: 2.5rem;

      &:before {
        transform: skew(-20deg)
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
