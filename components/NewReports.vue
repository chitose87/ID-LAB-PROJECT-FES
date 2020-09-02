<template lang="pug">
  .reports
    .reports__item(
      v-for="item in items"
    )
      a.reports-button(:href="item.link")
        .reports-button-head
          .reports-button-head__img
            img(:src="item.thumbnail")
          .reports-button-head__circle
            p(v-html="item.creatorName")
        .reports-button-body
          .reports-button-body__text
            p(v-html="item.pubDate")
            h4.reports-button-body__title(v-html="item.title")
            .hoge
              a.button.button-right.isSp(href="#")
                span 続きを読む
        //冒頭文
          p.reports__item__content(v-html="getContent(item.content)")
        //日付
        //アカウント画像
          img(:src="item.creatorImage")


</template>

<script lang="ts">
  import {Component, Vue} from "~/node_modules/nuxt-property-decorator";

  @Component({
    components: {}
  })
  export default class NewReports extends Vue {
    items: any[] = [];

    mounted() {
      fetch('https://us-central1-project-fes.cloudfunctions.net/noteRss?text=hashtag/cat')
        .then(response => response.json())
        .then(json => {
          this.$set(this, "items", json.items);
        })
        .catch(e => {
          console.log(e)
        });
    }

    getContent(content: string) {
      let $div = document.createElement("div");
      $div.innerHTML = content;
      $div.querySelectorAll("iframe, a, img").forEach((item) => {
        item.remove();
      });
      $div.querySelectorAll("br + br").forEach((item) => {
        item.remove();
      });

      return $div.innerHTML;
    }
  }
</script>

<style lang="scss">
  .reports {
    .reports-button {
      margin-top: 3.5rem;
      margin-bottom: 3.5rem;
      @include mediaquery-not-sm {
        display: flex;
      }
      &-head {
        margin-top: 8rem;
        z-index: 2;
        @include mediaquery-not-sm {
          flex-basis: 45%;
        }
        @include mediaquery-sm {
          margin-bottom: -5rem;
          text-align: center;
        }

        &__img {
          @include mediaquery-not-sm {
            text-align: right;
          }

          img {
            width: 100%;
            object-fit: cover;
            @include mediaquery-not-sm {
              height: 306px;
            }
            @include mediaquery-sm {
              width: 120px;
            }
          }
        }

        &__circle {
          @include mediaquery-not-sm {
            position: relative;
            z-index: 1;
            margin-right: auto;
            margin-left: -2.5rem;
            margin-top: -15rem;
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
          @include mediaquery-sm {
            p {
              color: #000000;
            }
          }
        }
      }

      &-body {
        z-index: 1;
        @include mediaquery-not-sm {
          flex-basis: 55%;
          margin-top: 5rem;
        }
        &__text {
          top: 0;
          width: 100%;
          position: relative;
          z-index: 0;
          color: #414141;
          display: inline-block;
          @include mediaquery-not-sm {
            padding-top: 3.5rem;
            padding-bottom: 3.5rem;
            padding-left: 5rem;
          }
          @include mediaquery-sm{
            padding-top: 12rem;
          }
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
            transform-origin: top left;
            @include mediaquery-not-sm {
              transform: skew(-20deg);
            }
            @include mediaquery-sm {
              transform: skewY(15deg);
            }
          }
          .text {
            margin-bottom: 2.5rem;
          }
        }
      }

      transition: all 2s ease-in-out 0s;


      &:hover {
        @include mediaquery-not-sm {
          transform: translateX(-0.3em);
          filter: opacity(0.76);
          transition: all 0.4s ease-in-out 0s;


          .reports-button-head__img,
          .reports-button-head__circle:before,
          .reports-button-body__text:before {
            box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 1);
          }
        }
      }

      .button-right {
        text-align: center;
        display: block;
        margin-top: 3.5rem;
        margin-bottom: 3.5rem;
      }


      h4 {
        margin-top: 2.5rem;
        margin-bottom: 0;
      }
      .hoge {
        text-align: center;

        .button {
          position: relative;
          z-index: 1;
          text-align: center;
          margin-top: 0.75rem;
          margin-bottom: 0.75rem;
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


          .button-right {
            margin: 0;

            &:before {
              transform: skew(-20deg)
            }

            &:hover {
              color: #ffffff;
              &:before {
                background: #414141;
              }
            }
          }
        }
      }
    }
  }

</style>
