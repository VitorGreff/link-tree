interface textProps {
    size: number
    weight: number
    color: string
    content: string
}
export default function Text(props: textProps) {
    return (
        <span style={
            {
                fontSize: props.size + 'px',
                fontWeight: props.weight,
                color: props.color,
                marginTop: '20px'
            }
        }>
            {props.content}
        </span>
    )
}