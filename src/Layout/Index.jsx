import PropTypes from "prop-types";

Index.propTypes = {
  header: PropTypes.node, // 头部区显示的内容
  content: PropTypes.node, // 左侧栏显示的内容
  // footer: PropTypes.node, // 右侧内容栏显示的内容
  animationBackground: PropTypes.node, // 背景动画内容
};
function Index({ header, content, animationBackground }) {
  return (
    <div className="relative w-full text-textColor ">
      {/* header 导航区*/}
      <header
        className=" w-full h-16 border-b-[1px] border-subBdColor flexjustify-center items-center
      "
      >
        {header}
      </header>
      {/* content 内容区*/}
      <main className=" container mx-auto min-h-[calc(100vh-64px)] flex flex-col justify-start items-center">
        {content}
      </main>
      {/* footer 页脚区*/}
      {/* <footer className="flex justify-center items-center w-full h-10 border-t-[1px] border-t-purple-50 ">
        {footer}
      </footer> */}
      {/* 页面背景组件 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden bg-bgColor -z-10">
        {animationBackground}
      </div>
    </div>
  );
}

export default Index;
