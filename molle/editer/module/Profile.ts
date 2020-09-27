import {Prop, Vue} from "~/node_modules/nuxt-property-decorator";
import {IItemStoreData} from "~/molle/interface/ItemProfile";
import {FirestoreMgr} from "~/molle/editer/FirestoreMgr";
import {fsStore} from "~/utils/store-accessor";
import firebase from "firebase";

export class Profile extends Vue {
  @Prop() itemData?: IItemStoreData;
  @Prop() onUpdate?: (key: string, forceValue?: any) => void;
  stylePermission?: any;

  /**
   *
   * @param opt
   */
  checkChild(opt: any) {
    let batch = firebase.firestore().batch();

    for (let key in opt) {
      let def = opt[key];
      let id = this.itemData!.value[key] || FirestoreMgr.itemsRef.doc().id;
      let item = fsStore.items[id];
      if (!item) {
        let value = Object.assign({}, this.itemData!.value);
        value[key] = id;
        batch.set(FirestoreMgr.itemsRef.doc(id), def);
        batch.update(FirestoreMgr.itemsRef.doc(this.itemData!.id), "value", value);
      } else if (item.moduleId != def.moduleId) {
        //todo コンバート
        batch.set(FirestoreMgr.itemsRef.doc(id), def);
      }
    }
    batch.commit();
  }
}
