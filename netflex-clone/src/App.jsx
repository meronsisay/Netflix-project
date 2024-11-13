import { useState } from 'react'
// import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/footer'
import Banner from './components/Banner/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Banner/>
     <Footer/>
    </>
  )
}

export default App
