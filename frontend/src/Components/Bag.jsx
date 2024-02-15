import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import BagSummary from './BagSummary'
import BagItem from './BagItem'
import { useSelector } from 'react-redux'
import store from '../store/store'

const Bag = () => {

  const items = useSelector(store=>store.items);
  const bagitems = useSelector(store=>store.bag);

  const finalItems = items.filter(item=>{
    const itemIndex = bagitems.indexOf(item.id);
    return itemIndex>=0;
  })

  return (
   <>
   
      <div className="bag-page">
        <div className="bag-items-container">
           
           {finalItems.map(item=>(
            <BagItem item={item}/>
           ))}
        </div>
            <BagSummary/>
      </div>
   </>
  )
}

export default Bag
