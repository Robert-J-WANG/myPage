import { useEffect, useRef } from "react";
import { initializeCanvasAndStars } from "../utils/canvas"; // 导入 canvas.js 中的函数

// 自定义 Hook：useCanvas
const useCanvas = (pageSize, starSizes, starColor, starNumber) => {
  const canvasRef = useRef(null); // 用于引用 canvas 元素
  const stars = useRef([]); // 存储星星数据

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // 设置 canvas 尺寸基于传入的页面大小
    canvas.width = pageSize.width;
    canvas.height = pageSize.height;

    // 初始化并启动动画
    const cleanupAnimation = initializeCanvasAndStars(
      canvas,
      ctx,
      starSizes,
      starColor,
      starNumber,
      stars.current
    );

    // 在组件卸载时清理动画
    return () => {
      cleanupAnimation(); // 调用返回的清理函数，取消动画
    };
  }, [pageSize, starSizes, starColor, starNumber]); // 当 pageSize 或 starSizes 发生变化时重新执行

  // 返回 canvas 的引用以便在组件中使用
  return canvasRef;
};

export default useCanvas;
