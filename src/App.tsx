import { FC } from "react";
import "./App.css";
import Main from "./components/Main";

export const App: FC = () => {
  return (
    <div className="wordle">
      <Main />
    </div>
  );
};
