import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // 确保 AOS 的 CSS 被导入

// 自定义钩子封装 AOS 初始化逻辑
export const useAOSAnimation = (duration = 1000) => {
  useEffect(() => {
    // 初始化 AOS
    AOS.init({
      duration, // 动画持续时间
    });
  }, [duration]);
};
