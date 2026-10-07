import { useEffect, useRef } from "react";

import { initializeCanvasAndStars } from "@/lib/canvas";

const useCanvas = (viewportSize, starSizes, starColor, starNumber) => {
  const canvasRef = useRef(null);
  const stars = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas || viewportSize.width < 1 || viewportSize.height < 1) {
      return undefined;
    }

    const ctx = canvas.getContext("2d");
    canvas.width = viewportSize.width;
    canvas.height = viewportSize.height;

    return initializeCanvasAndStars(
      canvas,
      ctx,
      starSizes,
      starColor,
      starNumber,
      stars.current,
    );
  }, [
    viewportSize.width,
    viewportSize.height,
    starSizes,
    starColor,
    starNumber,
  ]);

  return canvasRef;
};

export default useCanvas;
