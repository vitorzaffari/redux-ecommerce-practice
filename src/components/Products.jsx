import React, { useEffect, useState } from 'react'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { getProducts } from '../store/productSlice';

const Products = () => {
    const dispath = useDispatch()
    const { data: products, status } = useSelector(state => state.products)

    useEffect(() => {

        dispath(getProducts());

    }, [])

    if(status === `Loading`){
        return <h2>Loading...</h2>
    }
    if(status === `error`){
        return <h2>Oops, it seems like something went wrong :(</h2>
    }
    
    function addToCart(item) {
        dispath(add(item));
    }

    const cards = products.map(item => (

        <div key={item.id} className='card'>
            <div className='image-div'>
                <img className='card-image' src={item.image} alt={item.name} />
            </div>
            <div className='card-info'>
                <div>
                    <p className='category'>{(item.category).toUpperCase()}</p>
                    <h3 className='item-title'>{item.title}</h3>
                    <span className='item-price'>$ {item.price}</span>
                </div>
                <p className='description'>{item.description}</p>
                <div className='button-rating-div'>
                    <button className='add-button' onClick={() => addToCart(item)}>Add to cart</button>
                    <span className='rating'>{item.rating.rate} <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z" /></svg></span>
                </div>
            </div>
        </div>

    ))

    return (
        <>
            <div className='cards-container'>
                {cards ? cards : <p>There are no products! </p>}
            </div>
        </>
    )
}

export default Products