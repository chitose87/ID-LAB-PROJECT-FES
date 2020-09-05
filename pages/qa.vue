<template lang="pug">
  .qa-page
    section.section-detail
        .section-detail
          .section-detail__bg
            .section-detail__catch
          .section-detail__body
            .section-detail__head
                .title
                  h1 Q&A
                .text
                  p
                    | こちらではPROJECT FESについて多く集まった質問などをまとめて掲示しています。
                  p
                    | プロジェクト団体の方に向けたサポート情報なども掲載しているので是非ご活用ください。
            .section-detail__main
                .box
                  .question
                    h3  Q PROJECT FESは誰が運営しているの？
                  .answer
                    p
                      | 有志の学生で運営しています。
                    P
                      | 運営に関する活動はnoteにて発信しているので、詳しく
                      a(href="#") 運営noteページ
                      | へ！

                .box
                  .question
                    h3 Q noteアカウントってどうやって作るの？
                  .answer
                    p
                      | note公式webサイトから作ることができます。
                    p
                      | note公式webサイトは
                      a(href="#") こちら
                      | から
                .box
                  .question
                    h3 Q 参加申し込みは誰でもできるの？
                  .answer
                    p
                      | 昭和女子大学に通っている学生さんは申し込み可能です。
                    p
                      | 参加申し込みの際は代表の方の情報など必要事項の入力をお願い致します。
                    p
                      | 皆さんのご参加お待ちしています。
            .section-detail__foot
                p
                  | -質問は随時更新して掲載予定です-
        .section-info
          .section-info__head
            .title
              h3 Support Information
            .text
              p こちらでは応募してくれたプロジェクトから質問の多かった内容についてまとめた記事を載せています。
              p noteのアカウント作成や記事のまとめ方など参考になるおすすめのサイトの紹介をまとめていきます。
              p 少しでも参加プロジェクトの皆さんの力になれるよう運営も日々サポートしていきます！
          .section-info__main
            .bg
              .boxs
                .box
                  .title
                    p 【Note.アカウント作成について】
                  .text
                    p https://swuprojectfes………………………………………
                .box
                  .title
                    p 【Note.記事まとめ】
                  .text
                    p https://swuprojectfes………………………………………
                .box
                  .title
                    p 【おすすめのレイアウト】
                  .text
                    p https://swuprojectfes………………………………………
                .box
                  .title
                    p 【画像の貼り付けについて】
                  .text
                    p https://swuprojectfes………………………………………
        .section-notice
          .section-notice__head
            .title
              h3 お知らせ
            .text
              p PROJECT FESに参加者歓迎
              p 「PROJECT FES座談会」
          .section-notice__about
            .title
              h5 「PROJECT FES座談会」とは…
            .text
              p PROJECT FES参加団体に向けて悩み相談やみんなで互いのプロジェクトや活動について月一回話しましょう座談会です！
              p 運営も参加する座談会なのでPRの悩みや活動記録などみんなで考えて話しましょう！そして、この座談会を通し
              p 日々違う方面で活動しているプロジェクトの活動内容や目標などを知ることのできる機会が増えればいいなと思っています。
          .section-notice__plans
            .title
              h5 初回座談会予定
            .text
              p 2020.◯◯.◯◯ (△)
              p 18:15~20:00
              p @オンライン
            .foot
              p 皆さんのご参加お待ちしています。


</template>

<script lang="ts">
  import {Component, Vue} from "~/node_modules/nuxt-property-decorator";

  @Component({
    layout: "static",
    components: {}
  })
  export default class QaPage extends Vue {

    mounted() {
    }
  }
</script>

<style lang="scss">
  .qa-page {
    text-align: center;
    .section-detail{
      .section-detail__bg {
        position: sticky;
        top: 0;
        height: 0;
        z-index: -1;
        .section-detail__catch {
          position: relative;
          z-index: 1;
          margin: 0 auto;
          padding-top: 4.5rem;
          height: 100vh;

          &:after {
            content: "";
            display: block;
            position: absolute;
            bottom: 0px;
            left: 0px;
            width: 200%;
            height: 100%;
            margin-left: -150px;
            -webkit-transform-origin: left center;
            -ms-transform-origin: left center;
            transform-origin: left center;
            -webkit-transform: rotate(-10 deg);
            -ms-transform: rotate(-10deg);
            transform: rotate(-10deg);
            z-index: -1;
            background-color: #8CBCBF;
          }
        }
      }

        .section-detail__body {
          .section-detail__head {
            .text {
              margin-top: 3.5rem;

              p {
                margin-top: 1.5rem;
              }
            }
          }

          .section-detail__main {
            padding-top: 3.5rem;
            display: flex;
            flex-direction: column;
            margin-left: 5rem;
            .box{
              width: 530px;
              margin: auto;
              display: inline-block;
              text-align: left;
              border-bottom: dotted white;
              a{
                color: #000000;
              }
            }
          }
        }
      .section-detail__foot{
        margin-top: 3.5rem;
      }
    }
    .section-info{
      background-color: #ffffff;
      padding-top: 4.5rem;
      .section-info__head{
          .text {
            margin-top: 3.5rem;

            p {
              margin-top: 1.5rem;
            }
          }
      }
      .section-info__main{
        .bg {
          position: relative;
          z-index: 1;
          margin: 0 auto;
          padding-top: 4.5rem;
          width: 70%;
          height: 30%;

          &:after {
            content: "";
            display: block;
            position: absolute;
            bottom: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            -webkit-transform-origin: left center;
            -ms-transform-origin: left center;
            transform-origin: left center;
            -webkit-transform: rotate(5deg);
            -ms-transform: rotate(5deg);
            transform: rotate(5deg);
            z-index: -1;
            background: #B48362;
          }
        }
        .boxs{
          display: flex;
          flex-direction: column;
          .box {
            display: inline-block;
            text-align: left;
            margin: auto;
          }
        }
      }
    }
    .section-notice{
      background-color: #ffffff;
      .section-notice__head{
        .text{
          margin-top: 3.5rem;
          p{
            margin-top: 1.5rem;
          }
        }
      }
      .section-notice__about{
        text-align: center;
        width: 80%;
        margin: auto;
        background: #8CBCBF;
        border-radius: 20px;
        margin-top: 2.5rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
        h5{
          color: #ffffff;
          margin-bottom: 2.5rem;
        }
        p{
          color: #ffffff;
          margin-bottom: 1.5rem;
        }
      }
      .section-notice__plans{
        margin-top: 2rem;
        margin-bottom: 2.5rem;
        .text{
          margin-top: 2.5rem;
          margin-bottom: 2rem;
          p{
            margin-bottom: 1.5rem;
          }
        }
      }
    }


  }
</style>
