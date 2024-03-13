import { useEffect, useState } from "react";
import Cell from "./Cell";

type Props = {
  winWord: string;
  typedWord: string[];
  isActive: boolean;
};

const Row: React.FC<Props> = ({ winWord, typedWord, isActive }) => {
  const [playerWord, setPlayerWord] = useState<string[]>([]);

  useEffect(() => {
    if (isActive) setPlayerWord(typedWord);
  }, [typedWord, isActive]);

  const letters = [...winWord];

  const cells = letters.map((letter, i) => {
    const theLetter = playerWord[i];
    return (
      <Cell
        letter={letter}
        allLetters={letters}
        key={i}
        typedLetter={theLetter}
        isActive={isActive}
      ></Cell>
    );
  });

  return <div className="row">{cells}</div>;
};

export default Row;
