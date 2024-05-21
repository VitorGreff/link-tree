import { DarkIcon, LightIcon } from "./icons"

type Theme = 'dark' | 'light'

interface IconProps {
  theme?: Theme
  changeTheme?: () => void
}

export default function ThemeButton(props: IconProps) {
  return props.theme === 'dark' ? (
    <div onClick={props.changeTheme}
      className={'flex flex-col justify-center items-start cursor-pointer w-[220px] h-12 border-black border-2 rounded-full mb-6 bg-gray-700 text-white p-1'}
    >
      {LightIcon()}
    </div>
  ) :
    // dark button
    <div onClick={props.changeTheme}
      className={'flex flex-col justify-center items-end cursor-pointer w-[220px] h-12 border-gray-500 border-2 rounded-full mb-6 p-1'}
    >
      {DarkIcon()}
    </div>
}
