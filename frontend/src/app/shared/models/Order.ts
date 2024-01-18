import { CartItem } from "./Cartthem";

export class Order{
    id!:number;
    items!: CartItem[];
    totalPrice!:number;
    name!:string;
    adress!:string;
    createdAt!:string;
    status!:string;
}