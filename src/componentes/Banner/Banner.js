import './Banner.css'

export const Banner = () => {
    //parece HTML mais não é o nome é JSX
    return (
        <header className="banner">
            <img src={`${process.env.PUBLIC_URL}/imagens/banner.png`}  alt="O banner principal da página do Organo"/>
        </header>
    )
}