const didAnimationBgOpen = true;

function Index({ header, content, animationBackground }) {
  return (
    <div className="relative w-full min-h-screen text-textColor">
      {/* header 导航区 */}
      <header className="w-full h-16 border-b-[1px] border-subBdColor flex justify-center items-center">
        {header}
      </header>

      {/* content 内容区 */}
      <main className="container mx-auto max-w-[1280px] flex flex-col justify-start items-center">
        {content}
      </main>

      {/* 页面背景组件 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden bg-bgColor -z-10">
        {didAnimationBgOpen && animationBackground}
      </div>
    </div>
  );
}

export default Index;
