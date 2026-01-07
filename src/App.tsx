import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Loader from './components/Loader'

function App() {

  return (
    <Router>
      <div>
        <Loader />
        <Navbar />
        <Hero />
      </div>
    </Router>
  )
}

export default App
