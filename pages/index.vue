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
            h1.text-center-title About Us
          .section__body
            p.text-center-subtitle What’s “PROJECT FES”?
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
        a.project-button(href="#")
          .project-button-head
            .project-button__img
              img(src="/imgs/sample-project.svg")
            .project-button__circle
              p
              | 〇〇PROJECT
              p
              | 恥の多い人生を送って来ました。
          .project-button-body
            .project-button__text
              p
              | 2020/09/01
              p.text
              | 恥の多い人生を送って来ました。
        a.button.button-right(href="#")
          span View More


    section.section_project.section
      .container
        .skew-box.skew-box--right
          .section__head
            h1 Projects
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

    section.section_entry
      .container
        .skew-box.skew-box--left.skew-box--blue
          .section__head
            h1.text-center Entry
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

  @Component({
    layout: "static",
    components: {Button}
  })
  export default class TopPage extends Vue {

    mounted() {
    }
  }
</script>

<style lang="scss">
  p{
    margin-bottom: 0;
  }
  .top-page {

  }

  .section {
    padding-top: 9rem;
    padding-bottom: 4.5rem;
    background-color: #E8E8E8;
    border: #E8E8E8;

    &__head {
      // 旧 section-head
    }

    &__body {
    }
  }

  .container{
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
    }

    &__body {
      display: block;
      text-align: center;
      margin-top: 10rem;
      margin-bottom: 6.25rem;

      img {
        object-fit: cover;
      }

      .logo {
        margin-top: 6.25rem;
        margin-bottom: 4.5rem;
        height: 200px;
      }
      a{
        text-decoration: none;
        align-items: center;
      }
      .entry-button {
        position: relative;
        width: 17%;
        z-index: 1;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        color: #ffffff;
        display: inline-block;
        padding: 1rem 2rem;
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
        span{
          font-size: 45px;
        }
      }
    }
  }

  .section_about {

    p {
      margin-bottom: 2.5rem;
    }

    .button{
      width: 15%;
    }
  }

  .section_reports{
    background-color: #8CBCBF;
    .button{
      width: 15%;
    }
    .head {
      text-align: center;
    }

    a{
      align-items: end;
    }
    .project-button{
      display: flex;
      margin-top: 3.5rem;
      margin-bottom: 3.5rem;

      .project-button-head {
        flex-basis: 45%;
        z-index: 2;
        .project-button__img{
          text-align: right;
        }
        .project-button__circle{
          position: relative;
          z-index: 1;
          margin-left: auto;
          margin-right: auto;
          margin-top: -10rem;
          color: #414141;
          display: inline-block;
          padding: 1rem 2rem;
          width: 50%;
          text-align: center;
          &:before {
            content: "";
            display: block;
            position: absolute;
            height: 100%;
            width: 100%;
            background: #ffffff;
            z-index: -2;
            top: 0;
            left: 0;
            transform: skew(-20deg)
          }
        }

      }
      .project-button-body{
        z-index: 1;
        flex-basis: 55%;
        margin-top: 3rem;
        .project-button__text{
          top: 0;
          margin-left: -3em;
          width: 80%;
          padding-top: 3.5rem;
          padding-bottom: 3.5rem;
          padding-left: 5rem;
          position: relative;
          z-index: 1;
          color: #414141;
          display: inline-block;
          &:before {
            content: "";
            display: block;
            position: absolute;
            height: 100%;
            width: 100%;
            background: #ffffff;
            z-index: -2;
            top: 0;
            left: 0;
            transform: skew(-20deg);
          }
          .text {
            margin-bottom: 2.5rem;
          }
        }
      }
    }
    .project-button:hover{
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.25);
      transform: translateX(-0.1875em);
    }
    .button-right{
      text-align: center;
      display: block;
      margin-top: 3.5rem;
      margin-bottom: 3.5rem;
    }
  }

  .section_project {
    p {
      margin-bottom: 1.5rem;
    }
    .button{
      width: 15%;
    }
  }

  .section_entry {

    p {
      margin-bottom: 1.5rem;
    }

    .button{
      width: 15%;
    }
  }

  .section_sponsor {
    p {
      margin-bottom: 2.5rem;
    }
  }
  a{
    text-decoration: none;
    align-items: center;
  }
  .button {
    position: relative;
    //width: 15%;
    z-index: 1;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    color: #ffffff;
    display: inline-block;
    padding-top: 1rem;
    padding-bottom: 1rem;
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


  .section_entry {
    padding-top: 9rem;
    padding-bottom: 4.5rem;
    padding-left: 4.5rem;
    background-color: #e8e8e8;
  }
</style>
