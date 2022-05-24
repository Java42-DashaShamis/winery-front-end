import { combineReducers } from "redux";
import UserData from "../models/UserData";
import  WineItem  from "../models/WineItem";
import { codeReducer, ordersReducer, userdataReaducer, winesReducer } from "./reducers";
import  Order  from "../models/Order";
import { configureStore } from "@reduxjs/toolkit";

export type ReducersType = {
    wines: WineItem[],
    userdata: UserData,
    code: boolean,
    orders:Order[]
}
const reducers = combineReducers<ReducersType>({
    wines: winesReducer,
    userdata: userdataReaducer,
    code: codeReducer,
    orders: ordersReducer
})
export const store = configureStore({reducer: reducers});
export const winesSelector = (state:ReducersType): WineItem[] => state.wines;
export const userdataSelector = (state: ReducersType): UserData => state.userdata;
export const codeSelector = (state: ReducersType): boolean => state.code
export const ordersSelector = (state: ReducersType): Order[] => state.orders
