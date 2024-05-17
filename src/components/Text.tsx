interface textProps {
  class: string
  text: string
}


export default function Text(props: textProps) {
  return (
    <span className={`${props.class}`}>
      {props.text}
    </span>
  )
}
