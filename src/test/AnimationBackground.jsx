import React from "react";
import useCanvas from "../hooks/useCanvas"; // 导入自定义 Hook
import usePageSize from "../hooks/usePageSize";

/**
 * 根据不同尺寸的页面，绘制指定尺寸组的小星星
 * @param {*}
 * starSizes： 动画小星星组的尺寸  //[2, 5, 7, 9]
 * starNumber: 星星总数
 * starColor: 星星的颜色
 * @returns 画布canvas
 */
const AnimationBackground = ({ starSizes, starColor, starNumber }) => {
  const pageSize = usePageSize();

  // 使用自定义 Hook 获取 canvas 的引用
  const canvasRef = useCanvas(pageSize, starSizes, starColor, starNumber);
  return <canvas ref={canvasRef} />;
};

export default AnimationBackground;
