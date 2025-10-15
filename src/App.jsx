import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Layout/Header/Header.jsx'
import Footer from './Layout/Footer/Footer.jsx'
import Home from './Pages/Home/Home.jsx'
import About from './Pages/About/About.jsx'
import Error from './Pages/Error/Error.jsx'
import Rental from './Pages/Rental/Rental.jsx'

function App() {


  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />        
        <Route path="/rental/:id" element={<Rental />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
