import { Outlet } from "react-router-dom"
import Bag from "../Components/Bag"
import Footer from "../Components/Footer"
import HomeItems from "../Components/HomeItems"
import Navbar from "../Components/Navbar"
import Loader from "../Components/Loader"
import { useSelector } from "react-redux"

function App() {

  const fetchStatus = useSelector(store=>store.fetchStatus);
  
  return (
    <>
     <Navbar/>
    <main>
        <div className="items-container">
          {fetchStatus.currentlyFetching ? <Loader/> : <Outlet/>}
          
        </div>
    </main>
   <Footer/>

    </>
  )
}

export default App
