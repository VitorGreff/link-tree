import styles from '../styles/profile.module.css'
import Photo from './Photo'
import Text from './Text'
import LinkButton from './LinkButton'
export default function Profile() {
    return (
        <div className={styles.profile}>
            <Photo></Photo>
            <Text size={20} weight={700} color='white' content='Vitor Greff'></Text>
            <Text size={20} weight={700} color='#83FF33' content='Brazil'></Text>
            <Text size={18} weight={400} color='white' content='"Abstraction Engineer"'></Text>
            <LinkButton content='Github' url='https://github.com/VitorGreff'></LinkButton>
            <LinkButton content='Linkedin' url='https://www.linkedin.com/in/greff/'></LinkButton>
            <LinkButton content='GoodReads' url='https://www.goodreads.com/user/show/149662263-vitor-greff'></LinkButton>
            <LinkButton content='Spotify' url='https://open.spotify.com/user/j2mp8h8ym4vippy5a5ep96ig3'></LinkButton>
            <LinkButton content='Curriculum' url='/curriculo.pdf'></LinkButton>
        </div>
    )
}