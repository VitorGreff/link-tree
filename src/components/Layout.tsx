import LinkButton from "./LinkButton";
import Photo from "./Photo";
import Text from "./Text";
import ThemeButton from "./ThemeButton";
import useAppData from "../hooks/useHook";

export default function Layout() {
  const { theme, changeTheme } = useAppData()

  return (
    <div className={`flex flex-col justify-center items-center sm:border-2 dark:sm:bg-gray-800 border-gray-500 dark:border-black rounded-xl gap-4 p-10 sm:bg-gray-100`}>
      <ThemeButton theme={theme} changeTheme={changeTheme} />
      <Photo />

      <div className={`flex flex-col justify-center items-center gap-2 mb-2 mt-2`}>
        <Text class={`text-black dark:text-white text-xl font-bold`} text={"Vitor Greff"}></Text>
        <Text class={`text-indigo-700 dark:text-lime-400 text-xl font-bold`} text={"Brazil"}></Text>
        <Text class={`text-black dark:text-white text-lg font-normal`} text={'"Abstraction Engineer"'}></Text>
      </div>

      <div className="flex flex-col gap-4 w-full sm:w-auto">
        <LinkButton content="Github" url="https://github.com/VitorGreff"></LinkButton>
        <LinkButton content="Linkedin" url="https://www.linkedin.com/in/greff/"></LinkButton>
        <LinkButton content="GoodReads" url="https://www.goodreads.com/user/show/149662263-vitor-greff"></LinkButton>
        <LinkButton content="Spotify" url="https://open.spotify.com/user/j2mp8h8ym4vippy5a5ep96ig3"></LinkButton>
        <LinkButton content="Resume" url="https://greftree.vercel.app/curriculo.pdf"></LinkButton>
      </div>
    </div>
  )
}
