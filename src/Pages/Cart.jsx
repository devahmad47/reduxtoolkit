import React from 'react'
// here i am goinog to import items from store which are added to card
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';
const Cart = () => {
  const dispatch=useDispatch()
  const product=useSelector(state=>state.cart)
  const handleRemove=(productId)=>{
dispatch(remove(productId));
alert("Product Remove Successfully!")

  }
  return (
    <div>
        <h1 className="carousel-captions p-4 ">Cart</h1>
        <div className='cartWrapper'>
{
  product.map(product=>(
    <div key={product.id}className='cartCard'>
    <img src={product.front_image} alt=""/>
    <h5>{product.name}</h5>
    <h5>{product.price}</h5>
   <label>Quantity:</label><input type="number" defaultValue={1} min="1" />
    <button className='btn' onClick={()=>handleRemove(product.id)}>Remove</button>
    </div>
  ))
}
        </div>
    </div>
  )
}

export default Cart
