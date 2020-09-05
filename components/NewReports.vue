<template lang="pug">
  .reports
    .reports__item(
      v-for="item in items"
    )
      p.reports__item__circle(v-html="item.creatorName")
      a(:href="item.link")
        .reports__item__head
          .reports__item__img
            img(:src="item.thumbnail")
        .reports__item__body
          p.reports__item__date(v-html="item.pubDate")
          p.reports__item__title(v-html="item.title")
            //.hoge
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
      fetch('https://us-central1-project-fes.cloudfunctions.net/noteRss?text=hashtag/project_fes')
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
    @include mediaquery-not-sm {
      padding-left: 3rem;
      padding-right: 3rem;
    }
    @include mediaquery-sm {
      display: flex;
      flex-wrap: wrap;
      margin-left: -0.5rem;
      margin-right: -0.5rem;
      padding-top: 1.5rem;
      padding-bottom: 2rem;
    }

    &__item {
      position: relative;
      padding-bottom: 2rem;

      @include mediaquery-not-sm {
        max-width: 80%;
        margin: 3.5rem auto;
      }
      @include mediaquery-sm {
        width: 50%;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
      }

      > a {
        text-decoration: none;
        color: $color-text;
        @include mediaquery-not-sm {
          display: flex;
          align-items: flex-start;
        }
      }

      &__head {
        z-index: 2;
        @include mediaquery-not-sm {
          flex: 1.5;
        }
        @include mediaquery-sm {
          padding: 0 0.5rem;
          position: relative;
        }
      }

      &__body {
        position: relative;
        z-index: 1;
        @include mediaquery-not-sm {
          flex: 2;
          margin-top: 2.5rem;
          padding-top: 3rem;
          padding-bottom: 2rem;
          padding-left: 2.5rem;
          padding-right: 2.5rem;
        }
        @include mediaquery-sm {
          padding-top: 4rem;
          padding-left: 0.5rem;
          padding-right: 0.5rem;
          margin-top: -3.5rem;
        }

        &:before {
          content: "";
          display: block;
          position: absolute;
          height: 100%;
          width: 100%;
          background: $color-white;
          z-index: -2;
          top: 0;
          left: 0;
          transform-origin: top left;
          @include mediaquery-not-sm {
            transform: skew(-$skew2);
          }
          @include mediaquery-sm {
            transform: skewY(15deg);
          }
        }
      }

      &__img {
        position: relative;
        padding-top: 75%;

        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          //@include mediaquery-not-sm {
          //  height: 306px;
          //}
          //@include mediaquery-sm {
          //  width: 120px;
          //}
        }
      }

      &__circle {
        position: absolute;
        z-index: 6;
        display: inline-block;
        margin: 0;

        &:before {
          content: "";
          display: block;
          position: absolute;
          height: 100%;
          width: 100%;
          background: $color-white;
          z-index: -2;
          top: 0;
          left: 0;
          transform: skew(-$skew2);
        }

        @include mediaquery-not-sm {
          font-size: 35px;
          bottom: 0;
          left: -3rem;
          padding: 1.5rem 3rem;
        }
        @include mediaquery-sm {
          top: -1.5rem;
          left: 0;
          padding: 0.5rem 1rem;
        }
      }


      &__date {
        @include mediaquery-not-sm {
          font-size: 25px;
        }
        @include mediaquery-sm {
          font-size: 14px;
          margin-bottom: 0.5rem;
        }
      }

      &__title {
        @include mediaquery-not-sm {
          font-size: 25px;
        }
        @include mediaquery-sm {
          font-size: 18px;
        }
      }

      transition: all 2s ease-in-out 0s;


      &:hover {
        @include mediaquery-not-sm {
          transform: translateX(-0.3em);
          filter: opacity(0.76);
          transition: all 0.4s ease-in-out 0s;

          .reports__item__img,
          .reports__item__circle:before,
          .reports__item__body:before {
            box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 1);
          }
        }
      }


      /*.button-right {
        text-align: center;
        display: block;
        margin-top: 3.5rem;
        margin-bottom: 3.5rem;
      }*/

      /*h4 {
        margin-top: 2.5rem;
        margin-bottom: 0;
      }*/

      /*.hoge {
        text-align: center;

        .button {
          position: relative;
          z-index: 1;
          text-align: center;
          margin-top: 0.75rem;
          margin-bottom: 0.75rem;
          margin-left: auto;
          margin-right: auto;
          color: $color-white;
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
              transform: skew(-$skew2)
            }

            &:hover {
              color: $color-white;

              &:before {
                background: #414141;
              }
            }
          }
        }
      }*/
    }
  }

</style>
