import { PayloadAction } from "@reduxjs/toolkit";
import  Order  from "../models/Order";
import UserData from "../models/UserData";
import  WineItem  from "../models/WineItem";
import { SET_CODE_ACTION, SET_ORDERS_ACTION, SET_USER_ACTION, SET_WINES_ACTION } from "./actions";

export const winesReducer = (wines: WineItem[] = [], action: PayloadAction<WineItem[]>): WineItem[] => {
    return action.type === SET_WINES_ACTION ? action.payload : wines
}
export const userdataReaducer = (userData: UserData = {username: "", isAdmin: false, displayName: ""}, action: PayloadAction<UserData>): UserData => {
    return action.type === SET_USER_ACTION ? action.payload : userData
}
export const codeReducer = (code: boolean = true, action: PayloadAction<boolean>): boolean => {
    return action.type === SET_CODE_ACTION ? action.payload : code
}
export const ordersReducer = (orders: Order[] = [], action: PayloadAction<Order[]>): Order[] => {
    return action.type === SET_ORDERS_ACTION ? action.payload : orders
}