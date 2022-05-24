import firebase from "firebase/compat/app";
import { catchError, Observable, of } from "rxjs";
import appFire from "../config/firebase-config";
import  WineItem  from "../models/WineItem";
import WinesInterface from "./WinesInterface";
import { collectionData, docData } from "rxfire/firestore";
import 'firebase/firestore';

export default class WinesFireImpl implements WinesInterface {
    fireCollection!: firebase.firestore.CollectionReference;
    constructor(collectionName: string) {
        this.fireCollection = appFire.firestore().collection(collectionName);
    }

    private async exists(id: string): Promise<boolean> {
        const thisObj = await this.fireCollection.doc(id).get();
        return thisObj.exists;
    }

    private async setWine(id: string, obj: WineItem): Promise<boolean> {
        let res: boolean;
        try {
            await this.fireCollection.doc(id).set(obj);
            res = true;
        } catch(error) {
            res = false;
        }
        return res;
    }

    async add(obj: WineItem): Promise<boolean> {
        const id = (obj.id as number).toString();
        if(await this.exists(id)) {
            return false;
        }
        return this.setWine(id,obj);
    }
    async remove(id: number): Promise<boolean> {
        const idStr = id.toString();
        if(!await this.exists(idStr)){
            return false;
        } try {
            await this.fireCollection.doc(idStr).delete();
            return true;
        } catch (error) {
            return false;
        }
    }
    async update(id: number, newObj: WineItem): Promise<boolean> {
        const idStr = id.toString();
        if(!await this.exists(idStr)){
            return false;
        }
        return this.setWine(idStr, newObj);
    }
    get(id?: number): Observable<WineItem | WineItem[] | null> {
        let res: Observable<WineItem | WineItem[] | null>;
        if (id) {
            const idStr = id.toString();
            
            res = docData<WineItem>(this.fireCollection.doc(idStr) as any);
        } else {
            
            res = collectionData<WineItem>(this.fireCollection as any);
        }
        return res.pipe(catchError(err => of(null)));
    }
    
    
}