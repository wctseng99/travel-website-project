import './App.css'
import Destination from './Components/Destination/Destination'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Middle from './Components/Middle/Middle'
import Navbar from './Components/Navbar/Navbar'
import Portifolio from './Components/Portifolio/Portifolio'
import Questions from './Components/Questions/Questions'
import Reviews from './Components/Reviews/Reviews'
import Subscribe from './Components/Subscribe/Subscribe'

function App() {


  return (
    <dev>
      <Navbar />
      <Home />
      <Middle />
      <Destination />
      <Portifolio />
      <Reviews />
      <Questions />
      {/* <Subscribe /> */}
      <Footer />
    </dev>
  )
}

export default App
