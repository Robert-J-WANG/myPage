import { useEffect, useState } from "react";

const phrases = ["Robert J. WANG.", "a Software Developer."];

export default function TypewriterText() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [visibleLength, setVisibleLength] = useState(0);
  const phrase = phrases[phraseIndex];

  useEffect(() => {
    const isComplete = visibleLength === phrase.length;
    const delay = isComplete ? 1800 : 150;
    const timer = window.setTimeout(() => {
      if (isComplete) {
        setPhraseIndex((index) => (index + 1) % phrases.length);
        setVisibleLength(0);
        return;
      }

      setVisibleLength((length) => length + 1);
    }, delay);

    return () => window.clearTimeout(timer);
  }, [phrase, visibleLength]);

  return <>{phrase.slice(0, visibleLength)}</>;
}
