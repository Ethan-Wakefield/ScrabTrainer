function Navbar({ mode, setMode }) {
    return (
        <div className="flex items-center justify-between text-xl font-semibold text-white bg-gray-900 pt-4">
            {
                mode != null ? (
                    <button onClick={() => setMode(null)} className="ml-4 w-[30px] text-white rounded hover:bg-gray-800 transition-colors">←</button>
                ) : (
                    <div className="ml-4 w-[30px]"></div>
                )
            }
            <div className="text-xl font-semibold text-white">ScrabTrainer</div>
            <div className="w-[30px] mr-4"></div>
        </div>
    )

}

export default Navbar