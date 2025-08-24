import { eightLetterWords } from "./eightLetterWords.js"
import Tiles from "./Tiles.jsx";
import { useState } from 'react'

function EightLetter() {
    const initialWord = getWord();
    const [word, setWord] = useState(initialWord)
    const [answerShowing, setAnswerShowing] = useState(false)
    const [scrambledWord, setScrambledWord] = useState(() => scrambleWord(initialWord))

    function getWord() {
        const randomIndex = Math.floor(Math.random() * eightLetterWords.length);
        return eightLetterWords[randomIndex];
    }

    function scrambleWord(word) {
        return word.split('').sort(() => Math.random() - 0.5).join('');
    }

    function getNewWord() {
        const newWord = getWord();
        setWord(newWord);
        setScrambledWord(scrambleWord(newWord));
        setAnswerShowing(false);
    }

    return (
        <div className="text-center">
            <div className="text-5xl font-bold text-white mb-6">
                <Tiles scrambledWord={scrambledWord[0]} title={true} />
            </div>
            <div className="text-4xl font-bold text-white mb-4">
                <Tiles scrambledWord={scrambledWord.slice(1)} title={false} />
            </div>
            <button 
                onClick={getNewWord}
                className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors mr-4"
            >
                Get New Word
            </button>
            <button 
                onClick={() => setAnswerShowing(!answerShowing)}
                className="px-6 py-2 text-white rounded hover:bg-gray-800 transition-colors"
            >
                Reveal Answer
            </button>
            <div className="h-16 flex items-center justify-center mt-4">
                {answerShowing && <div className="text-white text-4xl font-bold">{word}</div>}
            </div>
        </div>
    )


}

export default EightLetter