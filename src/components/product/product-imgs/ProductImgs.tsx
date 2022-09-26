import React, { useEffect, useState } from 'react'
import { ApiUrl } from '../../../helpers/ApiUrl'

const ProductImgs = ({ product }: any) => {

    const [currentPhoto, setCurrentPhoto] = useState(product.product_avatar)
    let product_imgs: any = []
    // console.log(product.product_imgs);

    if (product.product_imgs) {
        product_imgs = [product.product_avatar].concat(product.product_imgs)
    }
    //else {

    // }
    //  product_imgs = [product.product_avatar].concat(product.product_imgs)
    useEffect(() => {
        setCurrentPhoto(product.product_avatar)
    }, [product])
    console.log(product, 'product');


    console.log(product_imgs, 'product_imgs');


    function delegationImg(e: any) {
        if (e.target.tagName === 'IMG' && e.target.className === 'ProductTable-img') {
            setCurrentPhoto(e.target.src)
        }

    }
    document.addEventListener('click', (e) => delegationImg(e))


    // console.log(product.product_avatar, '--');

    // console.log(currentPhoto);
    // console.log(ApiUrl + '/' + product_imgs[0], `ApiUrl + '\\/' + currentPhoto`);


    return (
        <>
            <div className='ProductTable-product_avatar-inner'>
                <img src={ApiUrl + '/' + currentPhoto} alt="Product" className='ProductTable-product_avatar' />
            </div>
            {
                product_imgs.length > 1 &&
                <div className="ProductTable-imgs-list-inner">
                    <ul className="ProductTable-imgs-list">
                        {product_imgs.map((product_img: any, index: any) => (
                            <React.Fragment key={index}>
                                <li className="ProductTable-imgs-list-item">
                                    <img src={ApiUrl + '/' + product_img} alt="Product" className="ProductTable-img" />
                                </li>
                            </React.Fragment>
                        ))
                        }
                    </ul>
                </div>
            }
        </>
    )
}

export default ProductImgs