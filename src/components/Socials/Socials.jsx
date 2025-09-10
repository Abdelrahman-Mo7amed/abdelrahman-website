import styles from './Socials.module.css'
import { FaLinkedin, FaGithub, FaTwitter, FaYoutube, FaFacebook, FaBehance } from "react-icons/fa";


function Socials(){
    return(
        <div className={styles.socials}>
            <a href="https://www.linkedin.com/in/abdelrhmanmohmed/" target="_blank" rel="noreferrer">
            <FaLinkedin />
            </a>
            <a href="https://github.com/Abdelrahman-Mo7amed" target="_blank" rel="noreferrer">
            <FaGithub />
            </a>
            <a href="https://x.com/abr7maan" target="_blank" rel="noreferrer">
            <FaTwitter />
            </a>
            <a href="https://www.facebook.com/itz.boudii" target="_blank" rel="noreferrer">
            <FaFacebook />
            </a>
            <a href="https://www.behance.net/boudymohamed1" target="_blank" rel="noreferrer">
            <FaBehance />
            </a>
            <a href="https://www.youtube.com/@taalimhub" target="_blank" rel="noreferrer">
            <FaYoutube />
            </a>
      </div>
    )
}

export default Socials;