import './CampoTexto.css'

const CampoTexto = (props) => {
    const placeholderModificada = `${props.placeholder}...`


    const aoDigitado = (event) => {
        props.aoAlterado(event.target.value)
    }
    
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} placeholder= {placeholderModificada} required={props.obrigatorio}/>
        </div>
    )
}

export default CampoTexto 