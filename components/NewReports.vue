<template lang="pug">
  .reports
    .reports__item(
      v-for="item in items"
    )
      a.reports-button(:href="item.link")
        .reports-button-head
          .reports-button__img
            img(:src="item.thumbnail")
          .reports-button__circle
            p(v-html="item.creatorName")
        .reports-button-body
          .reports-button__text
            p(v-html="item.pubDate")
            h4.reports-button__title(v-html="item.title")
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
    @include mediaquery-not-sm {
      .reports-button {
        display: flex;
        margin-top: 3.5rem;
        margin-bottom: 3.5rem;

        &-head {
          flex-basis: 45%;
          z-index: 2;

          .reports-button__img {
            text-align: right;

            img {
              width: 100%;
              height: 306px;
              object-fit: cover;
            }
          }

          .reports-button__circle {
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

        }

        &-body {
          z-index: 1;
          flex-basis: 55%;
          margin-top: -2rem;

          .reports-button__text {
            top: 0;
            width: 100%;
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
              transform-origin: top left;
              transform: skew(-20deg);
            }

            .text {
              margin-bottom: 2.5rem;
            }
          }
        }

        transition: all 2s ease-in-out 0s;


        &:hover {
          transform: translateX(-0.3em);
          filter: opacity(0.76);
          transition: all 0.4s ease-in-out 0s;


          .reports-button__img,
          .reports-button__circle:before,
          .reports-button__text:before {
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
    }

    @include mediaquery-sm {

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

</style>
