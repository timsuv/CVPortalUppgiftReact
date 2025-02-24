import { useEffect, useRef } from "react";

const EasterEgg = () => {
  const sequence = "1337";
  const inputSequence = useRef("");
  const isAlerted = useRef(false);

  useEffect(() => {
    const handleKeyDown = (event: { key: string; }) => {
      inputSequence.current += event.key;

      if (sequence.startsWith(inputSequence.current)) {
        if (inputSequence.current === sequence && !isAlerted.current) {
          isAlerted.current = true;
          alert("You found the easter egg!");
          setTimeout(() => {
            isAlerted.current = false;
          }, 500);
          inputSequence.current = "";
        }
      } else {
        inputSequence.current = "";
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return null;
};

export default EasterEgg;
