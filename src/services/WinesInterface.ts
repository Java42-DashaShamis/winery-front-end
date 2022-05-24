import { Observable } from "rxjs";
import WineItem from "../models/WineItem";
export default interface WinesInterface {
    add(wine: WineItem): Promise<boolean>;
    remove(id: number): Promise<boolean>;
    update(id: number, newObj: WineItem): Promise<boolean>;
    get(id?: number): Observable<WineItem | WineItem[] |  null>;
}