import React, { useState } from 'react'
import './Form.css'
import Botao from './Botao'
import CampoTexto from './CampoTexto'

export default function Form() {

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [nomeDoLivro, setNomeDoLivro] = useState("")
  const [mensagem, setMensagem] = useState("")
  const [msgSucesso, setMsgSucesso] = useState("")

  const dadosEnviados = (e) =>{
    e.preventDefault()
    console.log(`Dados enviados ${nome}, ${email}, ${nomeDoLivro} ${mensagem}`)
    setMsgSucesso("Dados enviados com sucesso!")
 
    setNome("")
    setEmail("")
    setNomeDoLivro("")
    setMensagem("")

  }
  return (
    <section className="formulario">
        <form onSubmit={dadosEnviados}>
            <h2>Quer seu livro na lista? Mande pra gente!</h2>
            <h2 className='msg_sucesso'>{msgSucesso}</h2>
            <CampoTexto 
              type="text" 
              placeholder="Informe o seu nome"
              valor={nome}
              aoAlterado={valor => setNome(valor)}
            />
            <CampoTexto 
              type="email" 
              placeholder="Informe o seu e-mail"
              valor={email}
              aoAlterado={valor => setEmail(valor)}
            />
            <CampoTexto 
              type="text" 
              placeholder="Informe o nome do livro"
              valor={nomeDoLivro}
              aoAlterado={valor => setNomeDoLivro(valor)}
            /> 
            <textarea 
            rows={4} 
            placeholder='Adoraríamos o seu feedback, para melhorar ainda mais!'
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            />
            <Botao>Enviar</Botao>
        </form>
    </section>
  )
}
