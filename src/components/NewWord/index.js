import "./NewWord.css";
import { useContext } from "react";
import WordContext from "../../context/WordContext";

import { wordService } from "./../../_services/word.service";

export default function NewWord() {
  const { setWord } = useContext(WordContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const uniqueWord = event.target[0].value.split(" ");

    wordService
      .getWordByWord(uniqueWord.toString().replace(/,/g, " "))
      .then((data) => {
        setWord([]);
        setWord(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="form-container">
      <form action="" onSubmit={handleSubmit}>
        <textarea rows="1"></textarea>
        <button>Ok</button>
      </form>
    </div>
  );
}
