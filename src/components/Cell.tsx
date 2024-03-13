import { useEffect, useState } from "react";

type Props = {
  letter: string;
  allLetters: string[];
  typedLetter: string;
  isActive: boolean;
};

const Cell: React.FC<Props> = ({
  letter,
  allLetters,
  typedLetter,
  isActive,
}) => {
  const [letterExist, setLetterExist] = useState(false);
  const [isLetterTheOne, setIsLetterTheOne] = useState(false);

  useEffect(() => {
    setLetterExist(allLetters.includes(typedLetter));
    setIsLetterTheOne(letter === typedLetter);
  }, [isActive]);

  return (
    <div
      className={`cell ${letterExist ? "backgroundYellow" : ""} ${
        isLetterTheOne ? "backgroundGreen" : ""
      } ${isActive ? "backgroundGray" : ""}`}
    >
      {typedLetter}
    </div>
  );
};

export default Cell;
