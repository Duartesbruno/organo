import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {

    return (
        props.colaboradores.length ?
        <section className='time' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador key={colaborador.nome} {...colaborador} corDefundo={ props.corPrimaria}/> )}
            </div>
        </section>
        : ''
    )
}

export default Time