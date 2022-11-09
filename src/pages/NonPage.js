import '../Components/NonPage/ErrorPage.css'
import { Link } from 'react-router-dom'

export default function NonPage() {
    return (
        <div className="nonPage">
            <img src='./logo.png' alt='Logo da Letter Consulting'/>
            <h1>Página não encontrada</h1>
            <p>Por favor retorne a página inicial</p>
            <Link to='/'>Página Inicial</Link>
        </div>
    )
}