import Row from "./Row";
import useApi from "../hooks/use-api";
import useKeyboard from "../hooks/use-keyboard";

const Main = () => {
  const { errorMsg, winWord } = useApi();
  const { isWin, typedWord, activeRow } = useKeyboard(winWord);

  const rows = [];

  for (let i = 0; i < 6; i++) {
    const row = (
      <Row
        winWord={winWord}
        typedWord={typedWord}
        key={i}
        isActive={i === activeRow}
      ></Row>
    );
    rows.push(row);
  }

  return (
    <div>
      {errorMsg ? <h3>{errorMsg}</h3> : isWin ? <h3>You win!</h3> : rows}
    </div>
  );
};

export default Main;
