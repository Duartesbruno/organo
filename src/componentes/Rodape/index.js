import './Rodape.css'

const Rodape = () => {
    console.log(process.env);
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <img src={`${process.env.PUBLIC_URL}/imagens/fb.png`} alt='facebook' />
                    </li>
                    <li>
                        <img src={`${process.env.PUBLIC_URL}/imagens/tw.png`} alt='twitter' />
                    </li>
                    <li>
                        <img src={`${process.env.PUBLIC_URL}/imagens/ig.png`} alt='instagram' />
                    </li>
                </ul>
            </section>
            <section>
                <img src={`${process.env.PUBLIC_URL}/imagens/logo.png`} alt='logo' />
            </section>
            <section>
                <p>Desenvolvido por Alura.</p>
            </section>
        </footer>
    )
}

export default Rodape