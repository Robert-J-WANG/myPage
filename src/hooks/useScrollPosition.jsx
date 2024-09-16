import React, { useEffect, useState } from "react";

export default function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState({
    scrollX: 0,
    scrollY: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      // 获取当前滚动条的位置
      const left = window.scrollX;
      const top = window.scrollY;
      setScrollPosition({ scrollX: left, scrollY: top });
    };

    // 监听滚动事件
    window.addEventListener("scroll", handleScroll);

    // 初始化时也需要更新滚动位置
    handleScroll();

    // 组件卸载时清理事件监听器
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
}
