import {Module, VuexModule, Mutation} from 'vuex-module-decorators'
import {contentStore} from "~/utils/store-accessor";
import {IValueStoreData} from "~/molle/_tbd/ValueProfile";

@Module({name: 'content', stateFactory: true, namespaced: true})

export default class content extends VuexModule {
  pages: any = {};
  // static presetOutlines: any = {
  //   paragraph: {name: "Paragraph"},
  //   headline: {name: "Headline"},
  //   box: {name: "Box"},
  // };
  items: any = {};//横断データ　古いデータを含む可能性あり
  // outlines: any = content.presetOutlines;
  values: any = {};//横断データ　古いデータを含む可能性あり

  // valueRefs: any = [];

  @Mutation
  updatePages(firestoreQuerySnapshot: any) {
    console.log("--updatePages")
    this.pages = {};
    firestoreQuerySnapshot.forEach((firestoreQueryDocumentSnapshot: any) => {
      let v = firestoreQueryDocumentSnapshot.store();
      v.id = firestoreQueryDocumentSnapshot.id;
      this.pages[v.id] = v;
    });
  }

  @Mutation
  addItem(itemData: any) {
    this.items[itemData.id] = itemData;
  }

  @Mutation
  updateItems(firestoreQuerySnapshot: any) {
    this.items = Object.assign({}, this.items);
    firestoreQuerySnapshot.forEach((firestoreQueryDocumentSnapshot: any) => {
      let v = firestoreQueryDocumentSnapshot.store();
      v.path = firestoreQueryDocumentSnapshot.ref.path;
      v.id = firestoreQueryDocumentSnapshot.id;
      this.items[v.id] = v;
    });
  }

  // @Mutation
  // removeItem(id: string) {
  //   delete this.items[id];
  // }

  // @Mutation
  // updateOutlines(firestoreQuerySnapshot: any) {
  //   this.outlines = Object.assign({}, content.presetOutlines);
  //   firestoreQuerySnapshot.forEach((firestoreQueryDocumentSnapshot: any) => {
  //     this.outlines[firestoreQueryDocumentSnapshot.id] = firestoreQueryDocumentSnapshot.store();
  //   });
  // }

  @Mutation
  updateValues(firestoreQuerySnapshot: any) {
    // this.values = Object.assign({}, firestoreQuerySnapshot);
    console.log("--updateValues")
    // this.values = {};
    // let values = Object.assign({}, this.values);
    // let values = Object.assign({}, this.values);
    firestoreQuerySnapshot.forEach((firestoreQueryDocumentSnapshot: any) => {
      let v = firestoreQueryDocumentSnapshot.store();
      this.values[firestoreQueryDocumentSnapshot.id] = {
        path: firestoreQueryDocumentSnapshot.ref.path,
        name: v.name,
        type: v.type,
        value: v.value,
        extendsId: v.extendsId ? v.extendsId : "",
        // id: firestoreQueryDocumentSnapshot.id,
        // ref:firestoreQueryDocumentSnapshot.ref,
      };
    });
    //

    content.updateTree(this.values);
    // this.values = values;
    // this.values = content.updateTree(values);
  }

  @Mutation
  removeValue(id: string) {
    delete this.values[id];
    content.updateTree(this.values);
  }

  static updateTree(values: any) {
    // extends tree
    // reset
    for (let key in values) {
      let item: IValueStoreData = values[key];
      item.childrenId = [];
    }
    // set
    for (let key in values) {
      let item: IValueStoreData = values[key];
      if (item.extendsId) {
        values[item.extendsId].childrenId.push(key)
      }
    }

    // todo
    // superValue
    let func = (item: IValueStoreData, _superValue: any) => {
      // console.log(item, _superValue);
      //itemのchildrenに_superValueを設定する
      if (!item.childrenId!.length) return;

      let v;//次のsuperValue
      if (item.value) {
        if (typeof item.value == "object") {
          v = Object.assign({}, _superValue);
          Object.assign(v, item.value);
        } else {
          v = item.value;
        }
      } else {
        v = _superValue;
      }
      // console.log(v);

      for (let id of item.childrenId!) {
        values[id].superValue = v;
        func(values[id], v);
      }
    };

    //拡張無しのitemからスタート
    for (let key in values) {
      let item: IValueStoreData = values[key];

      if (!item.extendsId) {
        func(item, item.value);
      }
    }
    return values;
  }
}
