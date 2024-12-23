
import AluraQuizzLogo from './components/AluraQuizzLogo/AluraLogo'
import Card from './components/CardAlura/CardAlura'
import Footer from './components/Footer/Footer'
import homeStyle from "./App.module.css"
import { Link } from 'react-router-dom'

function App() {

  return (
    <main className={homeStyle.homeScreen} style={{ flex: 1 }}>
      <section className={homeStyle.container}>
        <div style={{ textAlign: "center", maxWidth: "350px", marginBottom: "24px" }}>
          <AluraQuizzLogo />
        </div>
        <Card headerTitle="Teste suas Habilidade">
          <div>
            <p style={{ marginBottom: "32px" }}>Teste todos os seus conhecimentos do universo da marvel</p>
            <input type='text' placeholder='Seu nome aqui :)'/>
            <Link to="/game" className={homeStyle.btn}>Jogar</Link>
          </div>
        </Card>
        <Footer />
      </section>
    </main>
  )
}

export default App
