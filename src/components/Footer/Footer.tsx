import AluraLogo from '../AluraLogo/AluraLogo'
import FooterSite from "./Footer.module.css"
export default function Footer() {
    return (
        <footer className={FooterSite.footerAlura}>
            <AluraLogo />
            <p style={{maxWidth:"270px"}}> Orgulhosamente criado por DevSoutinho e Alura cursos </p>
        </footer>
    )
}