import { useSelector } from "react-redux";
import UserData from "../models/UserData";
import WineItem from "../models/WineItem";
import { userdataSelector } from "../redux/store";
import Collection from "../services/Collection";
import WinesFireImpl from "../services/WinesFireImpl";

export const minId = 100000000;
export const maxId = 999999999;

//const url = 'http://localhost:8080/winery';
export const shop = new Collection(new WinesFireImpl('wines'));//(new WinesAxiosImpl(url));
//const userdata: UserData = useSelector(userdataSelector);
export const cart = new Collection(new WinesFireImpl('cart'));//(new WinesAxiosImpl(`${url}/cart/${userdata.displayName}`, userdata));