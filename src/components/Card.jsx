import React from 'react'
import './Card.css'

export default function Card({capaDoLivro, nomeDoLivro, nomeDoAutor, generoDoLivro}) {
  return (
    <div className='card'>
        <img src={capaDoLivro} alt="" />
        <div className="rodape">
            <h3>{nomeDoLivro}</h3>
            <h3>{nomeDoAutor}</h3>
            <h4>{generoDoLivro}</h4>
        </div>
    </div>
  )
}
