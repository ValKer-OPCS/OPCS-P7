import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Layout/Header/Header.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'

function App() {


  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
        {/* <Route path="*" element={<Error />} />
        <Route path="/rental/:id" element={<Rental />} />  */}
      </Routes>
    </Router>
  )
}

export default App
