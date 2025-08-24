import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BingoFinder from './BingoFinder.jsx'
import Navbar from './Navbar.jsx'

function App() {
  const [mode, setMode] = useState(null)

  return (
    <div className="h-screen flex flex-col">
        <Navbar mode={mode} setMode={setMode} />
        <div className="flex-1 flex items-center justify-center bg-gray-900">
            {!mode ? (
            <div className="flex flex-col sm:flex-row gap-8">
                <button onClick={() => setMode("find")} className="w-48 h-48 border-4 border-cyan-400 text-cyan-400 text-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-colors duration-300 rounded-lg">
                    Find the Bingo
                </button>
                <button onClick={() => setMode("bingo-1")} className="w-48 h-48 border-4 border-orange-400 text-orange-400 text-xl font-semibold hover:bg-orange-400 hover:text-gray-900 transition-colors duration-300 rounded-lg">
                    Bingo Hook
                </button>
            </div>
            ) : (
            <BingoFinder mode={mode} />
            )}
        </div>
    </div>
  )
}

export default App
