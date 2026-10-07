import useCanvas from "@/hooks/useCanvas";
import useWindowSize from "@/hooks/useWindowSize";

const AnimationBackground = ({ starSizes, starColor, starNumber }) => {
  const viewportSize = useWindowSize();
  const canvasRef = useCanvas(
    viewportSize,
    starSizes,
    starColor,
    starNumber,
  );

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none block size-full"
      aria-hidden="true"
    />
  );
};

export default AnimationBackground;
