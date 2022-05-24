import { PayloadAction } from "@reduxjs/toolkit";
import { cart, shop } from "../config/wine-config";
import  Order  from "../models/Order";
import UserData from "../models/UserData";
import  WineItem  from "../models/WineItem";

export const SET_WINES_ACTION = 'wines/set';
export const SET_USER_ACTION = 'user/set';
export const SET_CODE_ACTION = 'code/set';
export const SET_CART_ACTION = "cart/set";
export const SET_ORDERS_ACTION = 'orders/set';

export const codeSet = (code: boolean): PayloadAction<boolean> =>
    ({ type: SET_CODE_ACTION, payload: code });
export const userSet = (user: UserData): PayloadAction<UserData> => 
    ({ type: SET_USER_ACTION, payload: user });
export const winesSet = (wines: WineItem[] | null): PayloadAction<WineItem[] | null> =>
    ({type: SET_WINES_ACTION, payload: wines});
export const cartSet = (wines: WineItem[] | null): PayloadAction<WineItem[] | null> => 
    ({type: SET_CART_ACTION, payload: wines});
export const ordersSet = (orders: Order[] | null): PayloadAction<Order[] | null> => 
    ({type: SET_ORDERS_ACTION, payload: orders});

export const add = (wine: WineItem, isAdmin: boolean): (dispatch: any) => void => {
    return async (dispatch) => {
        let result;
        try {
            if(!isAdmin){
                result = !!await cart.addItem(wine);
            }else{
                result = !!await shop.addItem(wine); 
            }
        } catch (err) {
            result = false;
        }
        dispatch(codeSet(result))
    }
}
export const remove = (id: number, isAdmin: boolean): (dispatch: any) => void => {
    return async (dispatch) => {
        let result;
        try {
            if(!isAdmin){
                result = await cart.removeItem(id);
            }else{
                result = await shop.removeItem(id);
            }
        } catch (err) {
            result = false;
        }
        dispatch(codeSet(result))
    }
}
export const update = (id: number, wine: WineItem, isAdmin: boolean): (dispatch: any) => void => {
    return async (dispatch) => {
        let result;
        try {
            if(!isAdmin){
                result = await cart.updateItem(id, wine);
            }else{
                result = await shop.updateItem(id, wine); 
            } 
        } catch (err) {
            result = false;
        }
        dispatch(codeSet(result))
    }
}
export const addAllWines = (wines: WineItem[], isAdmin: boolean): (dispatch: any) => void => {
    return async (dispatch) => {
        let result;
        try {
            if(!isAdmin){
                await cart.bulkAdd(wines);
            }else{
                await shop.bulkAdd(wines);
            }
            result = true
        } catch (err) {
            result = false;
        }
        dispatch(codeSet(result))
    }
}

export const buy = (wines: WineItem[]): (dispatch: any) => void => {
    return async (dispatch) => {
        let result;
        try {
            await cart.bulkAdd(wines);
            result = true
        } catch (err) {
            result = false;
        }
        dispatch(codeSet(result))
    }
}