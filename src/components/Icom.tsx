import { DarkIcon, LightIcon } from "./icons"

interface IconProps {
  theme: string
  changeTheme: () => void
}

export default function Icon(props: IconProps) {
  return props.theme === 'dark' ? (
    <div onClick={props.changeTheme}
      className={'flex flex-col justify-center items-start cursor-pointer w-[220px] h-11 border-black border-2 rounded-full mb-6 bg-black text-white'}
    >
      {LightIcon(8)}
    </div>
  ) :
    // dark button
    <div onClick={props.changeTheme}
      className={'flex flex-col justify-center items-end cursor-pointer w-[220px] h-11 border-gray-500 border-2 rounded-full mb-6 '}
    >
      {DarkIcon(8)}
    </div>
}
