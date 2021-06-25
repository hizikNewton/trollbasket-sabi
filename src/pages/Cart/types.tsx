export interface Cart {
    items:Array<Item>
}

type Item = {
    product:Product,
    qty:number
}