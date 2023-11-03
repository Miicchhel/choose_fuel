import './App.css'
import logo from './assets/logo.png'
import Formulario from './components/Formulario'
import Logo from './components/Logo'

function App() {
  return (
    <main className='container'>
      <Logo className="logo" src={logo} alt="Logo da calculadora de gasolina" />

      <h1 className='title'>Qual é a melhor opção?</h1>

      <Formulario />
    </main>
  )
}

export default App
