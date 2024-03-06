import { useState } from 'react'
import Header from './components/Header';
import Home from './components/Home';
import CategoriesList from './components/Categories-lists';
import SingleItem from './components/Single-item';
import ItemCard from './components/Item-card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section>
        <Header/>
        <Home/>
        <CategoriesList/>
        <SingleItem/>
        <ItemCard/>
      </section>
    </>
  )
}

export default App
