function Tiles({ scrambledWord, title }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {scrambledWord.split('').map((letter, index) => (
        <div
          key={index}
          className={"gray-800 border-white border-solid rounded-lg flex items-center justify-center " + (title ? ("border-4 w-18 h-18") : ("border-2 w-12 h-12"))}
        >
          <span className={"font-bold text-white uppercase " + (title ? ("text-5xl") : ("text-3xl"))} >
            {letter}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Tiles;