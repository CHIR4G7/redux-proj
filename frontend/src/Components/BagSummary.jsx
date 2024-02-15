import React from 'react'
import { useSelector } from 'react-redux'

const BagSummary = () => {

  const bag = useSelector(store=>store.bag);
  const items = useSelector(store=>store.items)

  const finalItems = items.filter(item=>{
    const itemIndex = bag.indexOf(item.id);
    return itemIndex>=0;
  })

  let totalMRP = 0;
  let totalDiscount = 0;
  let finalPayment = 0;

  finalItems.forEach(item=>{
    totalMRP += item.current_price;
    totalDiscount+=item.discount_percentage
  })

  finalPayment = totalMRP-totalDiscount+99;

    return (
        <div className="bag-summary">
        <div className="bag-details-container">
          <div className="price-header">PRICE DETAILS ({bag.length} Items) </div>
          <div className="price-item">
            <span className="price-item-tag">Total MRP</span>
            <span className="price-item-value">₹{totalMRP}</span>
          </div>
          <div className="price-item">
            <span className="price-item-tag">Discount on MRP</span>
            <span className="price-item-value priceDetail-base-discount">
              -₹{totalDiscount}
            </span>
          </div>
          <div className="price-item">
            <span className="price-item-tag">Convenience Fee</span>
            <span className="price-item-value">₹99</span>
          </div>
          <hr />
          <div className="price-footer">
            <span className="price-item-tag">Total Amount</span>
            <span className="price-item-value">₹{finalPayment}</span>
          </div>
        </div>
        <button className="btn-place-order">
          <div className="css-xjhrni">PLACE ORDER</div>
        </button>
      </div>
    )
}

export default BagSummary
