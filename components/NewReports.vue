<template lang="pug">
  .reports
    .reports__item(
      v-for="item in items"
    )
      a(:href="item.link")
        //記事タイトル
        h4.reports__item__title(v-html="item.title")
        //冒頭文
        p.reports__item__content(v-html="getContent(item.content)")
        //日付
        p(v-html="item.pubDate")
        //アカウント名
        p(v-html="item.creatorName")
        //アカウント画像
        img(:src="item.creatorImage")
        //画像
        img(:src="item.thumbnail")

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
    &__item {
      &__content {
      }
    }
  }
</style>
