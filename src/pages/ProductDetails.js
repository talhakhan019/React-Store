import React, { useState } from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from 'react-router-dom';
import alldata from '../productsData/alldata';
import ReactImageMagnify from 'react-image-magnify';
function ProductDetails() {
    const {id} = useParams();
    
    const title=alldata.map((cur) => {
      if(cur.id == id)
      {
        return cur.title;
      }
    })
    const imgsrc='.'+alldata.map((cur) => {
      if(cur.id == id)
      {
        return cur.imgsrc;
      }
    }).toString().replaceAll(',','');
    const price=alldata.map((cur) => {
      if(cur.id == id)
      {
        return cur.price;
      }
    })
    const description=alldata.map((cur) => {
      if(cur.id == id)
      {
        return cur.description;
      }
    })
    console.log(imgsrc);
  return (
    <>
    {/* {imgsrc} */}
        <div className='product-details'>
          <div className='product-details-box'>
            <div className='product-details-left'>
            {/* <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: imgsrc,
                        },
                        largeImage: {
                            src: imgsrc,
                            width: 1200,
                            height: 1200
                        },
                        enlargedImageContainerDimensions: {
                          width: '70%',
                          height: '100%'
                      }
                    }} /> */}
              <img src={imgsrc} alt="" />
            </div>
            <div className='product-details-right'>
                <div className='product-title'>{title}</div>

                <div className='product-description'>{description}</div>
                <div className='product-more-details'>
                  <div>
                    <span className='shade'>Condition</span>
                    <span>New</span>
                  </div>
                  <div>
                    <span className='shade'>Delivery</span>
                    <span>3-4 Days</span>
                  </div>
                  <div>
                    <span className='shade'>Availibility</span>
                    <span>In Stock</span>
                  </div>
                </div>
                <div className="product-price">
                  <span>Rs. {price}</span>
                </div>
                <div className="product-quantity">
                    <span>Quantity: </span>
                    <div>
                      <span className='inc-item'>+</span>
                      <span className='no-of-item'>1</span>
                      <span className='dec-item'>-</span>
                    </div>
                </div>
                <div className="product-buttons">
                  <button className='add-to-cart'>Add to Cart</button>
                </div>

            </div>
          </div>
        </div>

          {/* <div>ProductDetails{id}</div>
          {
            title
          }
          {
            imgsrc
          }
          {
            price
          } */}
    
    </>
    
  )
}

export default ProductDetails