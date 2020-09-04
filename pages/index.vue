<template lang="pug">
  .top-page
    section.section-mv
      .section-mv__bg
        .section-mv__catch
          picture
            img(src="/imgs/mv-bg.jpg")
      .section-mv__body.container
        .section-mv__body__copy
          picture
            img(src="/imgs/mv-copy.png")
        .section-mv__body__logo
          picture
            img(src="/imgs/logo.svg")
        .section-mv__body__btns
          a.button.button-primary(href="#")
            span Entry

    .top-page__wrap
      section.section_about.section
        .container
          .skew-box.skew-box--right
            .section__head
              h3.section__title About Us
              h4.section__subtitle What’s “PROJECT FES”?
            .section__body
              p.text-center
                | 学生主催プロジェクトの認知を大学内外へ広げるためプレゼンテーションの場を提供しています。
              p
                | 発信したい学生の背中を押す企画”PROJECT FES”、始まります。
              a.button.button-primary(href="#")
                span View More

      section.section_reports
        .container
          .section_reports__head
            img(src="/imgs/project.svg")
          NewReports
          .section_reports__foot
            a.button.button-primary(href="#")
              span View More

      section.section_project.section
        .container
          .skew-box.skew-box--right
            .section__head
              h3.section__title Projects
            .section__body
              p
                | 「昭和女子大生の活動を発信・記録する場がここにある」
              p
                | 昭和女子大生は日々、学内外でプロジェクト活動に取り組んでいます！
              p
                | Project ページではnoteを使って各プロジェクトが活動記録を発信中！
              p
                | 各プロジェクトの活動を覗いてみませんか？
              a.button.button-primary(href="#")
                span View More

      section.section_entry.section
        .container
          .skew-box.skew-box--left.skew-box--blue
            .section__head
              h3.section__title Entry
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
              a.button.button-primary(href="#")
                span View More

      section.section_sponsor.section
        .container
          .skew-box.skew-box--right
            .section__head
              h3.section__title Sponsor
            .section__body
              p.text-center
                | クラウドファンディングにて協賛/協力していただいた団体を紹介しています。
              p
                | 選考された団体への賞についての詳細や要件も記載しています。
              a.button.button-primary(href="#")
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
    &__wrap {
      background-color: #E8E8E8;
      padding-top: 1rem;
      padding-bottom: 1rem;
    }

    // ----- section-mv
    .section-mv {
      height: 100vh;

      &__bg {
        position: sticky;
        top: 0;
        height: 0;
        z-index: -1;

        .section-mv__catch {
          width: 100%;
          height: 100vh;

          img {
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
        }
      }

      &__body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-top: 3rem;
        padding-bottom: 3rem;
        height: 100%;

        &__copy {
          img {
            width: 100%;
            height: auto;
          }
        }

        &__logo {
          margin-top: 6.25rem;
          margin-bottom: 6.25rem;
          text-align: center;

          img {
            filter: invert(1);
            width: auto;
            @include mediaquery-not-sm {
              height: 200px;
            }
            @include mediaquery-sm {
              height: 100px;
            }
          }
        }

        &__btns {
          text-align: center;

          .button-primary {
            padding-left: 2.5rem;
            padding-right: 2.5rem;

            &:before {
              border: 3px solid #ffffff;
              background-color: transparent;
              transform: skew(-20deg)
            }

            span {
              font-size: 3vh;
            }

            &:hover {
              color: #867C84;

              &:before {
                background: #ffffff;
              }
            }
          }
        }
      }
    }

    // ----- section_about
    .section_about {
    }

    // ----- section_reports
    .section_reports {
      background-color: #8CBCBF;

      &__head {
        text-align: center;
      }

      &__foot {
        text-align: center;

        a {
          align-items: end;
        }
      }

      .button {
        margin-bottom: 2.5rem;

        &:before {
          transform: skew(-20deg)
        }

        &:hover {
          color: #8CBCBF;
        }
      }
    }

    .section_project {
    }

    .section_entry {
    }

    .section_sponsor {
    }
  }
</style>
