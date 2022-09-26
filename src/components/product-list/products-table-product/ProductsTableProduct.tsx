import { ApiUrl } from '../../../helpers/ApiUrl'
import './ProductsTableProduct.scss'


type inProductType = {
    product_avatar: string,
    name: string,
    price: number
}
type productType = {
    product: inProductType
}

const ProductsTableProduct = ({ product }: productType) => {
    
    return (
        <>
            <div className="ProductsTable-product">
                <img src={ApiUrl + '/' + product.product_avatar} alt="no img" className="ProductsTable-product-img" />
                <div className='ProductsTable-product-info'>
                    <h2 className='ProductsTable-name'>{product.name}</h2>
                    <p className='ProductsTable-price'>${product.price}</p>
                </div>
            </div>
        </>
    )
}

export default ProductsTableProduct