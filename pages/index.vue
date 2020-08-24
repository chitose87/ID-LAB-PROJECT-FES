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
        .skew-box.skew-box--right
          .section__head
            h1.text-center About Us
          .section__body
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
        .skew-box.skew-box--right
          .section__head
            h1 Projects
          .section__body
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
        .skew-box.skew-box--left.skew-box--blue
          .section__head
            h1.text-center Entry
          .section__body
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
        .skew-box.skew-box--right
          .section__head
            h3.text-center Sponsor
          .section__body
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
  .top-page {

  }

  .section {
    padding-top: 9rem;
    padding-bottom: 4.5rem;
    background-color: #E8E8E8;

    &__head {
      // 旧 section-head
    }

    &__body {

    }
  }

  .section_about {
    /*padding-right: 4.5rem;*/
  }

  .section_project {
    /*padding-right: 4.5rem;*/
  }

  .section_sponsor {
    /*padding-right: 4.5rem;*/
  }

  .section_reports {
    background-color: #8CBCBF;
  }

  .section_entry {
    padding-top: 9rem;
    padding-bottom: 4.5rem;
    padding-left: 4.5rem;
    background-color: #e8e8e8;
  }
</style>
