export interface ICart {
    carts: Cart[]
    total: number,
    discountedTotal: number,
    userId: number,
    totalProducts: number,
    totalQuantity: number,
}
export interface Cart {
    id: number,
    products: Product[],
}
export  interface Product {
    id: number,
    title: string,
    price: number,
    quantity: number,
    total: number,
    discountPercentage: number,
    discountedTotal: number,
    thumbnail: string,
}