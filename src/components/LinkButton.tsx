
interface linkProps {
  content: string
  url?: string
}

export default function LinkButton(props: linkProps) {
  return (
    <a href={props.url} className={`flex justify-center items-center py-4 w-full sm:w-[400px] bg-indigo-400 hover:bg-indigo-600 hover:scale-110 duration-75 rounded-sm font-semibold font-black text-lg cursor-pointer border-b-4 border-r-4 border-black dark:text-white dark:bg-gray-700 dark:hover:bg-lime-600`} target="_blank" rel="noopener noreferrer ">{props.content}</a>
  )
}
