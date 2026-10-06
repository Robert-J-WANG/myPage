import { useEffect, useState } from "react";

import { typewriterText } from "@/data/site";

export default function TypewriterText() {
  const [visibleLength, setVisibleLength] = useState(0);

  useEffect(() => {
    const isComplete = visibleLength === typewriterText.length;
    const delay = isComplete ? 1800 : 150;

    const timer = window.setTimeout(() => {
      setVisibleLength((length) => (isComplete ? 0 : length + 1));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [visibleLength]);

  return (
    <span className="inline-grid">
      <span aria-hidden="true" className="invisible col-start-1 row-start-1">
        {typewriterText}
      </span>
      <span className="col-start-1 row-start-1">
        {typewriterText.slice(0, visibleLength)}
      </span>
    </span>
  );
}
