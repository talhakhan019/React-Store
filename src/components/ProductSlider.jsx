import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
function EachProduct({id,title,imgsrc,price}){
  const link = '/products/' + id;
    return(
        <>
        <Link className="each-product" to= {link}>
            <div className="image-div"><img src={imgsrc} alt="" /></div>
            <div className="product-title">{title}</div>
            <div className="product-price">{price}</div>
        </Link>
        </>
    )
}
function ProductSlider({title,list}) {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 8
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };
      
  return (
    <>
    
        <div className="product-slider mySwiper">
            <span className='slider-title'>{title}</span>
            <Carousel className="product-slider-box" responsive={responsive}>
                {
                    list.map((cur,ind) => {
                        return(
                            <EachProduct key={ind} id={cur.id} title={cur.title} imgsrc={cur.imgsrc} price={cur.price}/>
                        )
                    })
                }
            </Carousel>
        </div> 
    </>
  )
}

export default ProductSlider