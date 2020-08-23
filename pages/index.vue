<template lang="pug">
  .top-page
    section.section-mv
      .section-mv__bg
        .section-mv__catch
          picture
            img(src="/imgs/bg.svg")
      .section-mv__body
        picture
          img(src="/imgs/logo.svg")


    section.section_about.section
      .container
        .body
          .section-head
            .section-head__body
              .section-head__body__title
                h1.text-center About Us
          p.text-center What’s “PROJECT FES”?
          p.text-center
            | 学生主催プロジェクトの認知を大学内外へ広げるためプレゼンテーションの場を提供しています。
            br
            | 発信したい学生の背中を押す企画”PROJECT FES”、始まります。

    section.section_reports
      .container
        .reports
          p.text-center
            | a
            br
            | a
            br
            | a
            br
            | a
            br
            | a
            br
            | a
            br
            | a
            br

    section.section_project.section
      .container
        .body
          .section-head
            .section-head__body
              .section-head__body__title
                h1 Projects
          p
            | 「昭和女子大生の活動を発信・記録する場がここにある」
            br
            | 昭和女子大生は日々、学内外でプロジェクト活動に取り組んでいます！
            br
            | Project ページではnoteを使って各プロジェクトが活動記録を発信中！
            br
            | 各プロジェクトの活動を覗いてみませんか？

    section.section_entry
      .container
        .body
          .section-head
            .section-head__body
              .section-head__body__title
                h1.text-center Entry

          p.text-center
            | PROJECT FESでは参加プロジェクトを大募集中！
            br
            | なにかに熱中しているひと、自分の活動をPRしたいひと、
            br
            | こっそり素敵な趣味を持っているひと、
            br
            | PROJECT FESで、みなさんの活動を発信してみませんか？
            br
            | 応募条件/応募方法など詳細はEntryページへ！

    section.section_sponsor.section
      .container
        .body
          .section-head
            .section-head__body
              .section-head__body__title
                h3.text-center Sponsor
          p.text-center
            | クラウドファンディングにて協賛/協力していただいた団体を紹介しています。
            br
            | 選考された団体への賞についての詳細や要件も記載しています。

</template>

<script lang="ts">
  import {Component, Vue} from "~/node_modules/nuxt-property-decorator";

  @Component({
    layout: "static",
    components: {}
  })
  export default class TopPage extends Vue {

    mounted() {
    }
  }
</script>

<style lang="scss">
  .section {
    padding-top: 9rem;
    padding-bottom: 4.5rem;
    background-color: #E8E8E8;

    .body {
      width: 80%;
      position: relative;
      z-index: 1;
      text-align: center;
      margin: 0 auto;
      right: -10%;

      &:before {
        content: "";
        display: block;
        position: absolute;
        top: 2rem;
        left: -4rem;
        width: 150%;
        height: 100%;
        transform: skew(-20deg);
        z-index: -2;
        background: -moz-linear-gradient(left, #CFB09C, #B48362);
        background: -webkit-linear-gradient(left, #CFB09C, #B48362);
        background: linear-gradient(to right, #CFB09C, #B48362);
      }

      &:after {
        content: "";
        display: block;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        transform: skew(-20deg);
        z-index: -1;
        background-color: #FCF8F3;
        opacity: 0.56;
      }

    }
  }

  .section_about {
    padding-right: 4.5rem;
  }

  .section_project {
    padding-right: 4.5rem;
  }

  .section_sponsor {
    padding-right: 4.5rem;
  }

  .section_reports {
    background-color: #8CBCBF;
  }

  .section_entry {
    padding-top: 9rem;
    padding-bottom: 4.5rem;
    padding-left: 4.5rem;
    background-color: #e8e8e8;

    .body {
      width: 80%;
      position: relative;
      z-index: 1;
      text-align: center;
      margin: 0 auto;
      left: -10%;

      &:before {
        content: "";
        display: block;
        position: absolute;
        top: 2rem;
        right: -4rem;
        width: 150%;
        height: 100%;
        transform: skew(20deg);
        z-index: -2;
        background: -moz-linear-gradient(left, #8CBCBF, #93DDE2);
        background: -webkit-linear-gradient(left, #8CBCBF, #93DDE2);
        background: linear-gradient(to right, #8CBCBF, #93DDE2);
      }

      &:after {
        content: "";
        display: block;
        position: absolute;
        top: 0px;
        right: 0px;
        width: 100%;
        height: 100%;
        transform: skew(20deg);
        z-index: -1;
        background-color: #FCF8F3;
        opacity: 0.56;
      }
    }
  }
</style>
