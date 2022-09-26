type str = string

type productValues = {
    name: str,
    price: number,
    description: str,
    product_avatar: str
}

export type productType = {
    products: productValues[],
    // productsAmount: number
}

