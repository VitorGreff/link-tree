import { DarkIcon, LightIcon } from "./icons"

interface IconProps {
  theme: string
  changeTheme: () => void
}

export default function Icon(props: IconProps) {
  return props.theme === 'dark' ? (
    <div onClick={props.changeTheme}
      className={'flex flex-col justify-center items-center cursor-pointer w-10 h-10 rounded-full '}
    >
      {LightIcon(8)}
    </div>
  ) :
    <div onClick={props.changeTheme}
      className={'flex flex-col justify-center items-center cursor-pointer w-10 h-10 rounded-full '}
    >
      {DarkIcon(8)}
    </div>
}
