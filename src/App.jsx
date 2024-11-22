import { useState } from 'react'
// import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/footer'
import Banner from './components/Banner/Banner'
import RowList from './components/rows/rowList/RowList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Banner/>
     <RowList/>
     <Footer/>
    </>
  )
}

export default App
