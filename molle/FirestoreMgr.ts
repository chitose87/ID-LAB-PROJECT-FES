import {IItemStoreData} from "~/molle/interface/ItemProfile";
import firebase from "firebase";
import {IPageStoreData} from "~/molle/interface/IPageStoreData";

interface Listener {
  watcher?: any;
  callBack: (itemData: IItemStoreData) => void,
}

/**
 * 重複してonSnapshotしないように、（重複しても問題ない気もするけども）
 * またunsubscribeを簡単に管理できるように。
 * opt.forceによって、初回にかならずレスポンスを得られるように。
 * opt.initialは、無かった場合上書き、すでに登録されていたら無視される
 */
export class FirestoreMgr {
  static listenerDic: { [key: string]: Listener[] } = {};
  static unsubscribeDic: { [key: string]: () => void } = {};
  static currentPageData?: IPageStoreData;
  private static _itemsRef: firebase.firestore.CollectionReference;
  static get itemsRef(): firebase.firestore.CollectionReference {
    if (!this._itemsRef) {
      this._itemsRef = firebase.firestore().collection("items");
    }
    return this._itemsRef;
  }

  /**
   *
   * @param id
   * @param data
   * @param opt
   */
  static itemUpdate(
    id: string,
    data: any,
    opt?: any
  ) {
    console.log("itemUpdate", id)
    // console.trace()
    let batch = firebase.firestore().batch();
    // data.updateTime = firebase.firestore.FieldValue.serverTimestamp();
    batch.update(FirestoreMgr.itemsRef.doc(id), data);

    //
    if (this.currentPageData) {
      // batch.update(this.currentPageData.ref, {
      //   updateTime: firebase.firestore.FieldValue.serverTimestamp()
      // });
    }
    batch.commit().then((e) => {
      console.log(e);
    })
  }

  /**
   *
   * @param ref
   * @param callBack
   * @param opt
   */
  // static addlistener(
  //   ref: firebase.firestore.DocumentReference,
  //   callBack: (itemData: IItemStoreData) => void,
  //   opt?: {
  //     initial?: any,
  //     once?: boolean,
  //     force?: boolean,
  //     watcher?: any,
  //   }
  // ) {
  //   let listenerList = this.listenerDic[id] || [];
  //   let first = !listenerList.length;
  //
  //   if (opt && opt.watcher) {
  //     for (let listener of listenerList) {
  //       if (listener.watcher == opt.watcher) {
  //         return;
  //       }
  //     }
  //   }
  //   // console.log("addlistener", id);
  //
  //   //watchersに追加
  //   let listener: Listener = {
  //     callBack: callBack,
  //   };
  //
  //   //once
  //   if (opt && opt.once) {
  //     if (!opt.watcher) opt.watcher = {};
  //     listener.callBack = (itemData: IItemStoreData) => {
  //       callBack(itemData);
  //       this.removelistener(id, opt.watcher);
  //     }
  //   }
  //
  //   //登録
  //   if (opt && opt.watcher) listener.watcher = opt.watcher;
  //   listenerList.push(listener);
  //   this.listenerDic[id] = listenerList;
  //
  //   //
  //   if (!first) {
  //     // ---------すでにwatchされている
  //     let data = Singleton.store.items[id];
  //
  //     if (!data) {
  //       //throw new Error("dataが無い" + listenerList.length);
  //
  //       //opt.initialがある場合セット
  //       // if (opt && opt.initial) {
  //       //   data = Object.assign({ref: ref}, opt.initial);
  //       //   Singleton.store.items[id] = data;
  //       //   //todo firesoterに上げる？
  //       //   console.log(data)
  //       // }
  //     } else {
  //       //初回でレスポンスするかどうか
  //       if (opt && opt.force) {
  //         listener.callBack(data);
  //       }
  //     }
  //
  //   } else {
  //     // ---------watchされていない
  //
  //     this.unsubscribeDic[id] = ref.onSnapshot((snap: firebase.firestore.DocumentSnapshot) => {
  //       //空だった場合
  //       if (!snap.exists) {
  //         if (opt && opt.initial) {
  //           ref.set(opt.initial);
  //         } else {
  //           //todo　空で、初期化もしない場合
  //           console.log("空で、初期化もない", ref.path);
  //         }
  //         return;
  //       }
  //
  //       let v = Singleton.addItem(snap);
  //       for (let item of this.listenerDic[id]) {
  //         item.callBack(v);
  //       }
  //     });
  //   }
  // }

  /**
   * idで外す。watcherが指定されてないと全部外す。
   * @param id
   * @param watcher
   */
  // static removelistener(id: string, watcher?: any) {
  //   // console.log(this.listener[id])
  //   if (watcher) {
  //     this.listenerDic[id] = this.listenerDic[id].filter((item: Listener) => item.watcher != watcher);
  //   } else {
  //     this.listenerDic[id].length = 0;
  //   }
  //   if (this.listenerDic[id].length == 0 && this.unsubscribeDic[id]) {
  //     this.unsubscribeDic[id]();
  //     delete this.unsubscribeDic[id];
  //   }
  // }

  // /**
  //  * watcherのやつを全部外す。
  //  * @param watcher
  //  */
  // static removelistenerByWatcher(watcher: any) {
  //   for (let id in this.listenerDic) {
  //     this.removelistener(id, watcher);
  //   }
  // }
}
