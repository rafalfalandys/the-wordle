import { useCallback, useEffect, useState } from "react";

const useKeyboard = (winWord: string) => {
  const [typedWord, setTypedWord] = useState<string[]>([]);
  const [activeRow, setActiveRow] = useState(0);
  const [guessedLetters, setGuessedLetters] = useState<boolean[]>([]);
  const [isWin, setIsWin] = useState<boolean>(false);

  const keyDownHandler = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Backspace") {
        setTypedWord((prev) => {
          const newArr = [...prev];
          newArr.pop();
          return newArr || [];
        });

        setGuessedLetters((prev) => {
          const newArr = [...prev];
          newArr.pop();
          return newArr || [];
        });
      }

      if (e.key.trim().length === 1) {
        setTypedWord((prev) => {
          if (prev.length === 5) return prev;

          const newArr = [...prev, e.key];
          return newArr;
        });

        setGuessedLetters((prev) => {
          if (prev.length === 5) return prev;

          const newArr = [...prev, e.key === winWord[prev.length]];
          return newArr;
        });
      }

      if (e.key === "Enter") {
        setActiveRow((prev) => prev + 1);
        setTypedWord([]);
        setGuessedLetters([]);
      }
    },
    [winWord]
  );

  useEffect(() => {
    if (winWord) window.addEventListener("keydown", keyDownHandler);
  }, [keyDownHandler, winWord]);

  useEffect(() => {
    const allTrue = guessedLetters.every((letter) => letter === true);

    if ((allTrue && guessedLetters.length === 5) || isWin) {
      setIsWin(true);
    }
  }, [guessedLetters, isWin]);

  return { typedWord, activeRow, isWin };
};

export default useKeyboard;
