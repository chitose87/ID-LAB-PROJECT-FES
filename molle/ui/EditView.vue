<template lang="pug">
  .editView
    ItemListViewComp(
      v-if="pageData.main"
      :itemId="pageData.main"
    )
    .editView__body
      Box(
        v-if="pageData.main && fsStore.items"
        :itemData="fsStore.items[pageData.main]"
        :payload="fsStore.items"
      )
    ModulePropertyComp
      //BoxE(
      //  v-if="children.main && children.main.ref"
      //  :itemId="children.main"
      //)
    //ValueTreeComp(
    //  :pageData="pageData"
    //)
    style.
      [data-item-id="{{lsStore.storage.focusModuleId}}"] {
        outline: rgba(255, 0, 0, 0.6) 2px solid;
      }

    .bootstrap#bootstrap-container

</template>

<script lang="ts">
  import {Component, Prop, Vue, Watch} from "~/node_modules/nuxt-property-decorator";
  import firebase from "firebase";
  import {InitialValue, setMolleEditerModules} from "~/molle/editer/module";
  import {IItemStoreData} from "~/molle/interface/ItemProfile";
  import {IPageStoreData} from "~/molle/interface/IPageStoreData";
  import {Singleton} from "~/molle/Singleton";
  import {FirestoreMgr} from "~/molle/editer/FirestoreMgr";
  import ValueTreeComp from "~/molle/ui/ValueTreeComp.vue";
  import {lsStore, fsStore} from "~/utils/store-accessor";
  import ModulePropertyComp from "~/molle/ui/ModulePropertyComp.vue";
  import {Module} from "~/molle/ssr/module/Module";
  import ItemListViewComp from "~/molle/ui/ItemListViewComp.vue";

  @Component({
    components: {ItemListViewComp, ModulePropertyComp, ValueTreeComp}
  })
  export default class EditView extends Vue {
    lsStore = lsStore;
    fsStore = fsStore;
    store = Singleton.store;
    setMolleEditerModules = setMolleEditerModules();

    @Prop() pageData?: IPageStoreData;

    children = <{
      main: IItemStoreData,
    }>{};
    path: string = "loading";

    // constructor(props: any) {
    //   super(props);
    //   this.pageRef = firebase.firestore().doc(`pages/${this.pageData!.id}`);
    // }

    created() {
      lsStore.init();
      this.changePageData();
    }

    @Watch("pageData")
    changePageData(newer?: IPageStoreData, older?: IPageStoreData) {
      console.log("--changePageData", this.pageData);

      FirestoreMgr.currentPageData = this.pageData!;

      if (!this.pageData!.main) {
        // ルートコンテツエリアが未設定
        firebase.firestore().collection(`items`)
          .add(InitialValue.Box)
          .then((e) => {
            this.pageData!.ref.update({
              main: e.id
            });
          });
      } else {
        if (newer && older && (newer.main == older.main)) {
          return;
        }
        // FirestoreMgr.addlistener(
        //   this.pageData!.main,
        //   (itemData: IItemStoreData) => {
        //     this.$set(this.children, "main", itemData);
        //   }, {
        //     initial: InitialValue.Box,
        //     once: true,
        //     force: true,
        //     watcher: this,
        //   }
        // );
      }
    }

    mounted() {
      console.log("mounted", this.$route.query.id);

      this.$el.addEventListener("click", (e: any) => {
        for (let i = 0; i < e.path.length; i++) {
          let v = e.path[i].__vue__;
          if (v && v instanceof Module) {
            let module: Module = v;
            lsStore.update({key: "focusModuleId", value: module.$props.itemData.id});
            break;
          }
        }
      })
    }

    onClick(e: any) {
      console.log(e);
    }

    destroyed() {
    }
  }
</script>

<style lang="scss">
  .editView {
    display: flex;

    &__body {
      flex: 1;
    }
  }

  .module-e {
    position: relative;
    min-height: 1rem;

    //margin-top: 3rem;
    //margin-bottom: 3rem;

    &.editing {
      padding-top: 0.5rem;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-bottom: 1rem;

      margin: 0;
    }

  }
</style>
