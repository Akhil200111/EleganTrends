import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Footer from './Components/Footer/Footer'
import Trending from './Components/Trends/Trending'
import { ThemeProvider } from './Context/ThemeContext'
import { Toaster } from 'react-hot-toast'
import PopularCollection from './Components/PopularCollection/PopularCollection'


function App() {
 

  return (
   <ThemeProvider>
    <Toaster position='top-center' />
    <Navbar />
    <Hero />
    <Trending />
    <PopularCollection />
    <Footer />
   </ThemeProvider>
  )
}

export default App
