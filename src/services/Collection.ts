import _ from "lodash";
import { map, Observable } from "rxjs";
import { maxId, minId } from "../config/wine-config";
import WineItem from "../models/WineItem";
import WinesInterface from "./WinesInterface";

export default class Collection{
    
    constructor(private collection: WinesInterface){
    }
    async addItem(item: WineItem ): Promise <WineItem | null> {
        if(!item.id){
            item.id = _.random(minId, maxId);
        }
        const res = await this.collection.add(item);
        return res ? item : null  
    }
    async bulkAdd(items: WineItem[]) {
        for(let item of items){
            await this.collection.add(item);
        }
    }
    async removeItem(id: number): Promise <boolean> {
        return await this.collection.remove(id)
    }
    async updateItem(id: number, newItem: WineItem): Promise <boolean> {
        return await this.collection.update(id,newItem)
    }
    getItem(id: number): Observable <WineItem | null> {
        return this.collection.get(id) as Observable <WineItem | null>
    }
    getAllItems(): Observable <WineItem[] |  null> {
        return (this.collection.get() as Observable <WineItem | null>).pipe(map((collection: any) => !collection ? null : collection))
    }
}