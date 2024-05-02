import styles from '../styles/linkButton.module.css'

interface linkProps {
    content: string
    url?: string
}

export default function LinkButton(props: linkProps) {
    return (
        props.url ? (
            <a href={props.url} className={styles.linkButton} target="_blank" rel="noopener noreferrer">{props.content}</a>
        ) : (
            <span className={styles.linkButton}>{props.content}</span>
        )
    )
}