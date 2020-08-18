<template lang="pug">
  .module-e(
    v-if="itemData.moduleId"
    :class="{editing:isEditing()}"
  )
    ModuleEditorComp.module-editor--box(
      :itemData="itemData"
      :valueProfile="valueProfile"
      :styleProfile="styleProfile")

    .grobal_footer(
      :id="itemData.tagId"
      :class="getClass(itemData)"
    )

      section.section-footer
        .section-footer__body
          .section-footer__head
            p
              | Powered by
              br
              | ID Lab
          .section-footer__foot
            img.img(src="/imgs/id.lab.svg" alt="id")
            img.img(src="/imgs/note.svg" alt="note")
            img.img(src="/imgs/twitter.svg" alt="twitter")
            img.img(src="/imgs/insta.svg" alt="insta")
        .section-footer__small
          small ©️ ID Lab

</template>

<script lang="ts">
  import {Component} from "~/node_modules/nuxt-property-decorator";
  import StyleComp from "~/molle/editer/ui/StyleComp.vue";
  import {StyleAlign, StyleProfile} from "~/molle/interface/StyleProfile";
  import {ValueProfile, ValueType} from "~/molle/interface/ValueProfile";
  import ModuleEditorComp from "~/molle/editer/ui/ModuleEditorComp.vue";
  import {InitialValue} from "~/molle/editer/module/index";
  import {ModuleEGroup} from "~/molle/editer/module/ModuleEGroup";

  @Component({
    components: {ModuleEditorComp, StyleComp}
  })
  export default class GrobalFooterE extends ModuleEGroup {
    //value setting
    valueProfile: ValueProfile = new ValueProfile({
      types: [ValueType.group]
    });

    //style setting
    styleProfile: StyleProfile = new StyleProfile({
      border: false,
      align: StyleAlign.None,
      theme: {default: "", select: ["", "test"]},
      color: {default: "", select: ["", "dark"]},
    });

    created() {
      this.init(InitialValue.Group("GrobalFooter"));
    }

    //Unique Methods
  }
</script>

<style lang="scss">
  .card {
    box-shadow: $shadow;
  }

  .section-footer__body {
    text-align: center;
    background-color: #B48362;
    padding-top: 4.5rem;
    padding-bottom: 4.5rem;
    .section-footer__head {
      margin-bottom: 3%;
      p {
        color: white;
      }
    }
    .section-footer__foot {
      display: flex;
      justify-content: center;
      img {
        margin-left: 3%;
        margin-right: 3%;
        width: auto;
        height: 70px;
      }
    }
  }
  .section-footer__small{
    background-color: #00DDDD;
    text-align: center;
  }

</style>
