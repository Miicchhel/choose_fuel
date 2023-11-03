import './App.css'
import logo from './assets/logo.png'
import Logo from './components/Logo'

function App() {
  return (
    <main className='container'>
      <Logo className="logo" src={logo} alt="Logo da calculadora de gasolina" />
    </main>
  )
}

export default App
