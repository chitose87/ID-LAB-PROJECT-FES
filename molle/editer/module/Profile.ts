import {Prop, Vue} from "~/node_modules/nuxt-property-decorator";
import {IItemStoreData} from "~/molle/interface/ItemProfile";

export class Profile extends Vue {
  @Prop() itemData?: IItemStoreData;
  @Prop() onUpdate?: (key: string, forceValue?: any) => void;
  stylePermission?: any;
}
