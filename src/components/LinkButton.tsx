import styles from '../styles/linkButton.module.css'

interface linkProps {
    content: string
    url?: string
}

export default function LinkButton(props: linkProps) {
    return (
        <a href={props.url} className={styles.link_button} target="_blank" rel="noopener noreferrer">{props.content}</a>
    )
}