import { useState } from "react";
import LinkButton from "./LinkButton";
import Photo from "./Photo";
import Text from "./Text";
import Icon from "./Icom";

export default function Layout() {
  type Theme = 'dark' | 'light'
  const [theme, setTheme] = useState<Theme>('light')

  function changeTheme(): void {
    if (theme === 'dark') setTheme('light')
    else setTheme('dark')
  }

  return (
    <div className={`flex flex-col justify-center items-center min-h-[800px] min-w-[500px] border-2 border-black rounded-xl gap-4 p-5 bg-gray-100`}>

      <div className="flex justify-end w-full mr-14">
        <Icon theme={theme} changeTheme={changeTheme} />
      </div>
      <Photo />

      <div className={"flex flex-col justify-center items-center gap-2 mb-2 mt-2"}>
        <Text class={"text-black text-xl font-bold"} text={"Vitor Greff"}></Text>
        <Text class={"text-indigo-700 text-xl font-bold"} text={"Brazil"}></Text>
        <Text class={"text-black text-lg font-thin"} text={'"Abstraction Engineer"'}></Text>
      </div>

      <LinkButton content="Github" url="https://github.com/VitorGreff"></LinkButton>
      <LinkButton content="Linkedin" url="https://www.linkedin.com/in/greff/"></LinkButton>
      <LinkButton content="GoodReads" url="https://www.goodreads.com/user/show/149662263-vitor-greff"></LinkButton>
      <LinkButton content="Spotify" url="https://open.spotify.com/user/j2mp8h8ym4vippy5a5ep96ig3"></LinkButton>
      <LinkButton content="Curriculum" url="https://greftree.vercel.app/curriculo.pdf"></LinkButton>
    </div>
  )
}
