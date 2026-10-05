import { useEffect, useState } from "react";
import { typewriterPhrases } from "@/data/site";

export default function TypewriterText() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [visibleLength, setVisibleLength] = useState(0);
  const phrase = typewriterPhrases[phraseIndex];

  useEffect(() => {
    const isComplete = visibleLength === phrase.length;
    const delay = isComplete ? 1800 : 150;
    const timer = window.setTimeout(() => {
      if (isComplete) {
        setPhraseIndex((index) => (index + 1) % typewriterPhrases.length);
        setVisibleLength(0);
        return;
      }

      setVisibleLength((length) => length + 1);
    }, delay);

    return () => window.clearTimeout(timer);
  }, [phrase, visibleLength]);

  return <>{phrase.slice(0, visibleLength)}</>;
}
