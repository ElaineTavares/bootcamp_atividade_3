import './CampoTexto.css'

export default function CampoTexto({type, placeholder, valor, aoAlterado}) {

    const aoDigitado = (e) =>{
        aoAlterado(e.target.value)
        console.log(nome)
    }


  return (
    <div className="campo_texto">
        <input value={valor} onChange={aoDigitado} type={type} placeholder={placeholder} required />
    </div>
    
  )
}
