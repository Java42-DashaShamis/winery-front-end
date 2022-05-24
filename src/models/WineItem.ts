type WineItem = {
    id?: number;
    img: string;
    name: string;
    year: number;
    grape: string;
    manufacturer: string;
    place: string;
    cost: number;
    number_of_bottles_store: number;
    number_of_bottles_cart?: number;
}
export default WineItem;