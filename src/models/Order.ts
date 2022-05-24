import UserData from "./UserData";
import WineItem from "./WineItem";

type Order = {
    id?: number,
    winesOrder: WineItem[],
    userData: UserData,
    isVerified: boolean,
    tobeDelivered: boolean
}
export default Order;