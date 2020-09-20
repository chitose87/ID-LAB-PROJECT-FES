import {Module, VuexModule, Mutation, Action} from 'vuex-module-decorators'
import {IItemStoreData} from "~/molle/interface/ItemProfile";
import {Vue} from "~/node_modules/nuxt-property-decorator";

@Module({name: 'fsStore', stateFactory: true, namespaced: true})

export default class fsStore extends VuexModule {
  items = <{ [key: string]: IItemStoreData }>{};

  @Mutation
  updateItem(arg: { id: string, itemData: IItemStoreData }) {
    Vue.set(this.items, arg.id, arg.itemData);
  }
}
