import { useEffect, useState } from "react";

export default function usePageSize() {
  // 用于追踪整个页面的宽高状态
  const [pageSize, setPageSize] = useState({
    width: 0,
    height: 0,
  });

  // 使用 ResizeObserver 监听整个页面的尺寸变化
  useEffect(() => {
    const updatePageSize = () => {
      const width = document.documentElement.scrollWidth;
      const height = document.documentElement.scrollHeight;
      setPageSize({ width, height });
    };

    // 创建一个 ResizeObserver 监听整个页面的变化
    const observer = new ResizeObserver(updatePageSize);

    // 监听整个 HTML 文档的尺寸变化
    observer.observe(document.documentElement);

    // 初始化尺寸
    updatePageSize();

    // 组件卸载时清理 ResizeObserver
    return () => {
      observer.disconnect();
    };
  }, []); // 在组件挂载时监听页面变化
  return pageSize;
}
