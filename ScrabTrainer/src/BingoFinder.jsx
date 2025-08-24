import SevenLetter from "./SevenLetter"
import EightLetter from "./EightLetter"

function BingoFinder({ mode }) {
    return (
        mode == "find" ? (
            <SevenLetter />
        ) : (
            <EightLetter />
        )
    )
}

export default BingoFinder