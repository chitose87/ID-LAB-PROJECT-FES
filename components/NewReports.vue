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
          //margin-left: auto;
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
        margin-top: 2.5rem;

        .reports-button__text {
          top: 0;
          //margin-left: -3em;
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


      &:hover{
        transform: translateX(-0.1875em);
        filter: brightness(1.2);
        transition: all 0.4s ease-in-out 0s;


        .reports-button__img,
        .reports-button__circle:before,
        .reports-button__text:before{
          box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.25);
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

</style>
