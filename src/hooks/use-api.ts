import { useEffect, useState } from "react";

const useApi = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [winWord, setWinWord] = useState("");

  useEffect(() => {
    const fetchWord = async () => {
      try {
        setErrorMsg("");
        const res = await fetch(
          "https://65f060de7e814812b0451409--lustrous-pudding-ec2574.netlify.app/api/random-words"
        );

        if (!res.ok) throw new Error();

        const data = await res.json();
        console.log(data.word);

        setWinWord(data.word);
      } catch (error) {
        setErrorMsg("No word fetched, reload the page, please.");
        console.error(error);
      }
    };

    fetchWord();
  }, []);

  return { errorMsg, winWord };
};

export default useApi;
