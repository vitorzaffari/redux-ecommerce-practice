import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice'

const Cart = () => {

  const cartProducts = useSelector(state => state.cart)
  const dispatch = useDispatch()
  function removeItem(id){
    dispatch(remove(id))
  }

  const cards = cartProducts.map(item => (
    <div key={item.id} className='cart-card'>
      <img src={item.image} alt={item.title} width={100} height={100} />
      <p>{item.title}</p>
      <p>$ {item.price}</p>
      <button className='remove-button' onClick={() => removeItem(item.id)}>Remove</button>
    </div>

  ))

  console.log(cartProducts)
  return (
    <div className='cart-container'>
      {cards ?? cards}
    </div>
  )
}

export default Cart