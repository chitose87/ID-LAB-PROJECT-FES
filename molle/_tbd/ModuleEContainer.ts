import firebase from "~/node_modules/firebase";
import {ModuleE} from "~/molle/_tbd/ModuleE";
import {FirestoreMgr} from "~/molle/FirestoreMgr";
// import {InitialValue} from "~/molle/editer/module/index";
import {IItemStoreData} from "~/molle/interface/ItemProfile";
import {lsStore} from "~/utils/store-accessor";

export class ModuleEContainer extends ModuleE {
  children = <{ id: string, moduleId: string }[]>[];

  init(initialValue: any, onUpdate?: () => void) {
    // super.init(initialValue, () => {
    //   this.children.length = 0;
    //   for (let i in this.itemData!.value) {
    //     let childId = this.itemData!.value[i];
    //
    //     FirestoreMgr.itemsRef.doc(childId).get()
    //       .then((snap: firebase.firestore.DocumentSnapshot) => {
    //         if (!snap.exists) {
    //           //todo
    //           return;
    //         }
    //         this.$set(this.children, i, {
    //           id: childId,
    //           moduleId: snap.data()!.moduleId
    //         });
    //         onUpdate && onUpdate();
    //       });
    //   }
    // });
  }

  addChild(data: IItemStoreData) {
    console.log("addChild", data);
    FirestoreMgr.itemsRef
      .add(data)
      .then((ref: firebase.firestore.DocumentReference) => {
        this.itemData!.value.push(ref.id);
        FirestoreMgr.itemUpdate(this.itemId!, {value: this.itemData!.value});
        lsStore.updateEditing({id: ref.id, flag: true});
      });
  }

  /**
   *
   * @param id
   */
  indexSwapChild(id: string) {
    let value = this.itemData!.value.concat();

    // console.log("indexSwapChild", id)
    for (let i = 0; i < this.children.length - 1; i++) {
      let child: any = this.children[i];
      // console.log(child.id, id)
      if (child.id == id) {
        this.children[i] = this.children[i + 1];
        this.children[i + 1] = child;

        value[i] = value[i + 1];
        value[i + 1] = child.id;

        // console.log(value)

        this.$set(this, "children", this.children);
        FirestoreMgr.itemUpdate(this.itemId!, {value: value});
        break;
      }
    }
  }

  /**
   *
   * @param id
   */
  deleteChild(id: string) {
  //   console.log("deleteChild", id);
  //   this.$set(this, "children",
  //     this.children.filter((via: { id: string, moduleId: string }) => via.id != id)
  //   );
  //   FirestoreMgr.itemUpdate(this.itemData!.id, {
  //     value: this.itemData!.value.filter((via: string) => via != id)
  //   });
  }
}
