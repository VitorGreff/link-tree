
interface linkProps {
  content: string
  url?: string
}

export default function LinkButton(props: linkProps) {
  return (
    <a href={props.url} className={`flex justify-center items-center h-[55px] w-[400px] bg-indigo-400 rounded-md font-semibold font-black text-lg cursor-pointer`} target="_blank" rel="noopener noreferrer">{props.content}</a>
  )
}
