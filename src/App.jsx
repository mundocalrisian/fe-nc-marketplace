import { useState } from 'react'
import Header from './components/Header';
import Home from './components/Home';
import CategoriesList from './components/Categories-lists';
import SingleItem from './components/Single-item';
import ItemCard from './components/Item-card';
import { Routes, Route} from 'react-router-dom'
import SellItem from './components/Sell-item'
import UserAccount from "./components/User";

function App () {
  const [count, setCount] = useState(0)

  return (
    <>
      <section>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/categories' element={<CategoriesList/>}/>
          <Route path='/categories/:category_name' element={<CategoriesList/>}/>
          <Route path='/sell' element={<SellItem/>}/>
          <Route path='/user' element={<UserAccount/>}/>
        </Routes>
        
        <SingleItem/> 
        
      </section>
    </>
  )
}

export default App
