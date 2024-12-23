import AluraQuizzLogo from '../components/AluraQuizzLogo/AluraLogo'
import Card from '../components/CardAlura/CardAlura'
import Footer from '../components/Footer/Footer'
import homeStyle from "../App.module.css"
import config from "../../config.json"
import Alternative from '../components/Alternative/Alternative.tsx'

import { useState } from "react";
import { useEffect } from 'react';

function Game() {

  const StatusGame = {
    Error: 'Errou',
    Success: 'Acertou',
    Ending: "Fim de Jogo",
    Default: '',
  }

  const [valorAcertos, setValorAcertos] = useState(0);
  const [valorErros, setValorErros] = useState(0);
  const [valorNumeroQuestoesIndex, setValorNumeroQuestoesIndex] = useState(0);
  const [valorQuestoesStatus, setValorQuestoesStatus] = useState(StatusGame.Default);
  const [valorNumeroQuestoes, setValorNumeroQuestoes] = useState(1);
  const questions = config.questions;


  useEffect(() => {
    if (valorNumeroQuestoes == questions.length) {
      setValorQuestoesStatus(StatusGame.Ending)
      alert(`Fim de Jogo, você acertou ${valorAcertos} de ${questions.length}.`)
      setValorQuestoesStatus(StatusGame.Default)
      window.location.replace("/")
    }
  }, [valorAcertos, valorErros]);



  return (
    <main
      className={homeStyle.homeScreen}
      style={{ flex: 1 }}
    >
      <section className={homeStyle.container}>
        <div style={{
          textAlign: "center",
          maxWidth: "350px",
          marginBottom: "24px"
        }}>
          <AluraQuizzLogo />
        </div>
        <Card
          headerTitle={`Pergunta ${valorNumeroQuestoesIndex + 1} de ${questions.length} `}
        >
          <div>
            <p
              style={{ marginBottom: "12px" }}
            >
              {questions[valorNumeroQuestoesIndex].title}
            </p>
            <p>
              {questions[valorNumeroQuestoesIndex].description}
            </p>
            <form className={homeStyle.items} onSubmit={(e) => {
              e.preventDefault();
              const dados: any = event?.target;
              const formDados = new FormData(dados)
              const alternativa = Object.fromEntries(formDados.entries())

              const isCorrect: any = alternativa.alternative === questions[valorNumeroQuestoesIndex].answer


              if (isCorrect) {
                setValorAcertos(valorAcertos + 1)
                setValorQuestoesStatus(StatusGame.Success)
              }

              if (!isCorrect) {
                setValorErros(valorErros + 1)
                setValorQuestoesStatus(StatusGame.Error)
              }

              setTimeout(() => {
                setValorNumeroQuestoesIndex(valorNumeroQuestoesIndex + 1)
                setValorNumeroQuestoes(valorNumeroQuestoes + 1)
                if (valorNumeroQuestoes == questions.length) return

                setValorQuestoesStatus(StatusGame.Default)

              }, 1000)
            }

            } >

              {
                questions[0].alternatives.map((item: string, index: any) => {
                  return (
                    <Alternative item={item} numero={index} />
                  )
                })
              }

              <button className={homeStyle.btn}>Confirmar</button>
            </form>
            <p style={{ paddingTop: "15px", textAlign: "center", color: valorQuestoesStatus === StatusGame.Success ? "green" : "red" }}>
              {valorQuestoesStatus}
            </p>

          </div>
        </Card>
        <Footer />
      </section>
    </main>
  )
}

export default Game