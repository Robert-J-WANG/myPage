const didAnimationBgOpen = true;

function Index({ header, content, footer, animationBackground }) {
  return (
    <div className="relative isolate min-h-screen w-full text-content transition-colors">
      {/* header 导航区 */}
      <header className="sticky top-0 z-40 w-full border-b border-border-strong bg-chrome backdrop-blur-xl">
        {header}
      </header>

      {/* content 内容区 */}
      <main className="container relative z-10 mx-auto flex max-w-[1280px] flex-col items-center justify-start">
        {content}
      </main>

      {footer}

      {/* 固定在视口内的背景动画，不随页面内容高度变化 */}
      <div className="fixed inset-0 z-0 h-screen w-screen overflow-hidden bg-page transition-colors">
        {didAnimationBgOpen && animationBackground}
      </div>
    </div>
  );
}

export default Index;
