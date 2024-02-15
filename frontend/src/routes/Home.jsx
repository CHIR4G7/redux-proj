import React, { useEffect } from 'react'
import HomeItems from '../Components/HomeItems'
import {useDispatch, useSelector} from 'react-redux';
import { itemActions } from '../store/ItemSlice';
import { fetchStatusActions } from '../store/fetchStatusSlice';

const Home = () => {

  //two differnt slices
  const items = useSelector(store=>store.items);
  const fetchStatus = useSelector(store=>store.fetchStatus);

  const dispatch = useDispatch();

  const url = 'https://cloneback.onrender.com';

  useEffect(()=>{
    if(fetchStatus.fetchDone)
    {
      return;
    }
    dispatch(fetchStatusActions.markFetchingStarted());//to mark the fetchinf has started

    fetch(`${url}/items`).then((res)=>res.json()).then(({items})=>{

      dispatch(fetchStatusActions.markFetchDone());//to mark that fetching is complete
      dispatch(fetchStatusActions.markFetchingDone());

      dispatch(itemActions.addInitialItems(items[0]));//dispatch this action of the item slice

    })

  },[fetchStatus])

  return (
    <div className='items-container'>
      {items.map((item)=>(
        <HomeItems key={item.id} item={item}/>
      ))}
      
    </div>
  )
}

export default Home
