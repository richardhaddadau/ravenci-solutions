"use client";
import { useEffect, useState } from "react";

export default function AnimatedText() {
  const [animatedText, setAnimatedText] = useState("");
  const [cursorClass, setCursorClass] = useState("cursor");

  const phrases = ["Create", "Design", "Develop", "Solve", "Do more"];

  let currentPhraseIndex = 0;
  let charIndex = 0;
  const delay = 100; // milliseconds
  const pause = 1500; // milliseconds

  function typePhrase() {
    if (charIndex < phrases[currentPhraseIndex].length) {
      setAnimatedText(phrases[currentPhraseIndex].substring(0, charIndex + 1));
      charIndex++;
      setTimeout(typePhrase, delay);
    } else {
      setCursorClass("cursor blink");
      setTimeout(() => {
        setCursorClass("cursor");

        if (currentPhraseIndex < phrases.length - 1) {
          backspacePhrase();
        } else {
          setCursorClass("cursor hidden");
        }
      }, pause);
    }
  }

  function backspacePhrase() {
    if (charIndex > 0) {
      setAnimatedText(phrases[currentPhraseIndex].substring(0, charIndex - 1));
      charIndex--;
      setTimeout(backspacePhrase, delay);
    } else {
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      setTimeout(typePhrase, delay);
    }
  }

  useEffect(() => {
    // Initialize typing animation
    typePhrase();
  }, []);

  return (
    <span className="pr-2 md:pr-4">
      {animatedText}
      <span className={cursorClass + " -mr-1 md:-mr-2 font-light"}>|</span>
    </span>
  );
}
