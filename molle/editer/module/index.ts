import {Vue} from "~/node_modules/vue-property-decorator";
import {setMolleModules} from "~/molle/ssr/module";
import BoxE from "~/molle/editer/module/BoxE.vue";
import ColumnE from "~/molle/editer/module/ColumnE.vue";
import HeadlineE from "./HeadlineE.vue";
import ParagraphE from "~/molle/editer/module/ParagraphE.vue";

import ItemOptionSelect from "~/molle/editer/module/item-option/Select.vue";
import firebase from "firebase";
import ItemOptionButton from "~/molle/editer/module/item-option/Button.vue";
import ItemOptionInput from "~/molle/editer/module/item-option/Input.vue";
import ColumnBoxE from "~/molle/editer/module/ColumnBoxE.vue";
import CardE from "~/molle/editer/module/CardE.vue";
import PictureE from "~/molle/editer/module/PictureE.vue";
import ItemOptionSpace from "~/molle/editer/module/item-option/Space.vue";
import ListCardItemE from "~/molle/editer/module/ListCardItemE.vue";
import SectionHeadE from "~/molle/editer/module/SectionHeadE.vue";
// import ButtonsE from "~/molle/editer/module/ButtonsE.vue";
import GrobalHeaderE from "~/molle/editer/module/GrobalHeaderE.vue";
import GrobalFooterE from "~/molle/editer/module/GrobalFooterE.vue";
import SectionMvE from "~/molle/editer/module/SectionMvE.vue";

export const molleEditerModules = {
  BoxE: BoxE,
  ColumnE: ColumnE,
  ColumnBoxE: ColumnBoxE,
  HeadlineE: HeadlineE,
  ParagraphE: ParagraphE,
  PictureE: PictureE,
  // ButtonsE: ButtonsE,

  CardE: CardE,
  ListCardItemE: ListCardItemE,
  SectionHeadE: SectionHeadE,
  GrobalHeaderE: GrobalHeaderE,
  GrobalFooterE: GrobalFooterE,
  SectionMvE: SectionMvE,
};

export const InitialValue = {
  Box: c("Box", "children"),

  Column: c("Column", "children"),
  ColumnBox: c("Box", "children"),

  Headline: c("Headline", "text", {
    option: {
      lv: "h3"
    }
  }),
  Paragraph: c("Paragraph", "text"),
  Buttons: c("Buttons", "buttons"),
  Picture: c("Picture", "picture"),

  Group: (moduleId: string) => c(moduleId, "group"),
} as const;
export type InitialValue = typeof InitialValue[keyof typeof InitialValue];

export function setMolleEditerModules() {
  setMolleModules();

  //item-options
  Vue.component("ItemOptionSelect", ItemOptionSelect);
  Vue.component("ItemOptionButton", ItemOptionButton);
  Vue.component("ItemOptionInput", ItemOptionInput);
  Vue.component("ItemOptionSpace", ItemOptionSpace);

  //modules
  for (let key in molleEditerModules) {
    // @ts-ignore
    Vue.component(key, molleEditerModules[key]);
  }
}

/**
 * Create InitialValue
 * @param moduleId
 * @param type
 * @param opt
 */
function c(moduleId: string, type: string, opt?: any) {
  let v: any = {
    moduleId: moduleId,
    type: type,
    tagId: "",
    tagClass: "",
    style: {},
    class: {},
    option: {},
    createTime: firebase.firestore.FieldValue.serverTimestamp()
  };
  switch (type) {
    case "children":
      v.value = [];
      break;
    case "group":
      v.value = {};
      break;
    case "picture":
      v.value = {src: "https://placehold.jp/150x150.png"};
      break;
    case "text":
      v.value = "Lorem ipsum...";
      break;
    case "button":
      v.value = {
        href: "https://placehold.jp/",
        label: "BUTTON",
      };
      break;
  }
  if (opt) {
    for (let key in opt) {
      v[key] = opt[key];
    }
  }
  return v;
}
