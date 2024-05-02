import photo from '../assets/profile_photo.jpeg'
import styles from '../styles/photo.module.css'
export default function Photo() {
    return (
        <img src={photo} alt="profile" className={styles.photo} />
    )
}