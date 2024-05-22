import Layout from "./components/Layout"
import useAppData from "./hooks/useHook"

function App() {
  const { theme } = useAppData()
  return (
    <div className={`${theme === 'dark' ? 'bg-gray-900' : ''} ${theme} min-h-screen min-w-screen flex flex-col justify-center items-center p-8`}>
      <Layout />
    </div>

  )
}

export default App
