<template lang="pug">
  .module.card(
    v-if="itemData"
    :id="itemData.tagId"
    :class="getClass(itemData)"
    :style="getStyle(itemData)"
    :data-item-id="itemData.id"
  )
    .card__body
      .card__title
        Headline(
          :itemData="payload[itemData.value.title]"
          :payload="payload"
          :notDeleted="true"
        )
      .card__description
        Paragraph(
          :itemData="payload[itemData.value.description]"
          :payload="payload"
          :notDeleted="true"
        )
    .card__img
      Picture(
        :itemData="payload[itemData.value.img]"
        :payload="payload"
        :notDeleted="true"
        :required="true"
      )


</template>

<script lang="ts">
  import {Component, Vue} from "~/node_modules/nuxt-property-decorator";
  import StyleComp from "~/molle/ui/property/StyleComp.vue";
  import ModuleEditorComp from "~/molle/_tbd/ModuleEditorComp.vue";
  import {Module} from "~/molle/module/Module";
  import Paragraph from "~/molle/module/primitive/Paragraph.vue";
  import Headline from "~/molle/module/primitive/Headline.vue";
  import Picture from "~/molle/module/primitive/Picture.vue";

  @Component({
    components: {Picture, Headline, Paragraph, ModuleEditorComp, StyleComp}
  })
  export default class CardE extends Module {
    //Unique Methods
  }
</script>

<style lang="scss">
  .card {
    box-shadow: $shadow;
    padding: 1rem;
    margin-top: 3rem;
    margin-bottom: 3rem;

    &__title {

    }

    &__description {

    }

    &__img {

    }

    //theme
    &.t-img-top {
      display: flex;
      flex-direction: column;

      .card {
        &__body {
          order: 1;

        }

        &__title {
          .headline {
            margin-top: 1.5rem;
          }
        }

        &__description {
        }

        &__img {
          order: 0;


        }
      }
    }

    &.t-col {
      display: flex;

      .card {
        &__body {
          order: 1;
          flex: 1;
        }

        &__title {
          .headline {
            margin-top: 0;
          }
        }

        &__description {
        }

        &__img {
          order: 0;
          flex-shrink: 0;
          flex-grow: 0;
          flex-basis: 280px;
          margin-right: 2rem;

          .module {
            margin: 0;
          }
        }
      }
    }

    //color
    &.dark {
      background-color: $color-gray-900;
      color: $color-text-white;

      &__title {

      }

      &__description {

      }

      &__img {

      }

    }
  }
</style>
