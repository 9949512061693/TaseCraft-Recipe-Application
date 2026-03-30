import { Routes, Route } from 'react-router-dom'
import RegistrationForm from './pages/RegistrationForm'
import LoginForm from './pages/LoginForm'
import Home from './pages/Home'
import About from './pages/About'
import './App.css'

function App() {
  return (
    <div className="bg-card">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/register' element={<RegistrationForm />} />
        <Route path='/login' element={<LoginForm />} />
      </Routes>
    </div>
  )
}

export default App