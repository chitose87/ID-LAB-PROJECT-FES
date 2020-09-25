import {Vue} from "~/node_modules/vue-property-decorator";
import Box from "~/molle/editer/module/Box.vue";
import Column from "~/molle/editer/module/Column.vue";
import Headline from "./Headline.vue";
import Paragraph from "~/molle/editer/module/Paragraph.vue";
import ColumnBox from "~/molle/editer/module/ColumnBox.vue";
import Card from "~/molle/editer/module/Card.vue";
import Picture from "~/molle/editer/module/Picture.vue";
import ItemOptionSpace from "~/molle/editer/module/item-option/Space.vue";
import ListCardItem from "~/molle/editer/module/ListCardItem.vue";

import ItemOptionSelect from "~/molle/editer/module/item-option/Select.vue";
import firebase from "firebase";
import ItemOptionButton from "~/molle/editer/module/item-option/Button.vue";
import ItemOptionInput from "~/molle/editer/module/item-option/Input.vue";
import BoxProfile from "~/molle/editer/module/BoxProfile.vue";
// import SectionHeadE from "~/molle/editer/module/SectionHeadE.vue";
// import ButtonsE from "~/molle/editer/module/ButtonsE.vue";
// import GrobalHeaderE from "~/molle/editer/module/GrobalHeaderE.vue";
// import GrobalFooterE from "~/molle/editer/module/GrobalFooterE.vue";
// import SectionMvE from "~/molle/editer/module/SectionMvE.vue";

// export const molleModules = {
  // ButtonsE: ButtonsE,
  // SectionHeadE: SectionHeadE,
  // GrobalHeaderE: GrobalHeaderE,
  // GrobalFooterE: GrobalFooterE,
  // SectionMvE: SectionMvE,
// };

export const molleModules = {
  Box: {
    ref: Box,
    profile: BoxProfile,
    def: c("Box", "children")
  },
  Paragraph: {
    ref: Paragraph,
    // profile: BoxProfile,
    def: c("Paragraph", "text")
  },

  // Column: {
  //   ref: Column,
  //   // profile: BoxProfile,
  //   def: c("Box", "children")
  // },
  // ColumnBox: ColumnBox,
  // Headline: Headline,
  // Picture: Picture,
  // Card: Card,
  // ListCardItem: ListCardItem,
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
  //item-options
  Vue.component("ItemOptionSelect", ItemOptionSelect);
  Vue.component("ItemOptionButton", ItemOptionButton);
  Vue.component("ItemOptionInput", ItemOptionInput);
  Vue.component("ItemOptionSpace", ItemOptionSpace);

  //modules
  for (let key in molleModules) {
    // @ts-ignore
    Vue.component(key, molleModules[key].ref);
    // @ts-ignore
    if (molleModules[key].profile) {
      // @ts-ignore
      Vue.component(molleModules[key].profile.options.name, molleModules[key].profile);
    }
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
