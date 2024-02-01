import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import SendMoney from './pages/SendMoney'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'

function App() {
 return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/send" element={<SendMoney />} />
        <Route path="*" element={<NotFound/>}></Route> 
      </Routes>
    </Router>
 )
}

export default App
