import React from 'react'
import { FaStar } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { BagSliceActions } from '../store/BagSlice';


const HomeItems = ({item}) => {

  const bag = useSelector(store=>store.bag);
  const dispatch = useDispatch();
   
  const handleAdd = (e)=>{
    dispatch(BagSliceActions.addtoBag(item.id));
  }
  const handleRemove = ()=>{
    console.log(item.id)
    dispatch(BagSliceActions.removeFromBag(item.id))
  }

  return (
    <div>
       <div className="item-container">
      <img className="item-image" src={item.image} alt="item image"/>
      <div className="rating">
          ${item.rating.stars} <FaStar /> | ${item.rating.count}
      </div>
      <div className="company-name">${item.company}</div>
      <div className="item-name">${item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {!bag.includes(item.id) ? ( <button className="btn-add-bag" onClick={handleAdd}>Add to Bag</button>) : (<button className="btn-rem-bag" onClick={handleRemove}>Remove from Bag</button>)}
     
      
    </div>`
    </div>
  )
}

export default HomeItems
